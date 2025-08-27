# Console Kit

Enhanced terminal UI toolkit for Node.js with TypeScript support. Create beautiful, interactive command-line interfaces with spinners, custom colors, and advanced styling.

## ✨ Features

- 🎯 **Spinners** - Beautiful terminal loading animations with 13 predefined styles
- 🎨 **Advanced Colors** - 25 predefined colors + RGB + Hex + Background support
- 🎭 **Text Styling** - Bold, italic, underline with full ANSI support
- ⚡ **Performance** - Efficient rendering with minimal overhead
- 🌈 **Custom Colors** - Support for RGB values, hex codes, and background colors
- 🔒 **Type Safe** - Full TypeScript support with strict typing
- 🚀 **Modern** - ES modules and Node.js 22+ support

---

## 📦 Installation

```bash
npm install @neabyte/console-kit
```

## 🚀 Quick Start

```typescript
import { ConsoleKit } from '@neabyte/console-kit'

// Create a spinner
const spinner = ConsoleKit.spinner('Processing files...')
await spinner.start()

// Do some work...
await processFiles()

// Stop with success message
await spinner.succeed('Files processed successfully!')
```

## 🎯 Spinner Usage

### Basic Spinner

```typescript
const spinner = ConsoleKit.spinner('Loading...')
await spinner.start()
// ... do work
await spinner.succeed('Complete!')
```

### Advanced Customization

```typescript
const spinner = ConsoleKit.spinner('Building...', {
  color: '255,100,150', // Custom RGB color
  backgroundColor: '#1a1a1a', // Custom hex background
  bold: true, // Bold text
  italic: true, // Italic text
  underline: false, // No underline
  spinner: ['⠋', '⠙', '⠹', '⠸', '⠼'] // Custom animation
})
```

### Available Methods

- `start(text?)` - Start the spinner animation
- `stop()` - Stop the spinner and clear the line
- `succeed(text?)` - Stop with success message ✔
- `fail(text?)` - Stop with error message ✖
- `warn(text?)` - Stop with warning message ⚠
- `info(text?)` - Stop with info message ℹ
- `updateText(text)` - Update spinner text while running

### Spinner Styles

**Predefined Styles:**

- `dots` - Classic dot animation (default)
- `bars` - Bar animation
- `dots2` through `dots12` - Various dot patterns

**Custom Styles:**

```typescript
const customSpinner = ConsoleKit.spinner('Custom...', {
  spinner: ['🌍', '🌎', '🌏'] // Your own characters
})
```

## 🎨 Color System

### Predefined Colors (25 total)

**Standard Colors:**

- `black`, `red`, `green`, `yellow`, `blue`, `magenta`, `cyan`, `white`, `gray`

**Bright Variants:**

- `brightBlack`, `brightRed`, `brightGreen`, `brightYellow`, `brightBlue`, `brightMagenta`, `brightCyan`, `brightWhite`

**Extended Colors:**

- `orange`, `purple`, `pink`, `teal`, `indigo`, `lime`, `brown`, `gold`

### Custom Colors

**RGB Format:**

```typescript
color: '255,100,150' // Red: 255, Green: 100, Blue: 150
color: '0,255,0' // Pure green
color: '128,0,128' // Purple
```

**Hex Format:**

```typescript
color: '#FF0000' // Red
color: '#00FF00' // Green
color: '#0000FF' // Blue
color: '#FF6B9D' // Custom pink
```

**Background Colors:**

```typescript
backgroundColor: 'red' // Named background
backgroundColor: '255,255,0' // RGB background
backgroundColor: '#FFFF00' // Hex background
```

### Text Styling

**Individual Styles:**

```typescript
bold: true // Bold text
italic: true // Italic text
underline: true // Underlined text
```

**Combined Styles:**

```typescript
{
  bold: true,
  italic: true,
  underline: false
}
```

---

## 🔧 API Reference

### ConsoleKit.spinner(text?, options?)

Creates a new spinner instance with optional configuration.

**Parameters:**

- `text` (string, optional) - Initial text to display
- `options` (SpinnerOptions, optional) - Configuration object

**Returns:** Configured Spinner instance

### SpinnerOptions Interface

```typescript
interface SpinnerOptions {
  text?: string // Display text
  style?: styleList // Animation style
  color?: colorList // Foreground color
  backgroundColor?: string // Background color
  show?: boolean // Visibility control
  spinner?: string[] // Custom animation frames
  bold?: boolean // Bold text
  italic?: boolean // Italic text
  underline?: boolean // Underlined text
}
```

---

## 🛠️ Development

```bash
# Install dependencies
npm install

# Build the project
npm run build

# Run in development mode
npm run dev

# Lint and type check
npm run check-all

# Run all quality checks
npm run check-all
```

## 📁 Project Structure

```
src/
├── index.ts              # Main export file
├── core/                 # Core functionality
│   ├── ConsoleKit.ts     # Main class with static methods
│   └── Spinner.ts        # Spinner implementation
├── interfaces/           # TypeScript type definitions
│   └── Spinner.ts        # All spinner-related interfaces
└── utils/                # Utility functions
    └── Colors.ts         # Color and styling utilities
```

---

## 🎯 Use Cases

- **Build Tools** - Show compilation progress
- **CLI Applications** - User-friendly loading states
- **Deployment Scripts** - Visual feedback for long operations
- **Data Processing** - Progress indication for file operations
- **API Clients** - Request status visualization

## 🔒 Type Safety

- **Strict Mode** - Full TypeScript strict configuration enabled
- **No Any Types** - All types are explicitly defined
- **Interface Segregation** - Clean separation of concerns
- **Path Aliases** - `@core/*`, `@interfaces/*`, `@utils/*`

---

## 📄 License

MIT © [NeaByteLab](https://github.com/NeaByteLab)
