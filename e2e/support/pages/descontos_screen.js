const { I } = inject();

module.exports = {

  async clickProximo() {
    var element = await I.grabNumberOfVisibleElements('~Próximo');
    while (element > 0) {
      I.click('~Próximo')
      I.wait(1)
      element = await I.grabNumberOfVisibleElements('~Próximo')
    }
  },

  clickLogin() {
    I.click('~Login')
  },

  checkLogin() {
    I.waitForElement({android: '~Todas', ios: '~Selecione os descontos pela categoria desejada:'}, 10)
  }

}
