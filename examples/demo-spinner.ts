#!/usr/bin/env node

/**
 * ConsoleKit Comprehensive Production Demo
 * Tests all features: spinners, colors, styling, and colored symbols
 */

import { ConsoleKit } from '../src/index.ts'

/**
 * Demo configuration settings for timing and delays
 */
const config = {
  // Delay between different demo sections in milliseconds
  delay: 1500,
  // Delay for longer demos in milliseconds
  longDelay: 3000,
  // Delay for text updates in milliseconds
  textDelay: 800
}

/**
 * Utility function to create a delay using Promise-based setTimeout
 * 
 * @param ms - Duration to wait in milliseconds
 * @returns Promise that resolves after the specified delay
 */
const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

// Demo 1: Basic Spinner
/**
 * Demo 1: Basic Spinner
 * 
 * Demonstrates a simple spinner with default configuration
 * Shows basic loading animation with default text and colors
 */
async function demoBasicSpinner() {
  console.log('\n🎯 Demo 1: Basic Spinner')
  console.log('========================')
  
  const spinner = ConsoleKit.spinner('Loading basic features...')
  await spinner.start()
  await sleep(config.delay)
  await spinner.succeed('Basic spinner complete!')
}

/**
 * Demo 2: Custom Colors
 * 
 * Demonstrates spinner with custom RGB and hex color configurations
 * Shows how to apply specific colors to spinner text and backgrounds
 */
async function demoCustomColors() {
  console.log('\n🎨 Demo 2: Custom Colors')
  console.log('=========================')
  
  const spinner = ConsoleKit.spinner('Testing custom colors...', {
    color: '255,100,150',        // Pink RGB
    backgroundColor: '#1a1a1a'    // Dark background
  })
  await spinner.start()
  await sleep(config.delay)
  await spinner.succeed('Custom colors working!')
}

/**
 * Demo 3: Text Styling
 * 
 * Demonstrates various text styling options including bold, italic, and underline
 * Shows how to combine multiple text effects for enhanced visual presentation
 */
async function demoTextStyling() {
  console.log('\n🎭 Demo 3: Text Styling')
  console.log('========================')
  
  const spinner = ConsoleKit.spinner('Applying text styles...', {
    color: 'gold',
    bold: true,
    italic: true,
    underline: true
  })
  await spinner.start()
  await sleep(config.delay)
  await spinner.succeed('Text styling applied!')
}

/**
 * Demo 4: Dynamic Updates
 * 
 * Demonstrates real-time text updates during spinner operation
 * Shows how to change spinner text while maintaining the animation
 */
async function demoDynamicUpdates() {
  console.log('\n🔄 Demo 4: Dynamic Updates')
  console.log('===========================')
  
  const spinner = ConsoleKit.spinner('Starting process...', {
    color: 'cyan',
    backgroundColor: 'black'
  })
  await spinner.start()
  
  // Update text multiple times
  await sleep(config.textDelay)
  spinner.updateText('Processing files...')
  await sleep(config.textDelay)
  spinner.updateText('Validating data...')
  await sleep(config.textDelay)
  spinner.updateText('Finalizing...')
  await sleep(config.textDelay)
  
  await spinner.succeed('Dynamic updates complete!')
}

/**
 * Demo 5: Different Styles
 * 
 * Demonstrates all available predefined spinner animation patterns
 * Shows how each style creates different visual effects
 */
async function demoDifferentStyles() {
  console.log('\n✨ Demo 5: Different Styles')
  console.log('============================')
  
  const styles = [
    { name: 'Dots', style: 'dots', color: 'green' },
    { name: 'Corners', style: 'corners', color: 'blue' },
    { name: 'Arrows', style: 'arrows', color: 'magenta' },
    { name: 'Triangles', style: 'triangles', color: 'cyan' },
    { name: 'Circles', style: 'circles', color: 'yellow' },
    { name: 'Stars', style: 'stars', color: 'orange' }
  ]
  
  for (const styleConfig of styles) {
    const spinner = ConsoleKit.spinner(`${styleConfig.name} style...`, {
      style: styleConfig.style,
      color: styleConfig.color,
      bold: true
    })
    await spinner.start()
    await sleep(config.delay)
    await spinner.succeed(`${styleConfig.name} style complete!`)
  }
}

/**
 * Demo 6: Error Handling
 * 
 * Demonstrates spinner failure state with error messaging
 * Shows how to handle and display operation failures
 */
async function demoErrorHandling() {
  console.log('\n❌ Demo 6: Error Handling')
  console.log('===========================')
  
  const spinner = ConsoleKit.spinner('Attempting risky operation...', {
    color: 'red',
    backgroundColor: 'brightBlack'
  })
  await spinner.start()
  await sleep(config.delay)
  await spinner.fail('Operation failed as expected!')
}

