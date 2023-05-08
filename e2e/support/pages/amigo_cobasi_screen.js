const { I } = inject();

module.exports = {

  async checkLogin() {
    await I.waitForElement({ android: '//android.widget.TextView[@text="Seus pontos"]', ios: '~Seus pontos' }, 30)
    return true
  }
}
