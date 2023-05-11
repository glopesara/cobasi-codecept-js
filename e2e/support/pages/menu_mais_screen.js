const { I, scroll } = inject();

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
        {
          const element = locate('(//android.view.ViewGroup[@content-desc="ServiceItem"])[4]')
          I.click({ android: element, ios: '(//XCUIElementTypeOther[@name="ServiceItem"])[4]' })
        }

        break

      case 'Amigo Cobasi':
        {
          const element = locate('(//android.view.ViewGroup[@content-desc="ServiceItem"])[5]')
          I.click({ android: element, ios: '(//XCUIElementTypeOther[@name="ServiceItem"])[5]' })
        }
        break

      case 'Espaço Pet':
        {
          const element = process.env.PLATFORM === 'android '
            ? locate('(//android.view.ViewGroup[@content-desc="ServiceItem"])[6]')
            : '(//XCUIElementTypeOther[@name="ServiceItem"])[6]'
          scroll.scrollToElement(element)
          I.click(element)
        }
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