/**
 * Demo 7: Warning and Info
 * 
 * Demonstrates warning and informational spinner states
 * Shows different completion types for various operation outcomes
 */
async function demoWarningAndInfo() {
  console.log('\n⚠️ Demo 7: Warning and Info')
  console.log('============================')
  
  const spinner = ConsoleKit.spinner('Checking system status...', {
    color: 'yellow'
  })
  await spinner.start()
  await sleep(config.delay)
  await spinner.warn('System needs attention!')
  
  await sleep(config.textDelay)
  
  const infoSpinner = ConsoleKit.spinner('Gathering information...', {
    color: 'blue'
  })
  await infoSpinner.start()
  await sleep(config.delay)
  await infoSpinner.info('Information collected successfully!')
}

/**
 * Demo 8: RGB Color Spectrum
 * 
 * Demonstrates RGB color format usage with various color values
 * Shows how to specify colors using RGB coordinate system
 */
async function demoRGBSpectrum() {
  console.log('\n🌈 Demo 8: RGB Color Spectrum')
  console.log('==============================')
  
  const colors = [
    { name: 'Red', rgb: '255,0,0' },
    { name: 'Green', rgb: '0,255,0' },
    { name: 'Blue', rgb: '0,0,255' },
    { name: 'Purple', rgb: '128,0,128' },
    { name: 'Orange', rgb: '255,165,0' }
  ]
  
  for (const colorConfig of colors) {
    const spinner = ConsoleKit.spinner(`${colorConfig.name} RGB...`, {
      color: colorConfig.rgb,
      bold: true
    })
    await spinner.start()
    await sleep(config.textDelay)
    await spinner.succeed(`${colorConfig.name} RGB working!`)
  }
}

/**
 * Demo 9: Hex Colors
 * 
 * Demonstrates hexadecimal color format usage
 * Shows how to specify colors using hex color codes
 */
async function demoHexColors() {
  console.log('\n🔷 Demo 9: Hex Colors')
  console.log('=======================')
  
  const hexColors = [
    { name: 'Cyan', hex: '#00FFFF' },
    { name: 'Magenta', hex: '#FF00FF' },
    { name: 'Lime', hex: '#00FF00' }
  ]
  
  for (const colorConfig of hexColors) {
    const spinner = ConsoleKit.spinner(`${colorConfig.name} hex...`, {
      color: colorConfig.hex,
      backgroundColor: 'black'
    })
    await spinner.start()
    await sleep(config.textDelay)
    await spinner.succeed(`${colorConfig.name} hex working!`)
  }
}

/**
 * Demo 10: Background Colors
 * 
 * Demonstrates background color customization options
 * Shows how to set different background colors for spinner text
 */
async function demoBackgroundColors() {
  console.log('\n🎨 Demo 10: Background Colors')
  console.log('===============================')
  
  const bgColors = [
    { name: 'Red BG', color: 'white', bg: 'red' },
    { name: 'Green BG', color: 'black', bg: 'green' },
    { name: 'Blue BG', color: 'white', bg: 'blue' }
  ]
  
  for (const bgConfig of bgColors) {
    const spinner = ConsoleKit.spinner(`${bgConfig.name}...`, {
      color: bgConfig.color,
      backgroundColor: bgConfig.bg,
      bold: true
    })
    await spinner.start()
    await sleep(config.textDelay)
    await spinner.succeed(`${bgConfig.name} working!`)
  }
}

/**
 * Demo 11: Combined Styling
 * 
 * Demonstrates combining multiple styling options together
 * Shows how to use colors, text effects, and custom spinner patterns
 */
async function demoCombinedStyling() {
  console.log('\n🎭 Demo 11: Combined Styling')
  console.log('=============================')
  
  const spinner = ConsoleKit.spinner('Testing combined styles...', {
    color: '255,20,147',         // Deep pink RGB
    backgroundColor: '#000080',   // Navy blue hex
    bold: true,
    italic: true,
    underline: true,
    spinner: ['⚡', '💫', '⚡', '💫', '⚡']
  })
  await spinner.start()
  await sleep(config.longDelay)
  await spinner.succeed('Combined styling working!')
}

/**
 * Demo 12: Colored Symbols Showcase
 * 
 * Demonstrates how status symbols are colored while text remains readable
 * Shows the visual distinction between colored symbols and normal text
 */
