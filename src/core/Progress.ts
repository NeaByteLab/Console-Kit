import { getColorCode, getBackgroundColorCode, getStyleCode } from '@utils/Colors'
import type { ProgressOptions, ProgressState, ProgressOptionsInternal } from '@interfaces/Progress'

/**
 * Progress - Terminal progress bar component with customizable appearance
 *
 * Provides a complete progress bar implementation for terminal applications including
 * progress tracking, visual updates, and various completion states (success, error, warning, info).
 * Supports custom colors, backgrounds, text styles, and progress bar patterns.
 */
export class Progress {
  /** Internal state management for the progress bar instance */
  private state: ProgressState
  /** Timer reference for animation loop */
  private intervalId: ReturnType<typeof setInterval> | null = null
  /** Default configuration options with fallback values */
  private readonly defaultOptions: ProgressOptionsInternal = {
    text: '',
    total: 100,
    current: 0,
    style: 'bar',
    color: 'cyan',
    backgroundColor: '',
    show: true,
    bold: false,
    italic: false,
    underline: false
  }

  /**
   * Creates a new progress bar instance with the specified configuration
   *
   * @param options - Configuration options for progress bar appearance and behavior
   * @throws Error if options are invalid
   */
  constructor(options: ProgressOptions) {
    const validatedOptions = this.validateOptions(options)
    const mergedOptions: ProgressOptionsInternal = {
      text: validatedOptions.text ?? this.defaultOptions.text,
      total: validatedOptions.total,
      current: validatedOptions.current ?? this.defaultOptions.current,
      style: validatedOptions.style ?? this.defaultOptions.style,
      color: validatedOptions.color ?? this.defaultOptions.color,
      backgroundColor: validatedOptions.backgroundColor ?? this.defaultOptions.backgroundColor,
      show: validatedOptions.show ?? this.defaultOptions.show,
      bold: validatedOptions.bold ?? this.defaultOptions.bold,
      italic: validatedOptions.italic ?? this.defaultOptions.italic,
      underline: validatedOptions.underline ?? this.defaultOptions.underline
    }
    this.state = {
      text: mergedOptions.text,
      total: mergedOptions.total,
      current: mergedOptions.current,
      isRunning: false,
      startTime: 0,
      options: mergedOptions
    }
  }

  /**
   * Validates and sanitizes progress options for safety
   *
   * @param options - Raw progress options to validate
   * @returns Sanitized options with safe defaults
   * @throws Error if critical options are invalid
   */
  private validateOptions(options: ProgressOptions): ProgressOptions {
    if (
      typeof options.total !== 'number' ||
      !Number.isFinite(options.total) ||
      options.total <= 0
    ) {
      throw new Error('Progress total must be a positive finite number')
    }
    if (options.current !== undefined) {
      if (typeof options.current !== 'number' || !Number.isFinite(options.current)) {
        throw new Error('Progress current must be a finite number')
      }
      if (options.current < 0) {
        options.current = 0
      }
      if (options.current > options.total) {
        options.current = options.total
      }
    }
    if (options.style !== undefined && !['bar', 'blocks', 'dots'].includes(options.style)) {
      throw new Error('Progress style must be one of: bar, blocks, dots')
    }
    return options
  }

  /**
   * Starts the progress bar with optional text update
   *
   * @param text - Optional text to display with the progress bar (overrides existing text if provided)
   */
  async start(text?: string): Promise<void> {
    if (this.state.isRunning) {
      return
    }
    if (text) {
      this.state.text = text
    }
    this.state.isRunning = true
    this.state.startTime = Date.now()
    this.render()
    this.intervalId = setInterval(() => this.render(), 80)
  }

  /**
   * Updates the current progress value and re-renders the progress bar
   *
   * @param current - New current progress value (will be clamped between 0 and total)
   */
  update(current: number): void {
    if (!Number.isFinite(current)) {
      console.warn('Progress update: Invalid value provided, ignoring update')
      return
    }
    this.state.current = Math.max(0, Math.min(this.state.total, current))
    if (this.state.isRunning) {
      this.render()
    }
  }

  /**
   * Increments the current progress value by the specified amount
   *
   * @param amount - Amount to increment the progress by (can be negative for decrement)
   */
  increment(amount: number): void {
    if (!Number.isFinite(amount)) {
      console.warn('Progress increment: Invalid amount provided, ignoring increment')
      return
    }
    this.update(this.state.current + amount)
  }

  /**
   * Sets the progress to 100% and displays completion
   */
  async complete(): Promise<void> {
    this.update(this.state.total)
    await this.succeed()
  }

