const { defineConfig } = require('cypress'); 

const cucumber = require('cypress-cucumber-preprocessor').default; 

 
 

module.exports = defineConfig({ 

e2e: { 

baseUrl: 'https://www.nsw.gov.au', 

specPattern: ['**/*.feature', '**/*.spec.js'], 

excludeSpecPattern: ['**/examples/*'], 

chromeWebSecurity: false, 

video: false, 

blockHosts: '*.googletagmanager.com', 

viewportWidth: 1920, 

viewportHeight: 1600, 

videoUploadOnPasses: false, 

defaultCommandTimeout: 8000, 

requestTimeout: 10000, 
experimentalSessionAndOrigin: true,

setupNodeEvents(on, config) { 

on('file:preprocessor', cucumber()) 

// on('before:browser:launch', (browser = {}, launchOptions) => { 

// if (browser.name === 'chrome') { 

// launchOptions.args.push('--disable-dev-shm-usage'); 

// if (browser.isHeadless) { 

// launchOptions.args.push('--disable-gpu'); 

// } 

// return launchOptions; 

// } 

// }) 

} 

} 

}) 