async function demoColoredSymbols() {
  console.log('\n🎯 Demo 12: Colored Symbols Showcase')
  console.log('=====================================')
  console.log('Notice how symbols are colored but text is normal:')
  
  const spinner = ConsoleKit.spinner('Preparing symbols demo...', {
    color: 'cyan'
  })
  await spinner.start()
  await sleep(config.delay)
  
  // Show all status types with colored symbols
  await spinner.succeed('Success: Green checkmark with normal text')
  await sleep(config.textDelay)
  
  await spinner.fail('Error: Red X with normal text')
  await sleep(config.textDelay)
  
  await spinner.warn('Warning: Yellow triangle with normal text')
  await sleep(config.textDelay)
  
  await spinner.info('Info: Blue circle with normal text')
  
  console.log('\n✨ Colored Symbols Benefits:')
  console.log('- Symbols are immediately recognizable')
  console.log('- Text remains readable in any terminal theme')
  console.log('- Terminal stays clean for next commands')
}

/**
 * Demo 13: Grand Finale
 * 
 * Final demonstration combining multiple advanced features
 * Shows the full range of ConsoleKit capabilities
 */
async function demoGrandFinale() {
  console.log('\n🚀 Demo 13: Grand Finale')
  console.log('==========================')
  
  const spinner = ConsoleKit.spinner('ConsoleKit is amazing!', {
    color: '255,215,0',           // Gold RGB
    backgroundColor: '#000080',    // Navy blue hex
    bold: true,
    italic: true,
    spinner: ['⭐', '🌟', '⭐', '🌟', '⭐']
  })
  await spinner.start()
  await sleep(config.longDelay)
  await spinner.succeed('ConsoleKit demo complete! 🎉')
}

/**
 * Demo 14: All Spinner Patterns Showcase
 * 
 * Comprehensive demonstration of all available spinner patterns
 * Shows each pattern with its visual representation and description
 */
async function demoAllSpinnerPatterns() {
  console.log('\n🎭 Demo 14: All Spinner Patterns Showcase')
  console.log('==========================================')
  console.log('Testing all 6 predefined spinner patterns:')
  
  const patterns = [
    { name: 'Dots', style: 'dots', desc: '⠋⠙⠹⠸⠼⠴⠦⠧⠇⠏', color: 'green' },
    { name: 'Corners', style: 'corners', desc: '│┤┘└┐┌┴┬', color: 'blue' },
    { name: 'Arrows', style: 'arrows', desc: '←↖↑↗→↘↓↙', color: 'magenta' },
    { name: 'Triangles', style: 'triangles', desc: '◢◣◤◥', color: 'cyan' },
    { name: 'Circles', style: 'circles', desc: '◐◑◒◓', color: 'yellow' },
    { name: 'Stars', style: 'stars', desc: '★☆✯✰', color: 'orange' }
  ]
  
  for (const pattern of patterns) {
    console.log(`\n${pattern.name}: ${pattern.desc}`)
    
    const spinner = ConsoleKit.spinner(`${pattern.name} pattern...`, {
      style: pattern.style,
      color: pattern.color,
      bold: true
    })
    
    await spinner.start()
    await sleep(config.delay)
    await spinner.succeed(`${pattern.name} pattern working!`)
  }
}

/**
 * Main demo runner function
 * 
 * Executes all spinner demonstrations in sequence
 * Provides comprehensive testing of ConsoleKit spinner features
 */
async function runAllDemos() {
  console.log('🎬 ConsoleKit Comprehensive Feature Demo')
  console.log('========================================')
  console.log('Testing all ConsoleKit features in sequence')
  console.log('Perfect for showcasing the full capabilities!')
  
  try {
    await demoBasicSpinner()
    await sleep(1000)
    
    await demoCustomColors()
    await sleep(1000)
    
    await demoTextStyling()
    await sleep(1000)
    
    await demoDynamicUpdates()
    await sleep(1000)
    
    await demoDifferentStyles()
    await sleep(1000)
    
    await demoErrorHandling()
    await sleep(1000)
    
    await demoWarningAndInfo()
    await sleep(1000)
    
    await demoRGBSpectrum()
    await sleep(1000)
    
    await demoHexColors()
    await sleep(1000)
    
    await demoBackgroundColors()
    await sleep(1000)
    
    await demoCombinedStyling()
    await sleep(1000)
    
    await demoColoredSymbols()
    await sleep(1000)
    
    await demoAllSpinnerPatterns()
    await sleep(1000)
    
    await demoGrandFinale()
    
  } catch (error) {
    console.error('Demo failed:', error)
  }
}

// Run the demo if this file is executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
  runAllDemos()
}

/**
 * Exports the main demo runner function for programmatic execution
 * 
 * Allows other modules to import and run the spinner demos
 * @example
 * import { runAllDemos } from './demo-spinner.ts'
 * await runAllDemos()
 */
export { runAllDemos, demoAllSpinnerPatterns }
