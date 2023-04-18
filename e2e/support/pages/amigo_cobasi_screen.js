const { I } = inject();

module.exports = {

  checkLogin() {
    I.waitForElement({ android: '//android.widget.TextView[@text="Seus pontos"]', ios: '~Seus pontos' }, 20)
  }
}
