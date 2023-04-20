const { I } = inject();

module.exports = {

  checkLogin() {
    I.waitForElement('~Cadastrar novo pet', 30)
  }
}
