const { I } = inject();

module.exports = {

  clickLogin() {
    I.waitForElement('~Card', 5)
    I.click('~Entrar na conta')
  },

  async checkLogin() {
    await I.waitForElement({ android: '//android.widget.TextView[@text="Agende o serviço com os Anjos parceiros."]', ios: '//XCUIElementTypeWebView' }, 30)
    return true
  }

}
