const { I } = inject();

module.exports = {

  async checkLogin() {
    await I.waitForElement('~Cadastrar novo pet', 30)
    return true
  }
}
