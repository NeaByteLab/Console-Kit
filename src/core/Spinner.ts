import { getColorCode, getBackgroundColorCode, getStyleCode } from '@utils/Colors'
import type { SpinnerOptions, SpinnerState, SpinnerOptionsInternal } from '@interfaces/Spinner'

/**
 * Spinner - Terminal loading animation component with customizable appearance
 *
 * Provides a complete spinner implementation for terminal applications including
 * animation control, text updates, and various completion states (success, error, warning, info).
 * Supports custom colors, backgrounds, text styles, and animation patterns.
 */
export class Spinner {
  /** Internal state management for the spinner instance */
  private state: SpinnerState
  /** Timer reference for animation loop */
  private intervalId: ReturnType<typeof setInterval> | null = null
  /** Default configuration options with fallback values */
  private readonly defaultOptions: SpinnerOptionsInternal = {
    text: '',
    style: 'dots',
    color: 'cyan',
    backgroundColor: '',
    show: true,
    spinner: ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏'],
    bold: false,
    italic: false,
    underline: false
  }

  /**
   * Creates a new spinner instance with the specified configuration
   *
   * @param options - Configuration options for spinner appearance and behavior
   */
  constructor(options: SpinnerOptions = {}) {
    const mergedOptions: SpinnerOptionsInternal = {
      text: options.text ?? this.defaultOptions.text,
      style: options.style ?? this.defaultOptions.style,
      color: options.color ?? this.defaultOptions.color,
      backgroundColor: options.backgroundColor ?? this.defaultOptions.backgroundColor,
      show: options.show ?? this.defaultOptions.show,
      spinner: options.spinner ?? this.defaultOptions.spinner,
      bold: options.bold ?? this.defaultOptions.bold,
      italic: options.italic ?? this.defaultOptions.italic,
      underline: options.underline ?? this.defaultOptions.underline
    }
    this.state = {
      text: mergedOptions.text,
      isRunning: false,
      frameIndex: 0,
      startTime: 0,
      options: mergedOptions
    }
  }

  /**
   * Starts the spinner animation with optional text update
   *
   * @param text - Optional text to display with the spinner (overrides existing text if provided)
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
    this.state.frameIndex = 0
    this.render()
    this.intervalId = setInterval(() => this.render(), 80)
  }

  /**
   * Stops the spinner and displays a success message with green checkmark
   *
   * @param text - Optional success message text (uses current spinner text if not provided)
   */
  async succeed(text?: string): Promise<void> {
    await this.stop()
    const message = text || this.state.text
    const successColor = getColorCode('green')
    process.stdout.write(`${successColor}✔\x1b[0m ${message}\n`)
  }

  /**
   * Stops the spinner and displays an error message with red X mark
   *
   * @param text - Optional error message text (uses current spinner text if not provided)
   */
  async fail(text?: string): Promise<void> {
    await this.stop()
    const message = text || this.state.text
    const errorColor = getColorCode('red')
    process.stdout.write(`${errorColor}✖\x1b[0m ${message}\n`)
  }

  /**
   * Stops the spinner and displays a warning message with yellow warning symbol
   *
   * @param text - Optional warning message text (uses current spinner text if not provided)
   */
  async warn(text?: string): Promise<void> {
    await this.stop()
    const message = text || this.state.text
    const warningColor = getColorCode('yellow')
    process.stdout.write(`${warningColor}⚠\x1b[0m ${message}\n`)
  }

  /**
   * Stops the spinner and displays an info message with blue info symbol
   *
   * @param text - Optional info message text (uses current spinner text if not provided)
   */
  async info(text?: string): Promise<void> {
    await this.stop()
    const message = text || this.state.text
    const infoColor = getColorCode('blue')
    process.stdout.write(`${infoColor}ℹ\x1b[0m ${message}\n`)
  }

  /**
   * Stops the spinner animation and clears the current terminal line
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
   * Updates the spinner text while maintaining the current animation state
   *
   * @param text - New text to display alongside the spinner animation
   */
  updateText(text: string): void {
    this.state.text = text
    if (this.state.isRunning) {
      this.render()
    }
  }

  /**
   * Renders the current spinner frame with applied colors and text
   *
   * Updates the terminal output with the current animation frame, applying
   * color codes, background colors, and text styling as configured.
   * Advances to the next frame in the animation sequence.
   */
  private render(): void {
    if (!this.state.isRunning || !this.state.options.show) {
      return
    }
    if (!this.state.options.spinner || this.state.options.spinner.length === 0) {
      return
    }
    const frame =
      this.state.options.spinner[this.state.frameIndex % this.state.options.spinner.length]
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
    process.stdout.write(`\r\x1b[K${styles}${backgroundColor}${color}${frame}${text}\x1b[0m`)
    this.state.frameIndex++
  }
}
