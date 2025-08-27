/**
 * Named color mappings for terminal text coloring
 *
 * Provides ANSI escape sequences for standard colors, bright variants,
 * and extended 8-bit colors used in terminal applications.
 */
const NAMED_COLORS = {
  black: '\x1b[30m',
  blue: '\x1b[34m',
  brown: '\x1b[38;5;130m',
  cyan: '\x1b[36m',
  gold: '\x1b[38;5;220m',
  gray: '\x1b[38;5;240m',
  green: '\x1b[32m',
  indigo: '\x1b[38;5;63m',
  lime: '\x1b[38;5;154m',
  magenta: '\x1b[35m',
  orange: '\x1b[38;5;208m',
  pink: '\x1b[38;5;213m',
  purple: '\x1b[38;5;99m',
  red: '\x1b[31m',
  teal: '\x1b[38;5;51m',
  white: '\x1b[38;5;255m',
  yellow: '\x1b[33m',
  brightBlack: '\x1b[38;5;232m',
  brightBlue: '\x1b[94m',
  brightCyan: '\x1b[96m',
  brightGreen: '\x1b[92m',
  brightMagenta: '\x1b[95m',
  brightRed: '\x1b[91m',
  brightWhite: '\x1b[97m',
  brightYellow: '\x1b[93m'
} as const

/**
 * Named background color mappings for terminal text
 *
 * Provides ANSI escape sequences for background colors including
 * standard colors, bright variants, and extended 8-bit colors.
 */
const NAMED_BACKGROUND_COLORS = {
  black: '\x1b[40m',
  blue: '\x1b[44m',
  brown: '\x1b[48;5;130m',
  cyan: '\x1b[46m',
  gold: '\x1b[48;5;220m',
  gray: '\x1b[48;5;240m',
  green: '\x1b[42m',
  indigo: '\x1b[48;5;63m',
  lime: '\x1b[48;5;154m',
  magenta: '\x1b[45m',
  orange: '\x1b[48;5;208m',
  pink: '\x1b[48;5;213m',
  purple: '\x1b[48;5;99m',
  red: '\x1b[41m',
  teal: '\x1b[48;5;51m',
  white: '\x1b[47m',
  yellow: '\x1b[43m',
  brightBlack: '\x1b[48;5;232m',
  brightBlue: '\x1b[104m',
  brightCyan: '\x1b[106m',
  brightGreen: '\x1b[102m',
  brightMagenta: '\x1b[105m',
  brightRed: '\x1b[101m',
  brightWhite: '\x1b[107m',
  brightYellow: '\x1b[103m'
} as const

/**
 * Generates ANSI color codes for terminal text coloring
 *
 * Supports multiple color formats including:
 * - Named colors (e.g., 'red', 'blue', 'cyan')
 * - Hex color codes (e.g., '#FF0000', '#00FF00')
 * - RGB values (e.g., '255,0,0', '0,255,0')
 *
 * @param color - Color specification in any supported format
 * @returns ANSI escape sequence for the specified color, or default cyan if invalid
 */
export const getColorCode = (color: string): string => {
  if (color.startsWith('#')) {
    return hexToAnsi(color)
  }
  if (color.includes(',')) {
    const rgbValues = parseRGB(color)
    if (!rgbValues) {
      return ''
    }
    return rgbToAnsi(rgbValues.r, rgbValues.g, rgbValues.b)
  }
  return getNamedColor(color) || getNamedColor('cyan')
}

/**
 * Generates ANSI background color codes for terminal text
 *
 * Supports the same color formats as getColorCode including named colors,
 * hex codes, and RGB values. Returns empty string for invalid colors.
 *
 * @param color - Color specification in any supported format
 * @returns ANSI escape sequence for background color, or empty string if invalid
 */
export const getBackgroundColorCode = (color: string): string => {
  if (color.startsWith('#')) {
    return hexToAnsiBackground(color)
  }
  if (color.includes(',')) {
    const rgbValues = parseRGB(color)
    if (!rgbValues) {
      return ''
    }
    return rgbToAnsiBackground(rgbValues.r, rgbValues.g, rgbValues.b)
  }
  return getNamedBackgroundColor(color) || ''
}

