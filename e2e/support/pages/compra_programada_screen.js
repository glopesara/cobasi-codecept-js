const { I } = inject();

module.exports = {

  async checkLogin() {
    await I.waitForElement({ android: '//android.widget.TextView[@text="Você não possui compras programadas ativas"]', ios: '//XCUIElementTypeWebView' }, 20)
    await I.waitForElement({ android: '//android.widget.Button[@text="Ver compras programadas canceladas"]' }, 20)
    return true
  }
}
