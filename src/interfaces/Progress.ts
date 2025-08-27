import type { ColorOption } from '@interfaces/Spinner'

/**
 * Available progress bar visual styles for terminal progress indicators
 *
 * Defines the visual appearance patterns for progress bars including:
 * - 'bar': Solid filled bar with empty blocks (████████░░)
 * - 'blocks': Square blocks pattern (▣▣▣▣▣▣▣▣▣▣)
 * - 'dots': Circular dots pattern (●●●●●●○○○○)
 */
export type ProgressBarStyle = 'bar' | 'blocks' | 'dots'

/**
 * Configuration options for customizing progress bar appearance and behavior
 *
 * All properties are optional except 'total' which is required.
 * Provides comprehensive control over progress bar visual appearance and functionality.
 */
export interface ProgressOptions {
  /** Text to display alongside the progress bar */
  text?: string | undefined
  /** Total value for progress calculation (required) */
  total: number
  /** Current progress value (defaults to 0) */
  current?: number | undefined
  /** Progress bar animation style from predefined patterns */
  style?: ProgressBarStyle | undefined
  /** Color of the progress bar using ANSI color codes, hex codes, RGB values, or predefined color names */
  color?: ColorOption | undefined
  /** Background color for the progress bar text */
  backgroundColor?: string | undefined
  /** Controls progress bar visibility on the terminal */
  show?: boolean | undefined
  /** Text styling options for bold formatting */
  bold?: boolean | undefined
  /** Text styling options for italic formatting */
  italic?: boolean | undefined
  /** Text styling options for underline formatting */
  underline?: boolean | undefined
}

/**
 * Internal progress state for managing progress lifecycle and current values
 *
 * Tracks current progress status, configuration, and timing information
 * for proper progress bar operation and state management.
 */
export interface ProgressState {
  /** Current text being displayed with the progress bar */
  text: string
  /** Total value for progress calculation */
  total: number
  /** Current progress value */
  current: number
  /** Indicates whether the progress bar is currently active */
  isRunning: boolean
  /** Timestamp when the progress bar began */
  startTime: number
  /** Complete configuration options for the progress bar instance */
  options: ProgressOptionsInternal
}

/**
 * Internal progress options with all properties required
 *
 * Used internally after merging with defaults for type safety.
 * All properties are guaranteed to have values after initialization.
 */
export interface ProgressOptionsInternal {
  /** Text to display alongside the progress bar */
  text: string
  /** Total value for progress calculation */
  total: number
  /** Current progress value */
  current: number
  /** Progress bar animation style from predefined patterns */
  style: ProgressBarStyle
  /** Color of the progress bar using ANSI color codes */
  color: ColorOption
  /** Background color for the progress bar text */
  backgroundColor: string
  /** Controls progress bar visibility on the terminal */
  show: boolean
  /** Text styling options for bold formatting */
  bold: boolean
  /** Text styling options for italic formatting */
  italic: boolean
  /** Text styling options for underline formatting */
  underline: boolean
}
