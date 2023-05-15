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
  selectMundosCobasi(option){
    switch (option) {
      case 'Amigo Cobasi':
          {
            const element = '~Amigo\nCobasi'
            I.click(element)
          }
        break;
    
      default:
        break;
    }
  }
  // insert your locators and methods here
}
