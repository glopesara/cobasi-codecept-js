const { I } = inject();

module.exports = {

  async clickProximo() {
    I.waitForElement('~Próximo', 5)
    var element = await I.grabNumberOfVisibleElements('~Próximo');
    while (element > 0) {
      I.click('~Próximo')
      I.wait(1)
      element = await I.grabNumberOfVisibleElements('~Próximo')
    }
  },

  clickLogin() {
    I.waitForElement('~Login', 5)
    I.click('~Login')
  },

  async checkLogin() {
    await I.waitForElement({ android: '~Todas', ios: '~Selecione os descontos pela categoria desejada:' }, 10)
    return true
  }

}
