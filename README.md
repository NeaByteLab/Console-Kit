# Console Kit

Enhanced terminal UI toolkit for Node.js with TypeScript support. Create beautiful, interactive command-line interfaces with spinners, progress bars, custom colors, and advanced styling.

## ✨ Features

- 🎯 **Spinners** - Beautiful terminal loading animations with 13 predefined styles
- 📊 **Progress Bars** - Visual progress tracking with multiple styles and real-time updates
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

// Create a progress bar
const progress = ConsoleKit.progress('Uploading files...', { total: 100 })
await progress.start()

// Update progress
progress.update(50)
progress.increment(25)

// Complete with success
await progress.succeed('Upload complete!')
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

## 📊 Progress Bar Usage

### Basic Progress Bar

```typescript
const progress = ConsoleKit.progress('Processing...', { total: 100 })
await progress.start()

// Update progress
progress.update(50)
progress.increment(25)

// Complete
await progress.succeed('Processing complete!')
```

### Advanced Customization

```typescript
const progress = ConsoleKit.progress('Building project...', {
  total: 1000,
  current: 0,
  style: 'blocks', // Visual style
  color: 'green', // Progress bar color
  backgroundColor: '#1a1a1a', // Background color
  bold: true, // Bold text
  italic: false, // No italic
  underline: true // Underlined text
})
```

### Progress Bar Styles

**Available Styles:**

- `bar` - Solid filled bar with empty blocks (████████░░)
- `blocks` - Square blocks pattern (▣▣▣▣▣▣▣▣▣▣)
- `dots` - Circular dots pattern (●●●●●●○○○○)

### Available Methods

- `start(text?)` - Start the progress bar
- `update(current)` - Set specific progress value
- `increment(amount)` - Increase progress by amount
- `complete()` - Set to 100% and display completion
- `succeed(text?)` - Complete with success message ✔
- `fail(text?)` - Complete with error message ✖
- `warn(text?)` - Complete with warning message ⚠
- `info(text?)` - Complete with info message ℹ
- `stop()` - Stop the progress bar
- `updateText(text)` - Update progress text while running

### Real-World Examples

**File Upload Progress:**

```typescript
const progress = ConsoleKit.progress('Uploading files...', {
  total: files.length,
  style: 'blocks',
  color: 'blue'
})

await progress.start()

for (let i = 0; i < files.length; i++) {
  await uploadFile(files[i])
  progress.update(i + 1)
}

await progress.succeed('All files uploaded!')
```

**Data Processing with Updates:**

```typescript
const progress = ConsoleKit.progress('Processing data...', {
  total: 1000,
  style: 'dots',
  color: 'green'
})

await progress.start()

// Process in batches
for (let i = 0; i < 10; i++) {
  await processBatch(i * 100, (i + 1) * 100)
  progress.update((i + 1) * 100)

  // Update text for each batch
  progress.updateText(`Processing batch ${i + 1}/10...`)
}

await progress.succeed('Data processing complete!')
```

**Multiple Concurrent Progress Bars:**

```typescript
const tasks = [
  { name: 'Task 1', total: 50, style: 'bar', color: 'green' },
  { name: 'Task 2', total: 30, style: 'blocks', color: 'blue' },
  { name: 'Task 3', total: 80, style: 'dots', color: 'yellow' }
]

const progressBars = tasks.map(task => ConsoleKit.progress(task.name, task))

// Start all progress bars
await Promise.all(progressBars.map(p => p.start()))

// Update them concurrently
const interval = setInterval(() => {
  progressBars.forEach((p, i) => {
    const current = Math.min(p.state.current + 5, p.state.total)
    p.update(current)

    if (current >= p.state.total) {
      p.succeed(`${tasks[i].name} complete!`)
    }
  })

  if (progressBars.every(p => p.state.current >= p.state.total)) {
    clearInterval(interval)
  }
}, 200)
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

### ConsoleKit.progress(text, options)

Creates a new progress bar instance with required configuration.

**Parameters:**

- `text` (string) - Initial text to display
- `options` (ProgressOptions) - Configuration object (total is required)

**Returns:** Configured Progress instance

### SpinnerOptions Interface

```typescript
interface SpinnerOptions {
  text?: string // Display text
  style?: SpinnerAnimationStyle // Animation style
  color?: ColorOption // Foreground color
  backgroundColor?: string // Background color
  show?: boolean // Visibility control
  spinner?: string[] // Custom animation frames
  bold?: boolean // Bold text
  italic?: boolean // Italic text
  underline?: boolean // Underlined text
}
```

### ProgressOptions Interface

```typescript
interface ProgressOptions {
  text?: string // Display text
  total: number // Total value (required)
  current?: number // Current progress value
  style?: ProgressBarStyle // Visual style
  color?: ColorOption // Foreground color
  backgroundColor?: string // Background color
  show?: boolean // Visibility control
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
│   ├── Spinner.ts        # Spinner implementation
│   └── Progress.ts       # Progress bar implementation
├── interfaces/           # TypeScript type definitions
│   ├── Spinner.ts        # All spinner-related interfaces
│   └── Progress.ts       # All progress bar interfaces
└── utils/                # Utility functions
    └── Colors.ts         # Color and styling utilities
```

---

## 🎯 Use Cases

### Spinners

- **Build Tools** - Show compilation progress
- **CLI Applications** - User-friendly loading states
- **Deployment Scripts** - Visual feedback for long operations
- **API Clients** - Request status visualization

### Progress Bars

- **File Operations** - Upload/download progress
- **Data Processing** - Batch processing progress
- **Build Systems** - Compilation progress
- **Database Operations** - Query execution progress
- **Network Requests** - API call progress
- **Installation Scripts** - Package installation progress

## 🔒 Type Safety

- **Strict Mode** - Full TypeScript strict configuration enabled
- **No Any Types** - All types are explicitly defined
- **Interface Segregation** - Clean separation of concerns
- **Path Aliases** - `@core/*`, `@interfaces/*`, `@utils/*`

---

## 📄 License

MIT © [NeaByteLab](https://github.com/NeaByteLab)
