/**
 * Available spinner animation patterns for terminal loading indicators
 *
 * Defines the visual animation patterns for spinners including:
 * - 'dots': Basic dot animation (⠋⠙⠹⠸⠼⠴⠦⠧⠇⠏)
 * - 'bars': Bar-based animation patterns
 * - 'dots2' through 'dots12': Various dot pattern variations
 */
export type SpinnerAnimationStyle =
  | 'dots'
  | 'bars'
  | 'dots2'
  | 'dots3'
  | 'dots4'
  | 'dots5'
  | 'dots6'
  | 'dots7'
  | 'dots8'
  | 'dots9'
  | 'dots10'
  | 'dots11'
  | 'dots12'

/**
 * Available color options for terminal text and animation
 *
 * Includes standard colors, bright variants, extended colors, and custom color support.
 * Supports named colors, hex codes, RGB values, and undefined for default behavior.
 */
export type ColorOption =
  | 'black'
  | 'red'
  | 'green'
  | 'yellow'
  | 'blue'
  | 'magenta'
  | 'cyan'
  | 'white'
  | 'gray'
  | 'brightBlack'
  | 'brightRed'
  | 'brightGreen'
  | 'brightYellow'
  | 'brightBlue'
  | 'brightMagenta'
  | 'brightCyan'
  | 'brightWhite'
  | 'orange'
  | 'purple'
  | 'pink'
  | 'teal'
  | 'indigo'
  | 'lime'
  | 'brown'
  | 'gold'
  | string
  | undefined

/**
 * Configuration options for customizing spinner appearance and behavior
 *
 * All properties are optional and use sensible defaults when not specified.
 * Provides comprehensive control over spinner visual appearance and functionality.
 */
export interface SpinnerOptions {
  /** Text to display alongside the spinner animation */
  text?: string | undefined
  /** Spinner animation style from predefined patterns */
  style?: SpinnerAnimationStyle | undefined
  /** Color of the spinner using ANSI color codes, hex codes, RGB values, or predefined color names */
  color?: ColorOption | undefined
  /** Background color for the spinner text */
  backgroundColor?: string | undefined
  /** Controls spinner visibility on the terminal */
  show?: boolean | undefined
  /** Custom spinner character array for animation patterns */
  spinner?: string[] | undefined
  /** Text styling options for bold formatting */
  bold?: boolean | undefined
  /** Text styling options for italic formatting */
  italic?: boolean | undefined
  /** Text styling options for underline formatting */
  underline?: boolean | undefined
}

/**
 * Internal spinner state for managing animation lifecycle and current frame
 *
 * Tracks current animation status, configuration, and timing information
 * for proper spinner operation and state management.
 */
export interface SpinnerState {
  /** Current text being displayed with the spinner */
  text: string
  /** Indicates whether the spinner animation is currently active */
  isRunning: boolean
  /** Current position in the spinner animation sequence */
  frameIndex: number
  /** Timestamp when the spinner animation began */
  startTime: number
  /** Complete configuration options for the spinner instance */
  options: SpinnerOptionsInternal
}

/**
 * Internal spinner options with all properties required
 *
 * Used internally after merging with defaults for type safety.
 * All properties are guaranteed to have values after initialization.
 */
export interface SpinnerOptionsInternal {
  /** Text to display alongside the spinner animation */
  text: string
  /** Spinner animation style from predefined patterns */
  style: SpinnerAnimationStyle
  /** Color of the spinner using ANSI color codes */
  color: ColorOption
  /** Background color for the spinner text */
  backgroundColor: string
  /** Controls spinner visibility on the terminal */
  show: boolean
  /** Custom spinner character array for animation patterns */
  spinner: string[]
  /** Text styling options for bold formatting */
  bold: boolean
  /** Text styling options for italic formatting */
  italic: boolean
  /** Text styling options for underline formatting */
  underline: boolean
}
