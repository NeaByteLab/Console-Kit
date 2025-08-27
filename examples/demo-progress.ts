#!/usr/bin/env node

/**
 * Console-Kit Progress Bar Demo
 * Showcases all progress bar features: styles, colors, and methods
 */

import { ConsoleKit } from '../src/index.js'

/**
 * Demo configuration settings for timing and delays
 */
const config = {
  // Delay between different demo sections in milliseconds
  delay: 1000,
  // Delay between progress updates in milliseconds
  progressDelay: 200,
  // Delay for text updates in milliseconds
  textDelay: 500
}

// Utility function for delays
const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

// Demo 1: Basic Progress Bar
/**
 * Demo 1: Basic Progress Bar
 * 
 * Demonstrates a simple progress bar with basic configuration
 * Shows file upload simulation with cyan color and bar style
 */
async function demoBasicProgress() {
  console.log('\n🎯 Demo 1: Basic Progress Bar')
  console.log('==============================')
  
  const progress = ConsoleKit.progress('Uploading files...', {
    total: 100,
    style: 'bar',
    color: 'cyan'
  })
  
  await progress.start()
  
  // Simulate progress updates
  for (let i = 0; i <= 100; i += 10) {
    progress.update(i)
    await sleep(config.progressDelay)
  }
  
  await progress.succeed('Upload complete!')
}

// Demo 2: Different Progress Styles
async function demoProgressStyles() {
  console.log('\n✨ Demo 2: Different Progress Styles')
  console.log('=====================================')
  
  const styles = [
    { name: 'Bar Style', style: 'bar', color: 'green' },
    { name: 'Blocks Style', style: 'blocks', color: 'blue' },
    { name: 'Dots Style', style: 'dots', color: 'magenta' }
  ]
  
  for (const styleConfig of styles) {
    console.log(`\nTesting ${styleConfig.name}...`)
    
    const progress = ConsoleKit.progress(`${styleConfig.name}...`, {
      total: 50,
      style: styleConfig.style,
      color: styleConfig.color,
      bold: true
    })
    
    await progress.start()
    
    // Simulate progress
    for (let i = 0; i <= 50; i += 5) {
      progress.update(i)
      await sleep(config.progressDelay)
    }
    
    await progress.succeed(`${styleConfig.name} complete!`)
    await sleep(config.textDelay)
  }
}

// Demo 3: Progress with Colors and Styling
async function demoProgressStyling() {
  console.log('\n🎨 Demo 3: Progress with Colors and Styling')
  console.log('=============================================')
  
  const progress = ConsoleKit.progress('Styling test...', {
    total: 100,
    style: 'bar',
    color: '255,100,150',        // Pink RGB
    backgroundColor: '#1a1a1a',   // Dark background
    bold: true,
    italic: true
  })
  
  await progress.start()
  
  // Update progress
  progress.update(25)
  await sleep(config.progressDelay)
  progress.update(50)
  await sleep(config.progressDelay)
  progress.update(75)
  await sleep(config.progressDelay)
  progress.update(100)
  await sleep(config.progressDelay)
  
  await progress.succeed('Styling test complete!')
}

// Demo 4: Progress Methods
async function demoProgressMethods() {
  console.log('\n🔧 Demo 4: Progress Methods')
  console.log('============================')
  
  const progress = ConsoleKit.progress('Testing methods...', {
    total: 200,
    style: 'blocks',
    color: 'yellow'
  })
  
  await progress.start()
  
  // Test increment method
  progress.increment(50)
  await sleep(config.progressDelay)
  progress.increment(50)
  await sleep(config.progressDelay)
  progress.increment(50)
  await sleep(config.progressDelay)
  progress.increment(50)
  await sleep(config.progressDelay)
  
  // Test complete method
  await progress.complete()
}