/**
 * Generates ANSI text style codes for terminal formatting
 *
 * Combines multiple style options into a single ANSI escape sequence.
 * Supported styles include bold, italic, and underline text formatting.
 *
 * @param styles - Object containing boolean flags for desired text styles
 * @returns Combined ANSI escape sequence for all requested styles
 */
export const getStyleCode = (styles: {
  bold?: boolean
  italic?: boolean
  underline?: boolean
}): string => {
  const styleCodes = []
  if (styles.bold) {
    styleCodes.push('\x1b[1m')
  }
  if (styles.italic) {
    styleCodes.push('\x1b[3m')
  }
  if (styles.underline) {
    styleCodes.push('\x1b[4m')
  }
  return styleCodes.join('')
}

/**
 * Retrieves ANSI color code for a named color
 *
 * @param color - Name of the color to look up
 * @returns ANSI escape sequence for the named color, or empty string if not found
 */
function getNamedColor(color: string): string {
  return NAMED_COLORS[color as keyof typeof NAMED_COLORS] || ''
}

/**
 * Retrieves ANSI background color code for a named color
 *
 * @param color - Name of the background color to look up
 * @returns ANSI escape sequence for the background color, or empty string if not found
 */
function getNamedBackgroundColor(color: string): string {
  return NAMED_BACKGROUND_COLORS[color as keyof typeof NAMED_BACKGROUND_COLORS] || ''
}

/**
 * Parses RGB color string into numeric components
 *
 * @param color - RGB color string in format "r,g,b" (e.g., "255,0,0")
 * @returns Object with r, g, b properties, or null if parsing fails
 */
function parseRGB(color: string): { r: number; g: number; b: number } | null {
  const [r, g, b] = color.split(',').map(Number)
  if (isNaN(r) || isNaN(g) || isNaN(b)) {
    return null
  }
  return { r, g, b }
}

/**
 * Clamps RGB values to valid range (0-255)
 *
 * @param value - RGB component value to clamp
 * @returns Clamped value between 0 and 255
 */
function clampRGB(value: number): number {
  return Math.max(0, Math.min(255, Math.round(value) || 0))
}

/**
 * Generates ANSI escape sequence for RGB colors
 *
 * @param r - Red component (0-255)
 * @param g - Green component (0-255)
 * @param b - Blue component (0-255)
 * @param isBackground - Whether to generate background color code
 * @returns ANSI escape sequence for the specified RGB color
 */
function generateRGBAnsi(r: number, g: number, b: number, isBackground: boolean): string {
  const clampedR = clampRGB(r)
  const clampedG = clampRGB(g)
  const clampedB = clampRGB(b)
  const prefix = isBackground ? '\x1b[48;2;' : '\x1b[38;2;'
  return `${prefix}${clampedR};${clampedG};${clampedB}m`
}

/**
 * Converts hex color code to ANSI escape sequence
 *
 * @param hex - Hex color code in format #RRGGBB
 * @returns ANSI escape sequence for the hex color, or empty string if invalid
 */
function hexToAnsi(hex: string): string {
  if (!/^#[0-9A-Fa-f]{6}$/.test(hex)) {
    return ''
  }
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)
  return generateRGBAnsi(r, g, b, false)
}

/**
 * Converts hex color code to ANSI background color escape sequence
 *
 * @param hex - Hex color code in format #RRGGBB
 * @returns ANSI background color escape sequence, or empty string if invalid
 */
function hexToAnsiBackground(hex: string): string {
  if (!/^#[0-9A-Fa-f]{6}$/.test(hex)) {
    return ''
  }
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)
  return generateRGBAnsi(r, g, b, true)
}

/**
 * Converts RGB values to ANSI color escape sequence
 *
 * @param r - Red component (0-255)
 * @param g - Green component (0-255)
 * @param b - Blue component (0-255)
 * @returns ANSI escape sequence for the specified RGB color
 */
function rgbToAnsi(r: number, g: number, b: number): string {
  return generateRGBAnsi(r, g, b, false)
}

/**
 * Converts RGB values to ANSI background color escape sequence
 *
 * @param r - Red component (0-255)
 * @param g - Green component (0-255)
 * @param b - Blue component (0-255)
 * @returns ANSI background color escape sequence for the specified RGB color
 */
function rgbToAnsiBackground(r: number, g: number, b: number): string {
  return generateRGBAnsi(r, g, b, true)
}
