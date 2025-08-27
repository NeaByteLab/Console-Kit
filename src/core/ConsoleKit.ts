import { Spinner } from '@core/Spinner'
import { Progress } from '@core/Progress'
import type { SpinnerOptions } from '@interfaces/Spinner'
import type { ProgressOptions } from '@interfaces/Progress'

/**
 * ConsoleKit - Main utility class for creating terminal UI elements
 *
 * Provides static methods for generating various terminal components including
 * animated spinners and progress bars with customizable configurations. This class serves as the
 * primary entry point for creating terminal UI elements.
 */
export class ConsoleKit {
  /**
   * Creates a new spinner instance for terminal loading animations
   *
   * @param text - Initial text to display alongside the spinner animation
   * @param options - Configuration options for spinner appearance and behavior
   * @returns A configured Spinner instance ready for use
   */
  static spinner(text?: string, options?: SpinnerOptions): Spinner {
    const spinnerOptions: SpinnerOptions = {
      text,
      ...options
    }
    return new Spinner(spinnerOptions)
  }

  /**
   * Creates a new progress bar instance for terminal progress tracking
   *
   * @param text - Initial text to display alongside the progress bar
   * @param options - Configuration options for progress bar appearance and behavior
   * @returns A configured Progress instance ready for use
   */
  static progress(text: string, options: ProgressOptions): Progress {
    const progressOptions: ProgressOptions = {
      text,
      ...options
    }
    return new Progress(progressOptions)
  }
}
