const {
  setHeadlessWhen,
  setCommonPlugins
} = require('@codeceptjs/configure');

const capabilities = require('./e2e/support/helpers/capabilities')

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();


/** @type {CodeceptJS.MainConfig} */
exports.config = {
  name: 'cobasi-codeceptjs-js',
  tests: './e2e/*_test.js',
  output: './output',
  helpers: {
    Appium: capabilities.loaderCapabilities(),
    Mochawesome: {
      uniqueScreenshotNames: true
    }
  },
  include: {
    I: './steps_file.js',
    comprarScreen: './e2e/support/pages/comprar_screen.js',
    menuMaisScreen: "./e2e/support/pages/menu_mais_screen.js",
    loginScreen: "./e2e/support/pages/login_screen.js",
    descontosScreen: "./e2e/support/pages/descontos_screen.js",
    servicosScreen: "./e2e/support/pages/servicos_screen.js",
    compraProgramadaScreen: "./e2e/support/pages/compra_programada_screen.js",
    amigoCobasiScreen: "./e2e/support/pages/amigo_cobasi_screen.js",
    espacoPetScreen: "./e2e/support/pages/espaco_pet_screen.js",
    inicioScreen: "./e2e/support/pages/inicio_screen.js",
    meusDadosScreen: "./e2e/support/pages/meus_dados_screen.js",
    apis: "./e2e/support/helpers/apis.js",
    scroll: "./e2e/support/helpers/scroll.js",
    hooks: "./e2e/support/helpers/hooks.js",
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