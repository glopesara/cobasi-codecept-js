const { I } = inject();

module.exports = {
  selectMenu(menu) {

    I.waitForElement({ android: '//android.widget.TextView[@text="Meu desconto"]', ios: '~Descontos Meu desconto 󰅂' }, 10)

    switch (menu) {

      case 'Login':
        I.click({ android: '//android.widget.TextView[@text="Entre ou cadastre-se"]', ios: '~󰀉 Entre ou cadastre-se Para acessar seus dados 󰅂' })
        break;

      case 'Descontos':
        I.click({ android: '//android.widget.TextView[@text="Meu desconto"]', ios: '~Descontos Meu desconto 󰅂' })
        break

      case 'Agendamento':
        I.click({ android: '//android.widget.TextView[@text="Agendamento"]', ios: '~󰸗 Agendamento Agende os serviços para seu pet 󰅂' })
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
    await I.waitForElement({ android: '//android.widget.TextView[@text="Meus dados"]', ios: '~Minha conta' }, 10)
    await I.seeElement({ android: '//android.widget.TextView[@text="Meus dados"]', ios: '~Minha conta' }, 20)
    return true
  }
}
