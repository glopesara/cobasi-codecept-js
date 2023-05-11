const { I } = inject();

module.exports = {
  selectMenu(menu) {

    I.waitForElement('~Service.Title', 10)

    switch (menu) {

      case 'Login':
        I.click('~default_cards_Entre ou cadastre-se')
        break;

      case 'Descontos':
        {
          const element = locate('(//android.view.ViewGroup[@content-desc="ServiceItem"])[1]')
          I.click({ android: element, ios: '(//XCUIElementTypeOther[@name="ServiceItem"])[1]' })
        }
        break

      case 'Agendamento':
        {
          const element = locate('(//android.view.ViewGroup[@content-desc="ServiceItem"])[3]')
          I.click({ android: element, ios: '(//XCUIElementTypeOther[@name="ServiceItem"])[3]' })
        }
        break

      case 'Compra Programada':
        I.click({ android: '//android.widget.TextView[@text="Compra Programada"]', ios: '~Compra Programada Minhas compras programadas 󰅂' })
        break

      case 'Amigo Cobasi':
        I.click({ android: '//android.widget.TextView[@text="Amigo Cobasi"]', ios: '~Amigo Cobasi Ganhe pontos nas suas compras 󰅂' })
        break

      case 'Espaço Pet':
        I.click({ android: '//android.widget.TextView[@text="Espaço Pet"]', ios: '󰏩 Espaço Pet Meus pets 󰅂' })
        break
      default:
        throw new Error(`Menu "${menu}" é invalido`)
    }
  },

  async checkLogin() {
    await I.waitForElement({ android: '//android.widget.TextView[@text="Meus dados"]', ios: '~Minha conta' }, 30)
    await I.seeElement({ android: '//android.widget.TextView[@text="Meus dados"]', ios: '~Minha conta' }, 30)
    return true
  }
}
