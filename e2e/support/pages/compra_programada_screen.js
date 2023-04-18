const { I } = inject();

module.exports = {

  checkLogin() {
    I.waitForElement({ android: '//android.widget.TextView[@text="Você não possui compras programadas ativas"]', ios: '//XCUIElementTypeWebView' }, 20)
    I.waitForElement({ android: '//android.widget.Button[@text="Ver compras programadas canceladas"]' }, 20)
  }
}