// Demo 5: Progress States
async function demoProgressStates() {
  console.log('\n🎯 Demo 5: Progress States')
  console.log('===========================')
  
  const progress = ConsoleKit.progress('Testing states...', {
    total: 100,
    style: 'dots',
    color: 'orange'
  })
  
  await progress.start()
  progress.update(30)
  await sleep(config.progressDelay)
  
  // Test different completion states
  await progress.warn('Partial completion')
  await sleep(config.textDelay)
  
  const progress2 = ConsoleKit.progress('Testing fail state...', {
    total: 100,
    style: 'bar',
    color: 'red'
  })
  
  await progress2.start()
  progress2.update(50)
  await sleep(config.progressDelay)
  await progress2.fail('Operation failed')
}

// Demo 6: Progress with Text Updates
async function demoProgressTextUpdates() {
  console.log('\n📝 Demo 6: Progress with Text Updates')
  console.log('======================================')
  
  const progress = ConsoleKit.progress('Starting process...', {
    total: 100,
    style: 'bar',
    color: 'cyan',
    bold: true
  })
  
  await progress.start()
  
  // Update text multiple times
  await sleep(config.textDelay)
  progress.updateText('Processing files...')
  progress.update(25)
  await sleep(config.textDelay)
  
  progress.updateText('Validating data...')
  progress.update(50)
  await sleep(config.textDelay)
  
  progress.updateText('Finalizing...')
  progress.update(75)
  await sleep(config.textDelay)
  
  progress.updateText('Almost done...')
  progress.update(100)
  await sleep(config.textDelay)
  
  await progress.succeed('Process complete!')
}

// Demo 7: Progress with Custom Values
async function demoProgressCustomValues() {
  console.log('\n🔢 Demo 7: Progress with Custom Values')
  console.log('=======================================')
  
  const progress = ConsoleKit.progress('Processing items...', {
    total: 1000,
    style: 'blocks',
    color: 'purple'
  })
  
  await progress.start()
  
  // Simulate processing items
  for (let i = 0; i <= 1000; i += 100) {
    progress.update(i)
    await sleep(config.progressDelay)
  }
  
  await progress.succeed('All items processed!')
}

// Demo 8: Progress Bar Showcase
async function demoProgressShowcase() {
  console.log('\n🌟 Demo 8: Progress Bar Showcase')
  console.log('=================================')
  
  const scenarios = [
    { name: 'File Upload', total: 100, style: 'bar', color: 'green' },
    { name: 'Data Processing', total: 200, style: 'blocks', color: 'blue' },
    { name: 'System Check', total: 50, style: 'dots', color: 'yellow' }
  ]
  
  for (const scenario of scenarios) {
    console.log(`\n${scenario.name}...`)
    
    const progress = ConsoleKit.progress(scenario.name, {
      total: scenario.total,
      style: scenario.style,
      color: scenario.color,
      bold: true
    })
    
    await progress.start()
    
    // Simulate progress
    for (let i = 0; i <= scenario.total; i += scenario.total / 10) {
      progress.update(i)
      await sleep(config.progressDelay)
    }
    
    await progress.succeed(`${scenario.name} complete!`)
    await sleep(config.textDelay)
  }
}

// Main demo runner
async function runAllDemos() {
  console.log('🎬 Console-Kit Progress Bar Comprehensive Demo')
  console.log('==============================================')
  console.log('Showcasing all progress bar features and capabilities!')
  
  try {
    await demoBasicProgress()
    await sleep(config.delay)
    
    await demoProgressStyles()
    await sleep(config.delay)
    
    await demoProgressStyling()
    await sleep(config.delay)
    
    await demoProgressMethods()
    await sleep(config.delay)
    
    await demoProgressStates()
    await sleep(config.delay)
    
    await demoProgressTextUpdates()
    await sleep(config.delay)
    
    await demoProgressCustomValues()
    await sleep(config.delay)
    
    await demoProgressShowcase()
  } catch (error) {
    console.error('Demo failed:', error)
  }
}

// Run the demo if this file is executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
  runAllDemos()
}

export { runAllDemos }
