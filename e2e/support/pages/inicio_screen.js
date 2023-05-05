const scroll = require('../helpers/scroll.js')
const { I } = inject();

module.exports = {

  clickAcessarEspacoPet() {
    I.waitForElement('~Acessar Espaço Pet', 5)
    I.click('~Acessar Espaço Pet')
  },

  clickAgendar() {
    I.waitForElement({ android: '//android.widget.TextView[@text="Agendar"]', ios: '(//XCUIElementTypeOther[@name="CTACardContainer"])[2]' }, 5)
    I.click({ android: '//android.widget.TextView[@text="Agendar"]', ios: '(//XCUIElementTypeOther[@name="CTACardContainer"])[2]' })
  },

  clickAmigoCobasi() {
    const elementAndroid = locate('//android.widget.TextView[@text="Cadastrar"]').at(1)
    I.waitForElement({ android: elementAndroid, ios: '(//XCUIElementTypeOther[@name="CompactCardButton"])[1]' }, 5)
    I.click({ android: elementAndroid, ios: '(//XCUIElementTypeOther[@name="CompactCardButton"])[1]' })
  },

  clickMeuDesconto() {
    const elementAndroid = locate('//android.widget.TextView[@text="Cadastrar"]').at(2)
    I.waitForElement({ android: elementAndroid, ios: '(//XCUIElementTypeOther[@name="CompactCardButton"])[2]' }, 5)
    I.click({ android: elementAndroid, ios: '(//XCUIElementTypeOther[@name="CompactCardButton"])[2]' })
  },

  async clickCompraProgramada() {
    const elementToScroll = process.env.PLATFORM === 'android' ?
      '//android.widget.TextView[@text="Compra Programada"]'
      : '(//XCUIElementTypeOther[@name="LongCardContainer"])[3]'

    I.waitForElement({ android: '~Acessar Espaço Pet', ios: '(//XCUIElementTypeOther[@name="CompactCardButton"])[1]' }, 5)
    await scroll.scrollToElement(elementToScroll)
    I.click(elementToScroll)
  }

}
