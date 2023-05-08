const { I } = inject();

module.exports = {
  async checkLogin() {
    await I.waitForElement('~Editar informações', 30)
    await I.waitForElement('~Excluir conta', 30)
    return true
  }
}
