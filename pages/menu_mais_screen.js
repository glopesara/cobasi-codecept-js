const { I } = inject();

module.exports = {
  selectMenu(menu) {

    I.waitForElement({ android: '//android.widget.TextView[@text="Meu desconto"]', ios: '~Descontos Meu desconto 󰅂' }, 10)

    switch (menu) {

      case 'Login':
        I.click({ android: '//android.widget.TextView[@text="Entre ou cadastre-se"]', ios: '~󰀉 Entre ou cadastre-se Para acessar seus dados 󰅂' })
        break;

      case "Descontos":
        I.click({ android: '//android.widget.TextView[@text="Meu desconto"]', ios: '~Descontos Meu desconto 󰅂' })
        I.waitForElement('~Próximo', 5)
        break

      case "Agendamento":
        I.click({ android: '//android.widget.TextView[@text="Agendamento"]', ios: '~󰸗 Agendamento Agende os serviços para seu pet 󰅂' })
        break

      default:
        break;
    }
  },

  checkLogin() {
    I.waitForElement({ android: '//android.widget.TextView[@text="Meus dados"]', ios: '~Minha conta' }, 10)
    I.seeElement({ android: '//android.widget.TextView[@text="Meus dados"]', ios: '~Minha conta' })
  }
}
