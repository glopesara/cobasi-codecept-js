const { I } = inject();

module.exports = {
  selectTabBars(tabBar) {
    switch (tabBar) {
      case 'Mais':
        I.click('~Mais')
        break;

      case 'Descontos':
        I.click('~Descontos')
        break

      case 'Serviços':
        I.click('~Serviços')
        break

      default:
        throw new Error(`Tab bar "${tabBar}" é invalido`)
    }
  }
  // insert your locators and methods here
}
