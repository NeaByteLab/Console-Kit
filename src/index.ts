/**
 * Console-Kit - Terminal UI utilities for Node.js applications
 *
 * Provides animated spinners, progress bars, color utilities, and terminal styling capabilities.
 * Exports the main ConsoleKit class, Spinner component, Progress component, and color utility functions.
 */

/** Terminal loading animation component with customizable appearance and states */
export { Spinner } from '@core/Spinner'

/** Terminal progress bar component with visual progress tracking */
export { Progress } from '@core/Progress'

/** Main utility class for creating terminal UI elements */
export { ConsoleKit } from '@core/ConsoleKit'

/** Color utility functions for terminal text and background styling */
export { getColorCode, getBackgroundColorCode, getStyleCode } from '@utils/Colors'

/** Type definitions for spinner configuration and state management */
export type { SpinnerOptions, SpinnerState } from '@interfaces/Spinner'

/** Type definitions for progress bar configuration and state management */
export type { ProgressOptions, ProgressState } from '@interfaces/Progress'
