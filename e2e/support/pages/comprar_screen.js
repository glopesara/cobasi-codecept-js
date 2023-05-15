const { I } = inject();

module.exports = {
  selectTabBars(tabBar) {
    switch (tabBar) {
      case 'Mais':
        I.click('~Mais')
        break;

      case 'Descontos':
        I.click('~Descontos')
        I.waitForElement('~Próximo', 5)
        break

      case 'Serviços':
        I.click('~Serviços')
        break

      case 'Início':
        I.click('~Início')
        break
      default:
        throw new Error(`Tab bar "${tabBar}" é invalido`)
    }
  },
  selectMundosCobasi(option) {

    const waitAndClickElement = (element) => {
      I.waitForElement(element, 5)
      I.click(element)
    }

    switch (option) {
      case 'Amigo Cobasi':
        {
          const element = '~Amigo\nCobasi'
          waitAndClickElement(element)
        }
        break;

      case 'Serviços Pet':
        {
          const element = '~Serviços\nPet'
          waitAndClickElement(element)
        }
        break;
      case 'Compra Programada':
        {
          const element = '~Compra\nProgramada'
          waitAndClickElement(element)
        }
        break;
      case 'Espaço Pet':
        {
          const element = '~Espaço\nPet'
          waitAndClickElement(element)
        }
        break;

      default:
        throw new Error(`O menu "${option}" é invalido`)
    }
  }
  // insert your locators and methods here
}
