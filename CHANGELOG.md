# Changelog

All notable changes to Console-Kit will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [1.2.0] - 2025-08-28

### Added

- **6 Predefined Spinner Patterns**: Complete implementation of working spinner styles
  - `dots` - Classic dot animation (⠋⠙⠹⠸⠼⠴⠦⠧⠇⠏)
  - `corners` - Elegant corner rotation (│┤┘└┐┌┴┬)
  - `arrows` - Directional arrows (←↖↑↗→↘↓↙)
  - `triangles` - Geometric triangles (◢◣◤◥)
  - `circles` - Smooth circle rotation (◐◑◒◓)
  - `stars` - Twinkling stars (★☆✯✰)
- **Spinner Pattern System**: New `SPINNER_PATTERNS` constant with pattern mapping
- **Style Resolution**: `getSpinnerPattern()` method for dynamic pattern selection
- **Enhanced Demo**: New "All Spinner Patterns Showcase" demonstration
- **Comprehensive JSDoc**: Added detailed documentation to all demo functions

### Changed

- **Spinner Styles**: Reduced from 13 overpromised styles to 6 working patterns
- **Documentation Accuracy**: Updated README and CHANGELOG to reflect actual features
- **Default Spinner**: Now uses `SPINNER_PATTERNS.dots` for consistency
- **Type Safety**: Improved spinner pattern handling with proper fallbacks

### Fixed

- **Overpromised Features**: Removed non-functional spinner styles (dots2-dots12, bars)
- **Documentation Mismatch**: Aligned README claims with actual implementation
- **Spinner Consistency**: All predefined styles now work as documented

### Technical Improvements

- **Code Organization**: Centralized spinner patterns in dedicated constant
- **Pattern Resolution**: Smart fallback to dots pattern if style not found
- **Build Process**: Maintained existing build pipeline with path alias resolution
- **Type Definitions**: Updated `SpinnerAnimationStyle` to reflect actual patterns

### Examples

- **Pattern Showcase**: Demo 14 demonstrates all 6 spinner patterns
- **Visual Representation**: Each pattern shows its character sequence
- **Color Variations**: Different colors for each pattern type
- **Real-time Testing**: All patterns tested and verified working

---

## [1.1.1] - 2025-08-28

### Fixed

- **Package Dependencies**: Removed leftover local dependency reference from testing
- **Package.json Cleanup**: Cleaned up test dependency that could cause installation issues

### Technical Details

- Removed `"@neabyte/console-kit": "file:neabyte-console-kit-1.1.0.tgz"` from dependencies
- Fixed package.json to prevent local file dependency issues
- Ensures clean npm package installation for users

---

## [1.1.0] - 2025-08-28

### Added

- **Progress Bar Component**: Terminal progress tracking with visual indicators
- **Three Progress Styles**: bar (████████░░), blocks (▣▣▣▣▣▣▣▣▣▣), dots (●●●●●●○○○○)
- **Progress Methods**: start(), update(), increment(), complete(), succeed(), fail(), warn(), info(), stop()
- **Text Updates**: updateText() method for changing progress text while running
- **Progress Options**: total (required), current, style, color, background, text styling
- **Input Validation**: Checks for valid numbers, styles, and prevents division by zero
- **Error Handling**: Graceful handling of invalid inputs with clear error messages
- **Concurrent Support**: Multiple progress bars can run simultaneously

### Features

- **Progress Tracking**: Shows current progress as percentage with visual bar
- **Visual Feedback**: Real-time updates with 80ms refresh rate
- **Completion States**: Success (✔), error (✖), warning (⚠), info (ℹ) messages
- **Color Customization**: Same color system as spinners (named, RGB, hex)
- **Text Styling**: Bold, italic, underline support
- **Background Colors**: Custom background color support
- **State Management**: Tracks progress, text, and running status

### Technical Details

- **New Files**: src/core/Progress.ts, src/interfaces/Progress.ts
- **Updated Files**: src/index.ts, src/core/ConsoleKit.ts
- **Type Safety**: ProgressOptions, ProgressState, ProgressOptionsInternal interfaces
- **Validation**: validateOptions() method for input sanitization
- **Memory Safety**: Proper cleanup of intervals and timers
- **Error Prevention**: Handles edge cases like zero totals and invalid inputs

### Examples

- **Basic Progress**: Simple progress tracking from 0 to 100
- **File Upload**: Simulated file upload with progress updates
- **Data Processing**: Batch processing with text updates
- **Multiple Bars**: Three concurrent progress bars with different styles
- **Custom Styling**: Progress bars with colors, backgrounds, and text formatting

---

## [1.0.0] - 2025-08-27

