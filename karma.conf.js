const { address } = require('ip');

const hostname = address();

const { SELENIUM_HOST, SELENIUM_PORT } = process.env;

module.exports = {
  karma({ junitDir, coverageDir, logLevel }) {
    return {
      basePath: '',
      hostname: hostname,
      frameworks: ['jasmine', '@angular-devkit/build-angular'],
      plugins: [
        require('karma-jasmine'),
        require('karma-chrome-launcher'),
        require('karma-webdriver-launcher'),
        require('karma-jasmine-html-reporter'),
        require('karma-coverage-istanbul-reporter'),
        require('@angular-devkit/build-angular/plugins/karma'),
        require('karma-junit-reporter'),
        require('karma-spec-reporter')
      ],
      client: {
        clearContext: false // leave Jasmine Spec Runner output visible in browser
      },
      junitReporter: {
        outputDir: junitDir
      },
      specReporter: {
        maxLogLines: 5,             // limit number of lines logged per test
        suppressErrorSummary: false, // do not print error summary
        suppressFailed: false,      // do not print information about failed tests
        suppressPassed: false,      // do not print information about passed tests
        suppressSkipped: true,      // do not print information about skipped tests
        showSpecTiming: true,      // print the time elapsed for each spec
        failFast: false              // test would finish with error when a first fail occurs.
      },
      coverageIstanbulReporter: {
        dir: coverageDir,
        reports: ['html', 'lcovonly', 'text-summary', 'json'],
        fixWebpackSourcePaths: true
      },
      reporters: ['progress', 'kjhtml'],
      port: 9876,
      colors: true,
      logLevel: logLevel,
      autoWatch: true,
      browsers: ['ChromeHeadless'],
      singleRun: false,
      restartOnFileChange: true,
      customLaunchers: {
        WebDriverChrome: {
          base: 'WebDriver',
          browserName: 'chrome',
          platform: 'ANY',
          config: {
            remoteHost: true,
            hostname: SELENIUM_HOST,
            port: SELENIUM_PORT
          }
        },
        ChromeHeadless: {
          base: 'Chrome',
          flags: [
            '--headless',
            '--disable-gpu',
            '--no-sandbox',
            '--remote-debugging-port=9222'
          ]
        }
      }
    }
  }
};
