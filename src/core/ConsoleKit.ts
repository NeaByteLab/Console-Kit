import { Spinner } from '@core/Spinner'
import type { SpinnerOptions } from '@interfaces/Spinner'

/**
 * ConsoleKit - Main utility class for creating terminal UI elements
 *
 * Provides static methods for generating various terminal components including
 * animated spinners with customizable configurations. This class serves as the
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
}