  /**
   * Stops the progress bar and displays a success message with green checkmark
   *
   * @param text - Optional success message text (uses current progress text if not provided)
   */
  async succeed(text?: string): Promise<void> {
    await this.stop()
    const message = text || this.state.text
    const successColor = getColorCode('green')
    process.stdout.write(`${successColor}✔\x1b[0m ${message}\n`)
  }

  /**
   * Stops the progress bar and displays an error message with red X mark
   *
   * @param text - Optional error message text (uses current progress text if not provided)
   */
  async fail(text?: string): Promise<void> {
    await this.stop()
    const message = text || this.state.text
    const errorColor = getColorCode('red')
    process.stdout.write(`${errorColor}✖\x1b[0m ${message}\n`)
  }

  /**
   * Stops the progress bar and displays a warning message with yellow warning symbol
   *
   * @param text - Optional warning message text (uses current progress text if not provided)
   */
  async warn(text?: string): Promise<void> {
    await this.stop()
    const message = text || this.state.text
    const warningColor = getColorCode('yellow')
    process.stdout.write(`${warningColor}⚠\x1b[0m ${message}\n`)
  }

  /**
   * Stops the progress bar and displays an info message with blue info symbol
   *
   * @param text - Optional info message text (uses current progress text if not provided)
   */
  async info(text?: string): Promise<void> {
    await this.stop()
    const message = text || this.state.text
    const infoColor = getColorCode('blue')
    process.stdout.write(`${infoColor}ℹ\x1b[0m ${message}\n`)
  }

  /**
   * Stops the progress bar and clears the current terminal line
   */
  async stop(): Promise<void> {
    if (!this.state.isRunning) {
      return
    }
    this.state.isRunning = false
    if (this.intervalId) {
      clearInterval(this.intervalId)
      this.intervalId = null
    }
    process.stdout.write('\r\x1b[K')
  }

  /**
   * Updates the progress bar text while maintaining the current progress state
   *
   * @param text - New text to display alongside the progress bar
   */
  updateText(text: string): void {
    this.state.text = text
    if (this.state.isRunning) {
      this.render()
    }
  }

  /**
   * Renders the current progress bar with applied colors and text styling
   *
   * Updates the terminal output with the current progress visualization,
   * applying color codes, background colors, and text styling as configured.
   * Handles different progress bar styles (bar, blocks, dots) and updates
   * the display in real-time.
   */
  private render(): void {
    if (!this.state.isRunning || !this.state.options.show) {
      return
    }
    const { current, total } = this.state
    const { style } = this.state.options
    const percentage = total > 0 ? Math.min(100, Math.max(0, (current / total) * 100)) : 0
    let visualBar: string
    switch (style) {
      case 'bar':
        visualBar = this.renderBarStyle(percentage)
        break
      case 'blocks':
        visualBar = this.renderBlocksStyle(percentage)
        break
      case 'dots':
        visualBar = this.renderDotsStyle(percentage)
        break
      default:
        visualBar = this.renderBarStyle(percentage)
    }
    const color = this.state.options.color ? getColorCode(this.state.options.color) : ''
    const backgroundColor = this.state.options.backgroundColor
      ? getBackgroundColorCode(this.state.options.backgroundColor)
      : ''
    const styles = getStyleCode({
      bold: this.state.options.bold,
      italic: this.state.options.italic,
      underline: this.state.options.underline
    })
    const text = this.state.text ? ` ${this.state.text}` : ''
    const percentageText = ` ${percentage.toFixed(1)}%`
    process.stdout.write(
      `\r\x1b[K${styles}${backgroundColor}${color}${visualBar}${percentageText}${text}\x1b[0m`
    )
  }

  /**
   * Renders a solid bar style progress bar using filled and empty blocks
   *
   * @param percentage - Current progress percentage (0-100)
   * @returns Visual representation of progress using █ and ░ characters
   */
  private renderBarStyle(percentage: number): string {
    const width = 20
    const filled = Math.round((percentage / 100) * width)
    return '█'.repeat(filled) + '░'.repeat(width - filled)
  }

  /**
   * Renders a blocks style progress bar using filled and empty squares
   *
   * @param percentage - Current progress percentage (0-100)
   * @returns Visual representation of progress using ▣ and ▢ characters
   */
  private renderBlocksStyle(percentage: number): string {
    const width = 20
    const filled = Math.round((percentage / 100) * width)
    return '▣'.repeat(filled) + '▢'.repeat(width - filled)
  }

  /**
   * Renders a dots style progress bar using filled and empty circles
   *
   * @param percentage - Current progress percentage (0-100)
   * @returns Visual representation of progress using ● and ○ characters
   */
  private renderDotsStyle(percentage: number): string {
    const width = 20
    const filled = Math.round((percentage / 100) * width)
    return '●'.repeat(filled) + '○'.repeat(width - filled)
  }
}
