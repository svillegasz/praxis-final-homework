import { Config } from 'protractor';

const firefoxConfig = {
    browserName: 'firefox',
    name: 'firefox-tests',
    shardTestFiles: true,
    maxInstances: 1
};
  
const chromeConfig = {
    browserName: 'chrome',
    name: 'chrome-tests',
    shardTestFiles: true,
    maxInstances: 1
};

const multiCapabilities = [chromeConfig, firefoxConfig];

export const config: Config = {
  framework: 'mocha',
  specs: ['../test/ui/**/*.js'],
  seleniumAddress: 'http://0.0.0.0:4444',
  multiCapabilities,
  SELENIUM_PROMISE_MANAGER: false,
  mochaOpts: {
      reporter: 'mochawesome-screenshots'
  }
};
