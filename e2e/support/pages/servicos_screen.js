const { I } = inject();

module.exports = {

  checkLogin() {
    I.waitForElement({ android: '//android.widget.TextView[@text="Agende o serviço com os Anjos parceiros."]', ios: '//XCUIElementTypeWebView' }, 15)
  }

}
