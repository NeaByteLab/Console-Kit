/**
 * Console-Kit - Terminal UI utilities for Node.js applications
 *
 * Provides animated spinners, color utilities, and terminal styling capabilities.
 * Exports the main ConsoleKit class, Spinner component, and color utility functions.
 */

export { Spinner } from '@core/Spinner'
export { ConsoleKit } from '@core/ConsoleKit'
export { getColorCode, getBackgroundColorCode, getStyleCode } from '@utils/Colors'
export type { SpinnerOptions, SpinnerState } from '@interfaces/Spinner'
