const {
  setHeadlessWhen,
  setCommonPlugins
} = require('@codeceptjs/configure');
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();


const user = 'gabriel_7zZvEK'
const acess_key = 'hHNsiL3rh88tP13EApsW'


const capabilities = {
  'local': {
    platform: process.env.PLATFORM,
    app: process.env.APP ? process.env.APP : '',
    desiredCapabilities: {
      platformVersion: process.env.VERSION,
      udid: process.env.UDID,
      deviceName: process.env.DEVICE,

      appPackage: process.env.PLATFORM == 'android' ? process.env.APPPACKAGE : '',
      appActivity: process.env.PLATFORM == 'android' ? process.env.APPACTIVITY : '',
      unicodeKeyboard: process.env.PLATFORM == 'android' ? true : '',
      resetKeyboard: process.env.PLATFORM == 'android' ? true : '',

      newCommandTimeout: process.env.PLATFORM == 'iOS' ? "100000" : '',
      adbExecTimeout: process.env.PLATFORM == 'iOS' ? "100000" : '',
      locationServicesAuthorized: process.env.PLATFORM == 'iOS' ? true : '',
      locationServicesEnabled: process.env.PLATFORM == 'iOS' ? true : '',
      autoAcceptAlerts: process.env.PLATFORM == 'iOS' ? true : '',
      autoDismissAlerts: process.env.PLATFORM == 'iOS' ? false : '',
    }
  },
  'browserStack': {
    automationName: "Appium",
    app: process.env.PLATFORM == 'android' ? "bs://3ff8d9f8e8ceb1ae34f54289e716f69840a037bb" : 'bs://8f99ae09fcd5de7bc4e79797c3476e28783451c7',
    host: "hub-cloud.browserstack.com",
    port: 4444,
    platform: process.env.PLATFORM,
    user: user,
    key: acess_key,
    device: process.env.DEVICE,
    platformVersion: process.env.VERSION,
    desiredCapabilities: {
      buildName: "13.4.0",
      projectName: "Cobasi",
      locationServicesAuthorized: process.env.PLATFORM == 'iOS' ? true : '',
      locationServicesEnabled: process.env.PLATFORM == 'iOS' ? true : '',
      autoAcceptAlerts: process.env.PLATFORM == 'iOS' ? true : '',
      autoDismissAlerts: process.env.PLATFORM == 'iOS' ? false : '',
    }
  }
}




/** @type {CodeceptJS.MainConfig} */
exports.config = {
  name: 'cobasi-codeceptjs-js',
  tests: './e2e/*_test.js',
  output: './output',
  helpers: {
    Appium: process.env.AMBIENT == 'local' ? capabilities.local : capabilities.browserStack,
    Mochawesome: {
      uniqueScreenshotNames: true
    }
  },
  include: {
    I: './steps_file.js',
    homeScreen: './e2e/support/pages/home_screen.js',
    menuMaisScreen: "./e2e/support/pages/menu_mais_screen.js",
    loginScreen: "./e2e/support/pages/login_screen.js",
    descontos_screen: "./e2e/support/pages/descontos_screen.js",
    servicos_screen: "./e2e/support/pages/servicos_screen.js",
    compra_programada_screen: "./e2e/support/pages/compra_programada_screen.js",
    amigo_cobasi_screen: "./e2e/support/pages/amigo_cobasi_screen.js",
    espaco_pet_screen: "./e2e/support/pages/espaco_pet_screen.js"
  },
  plugins: {
    screenshotOnFail: {
      enabled: true
    }
  },
  mocha: {
    reporterOptions: {
      reportDir: "output"
    }
  },
}