### Added

- **Core Spinner Class**: Terminal loading animation implementation
- **ConsoleKit Main Class**: Static factory methods for creating UI elements
- **6 Predefined Spinner Styles**: dots, corners, arrows, triangles, circles, stars patterns
- **Custom Animation Support**: User-defined spinner character arrays
- **25 Predefined Colors**: Standard, bright, and extended color palette
- **RGB Color Support**: Custom RGB values (e.g., "255,100,150")
- **Hex Color Support**: Hex color codes (e.g., "#FF0000")
- **Background Color Support**: Background color customization
- **Text Styling**: Bold, italic, and underline formatting
- **Completion States**: Success (✔), error (✖), warning (⚠), info (ℹ)
- **Real-time Updates**: Dynamic text updates during animation
- **TypeScript Support**: Type safety with strict mode
- **ES Module Support**: ES6+ module system
- **Node.js 22+ Support**: Latest Node.js compatibility

### Features

- **Spinner Lifecycle Management**: start(), stop(), succeed(), fail(), warn(), info()
- **Color Utility Functions**: getColorCode(), getBackgroundColorCode(), getStyleCode()
- **Configuration**: SpinnerOptions interface with sensible defaults
- **Performance**: Efficient rendering with minimal overhead
- **Terminal Compatibility**: Standard ANSI escape sequences
- **Error Handling**: Graceful fallbacks for invalid inputs
- **Documentation**: JSDoc coverage for all public APIs

### Technical Details

- **Build System**: TypeScript compilation with path aliases
- **Code Quality**: ESLint, Prettier, and linting rules
- **Minification**: Terser for production builds
- **Path Aliases**: @core/_, @interfaces/_, @utils/\* imports
- **Strict TypeScript**: No any types, strict mode enabled
- **Modern JavaScript**: ES6+ features and best practices

### Documentation

- **README**: Installation, usage, examples, and API reference
- **JSDoc Coverage**: Documentation for all public functions
- **Type Definitions**: TypeScript interface definitions
- **Usage Examples**: Real-world implementation examples
- **Development Guide**: Setup and contribution instructions

### Examples

- **Basic Usage**: Simple spinner creation and control
- **Advanced Customization**: Colors, backgrounds, and styling
- **Dynamic Updates**: Real-time text changes during animation
- **Color Showcase**: RGB, hex, and named color demonstrations
- **Style Combinations**: Bold, italic, and underline examples

---

## Version History

- **1.1.1** - Fixed package dependencies and cleaned up test artifacts
- **1.1.0** - Added progress bar component with multiple styles and validation
- **1.0.0** - Initial production release with spinner functionality

---

## Release Notes

### 1.1.1 - Package Cleanup Release

This release fixes package dependency issues and cleans up test artifacts.

**Key Fixes:**

- Removed leftover local dependency reference from testing
- Cleaned up package.json to prevent installation issues
- Ensures npm package works correctly for all users

**Breaking Changes:**

- None - cleanup only

**Migration Guide:**

- Not applicable - cleanup release

### 1.1.0 - Progress Bar Release

This release adds progress bars to Console-Kit, expanding the terminal UI toolkit with visual progress tracking capabilities.

**Key Additions:**

- Progress bar component with three visual styles
- Real-time progress updates and percentage display
- Input validation and error handling
- Concurrent progress bar support
- Same color and styling system as spinners

**Breaking Changes:**

- None - All existing spinner functionality remains unchanged

**Migration Guide:**

- Not applicable - new features only

### 1.0.0 - Production Release

This is the first production release of Console-Kit. The library provides terminal UI toolkit with animated spinners.

**Key Highlights:**

- Terminal UI toolkit with animated spinners
- Color system supporting multiple formats
- TypeScript support with strict typing
- Documentation and examples
- ES6+ architecture with Node.js 22+ support

**Breaking Changes:**

- None - This is the initial release

**Migration Guide:**

- Not applicable for initial release

---

## Contributing

To add entries to this changelog, please follow the [Keep a Changelog](https://keepachangelog.com/en/1.0.0/) format and add your changes under the appropriate section.

### Changelog Entry Format

```markdown
### Added

- New feature description

### Changed

- Changed feature description

### Fixed

- Bug fix description
```

---

## Links

- [GitHub Repository](https://github.com/NeaByteLab/Console-Kit)
- [NPM Package](https://www.npmjs.com/package/@neabyte/console-kit)
- [Documentation](https://github.com/NeaByteLab/Console-Kit#readme)
- [Issues](https://github.com/NeaByteLab/Console-Kit/issues)
- [Discussions](https://github.com/NeaByteLab/Console-Kit/discussions)
