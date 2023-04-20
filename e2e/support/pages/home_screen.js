const { I } = inject();

module.exports = {
  selectTabBars(tabBar) {
    switch (tabBar) {
      case 'Mais':
        I.click('~Mais')
        break;
        default:
          throw new Error(`Tab bar "${tabBar}" é invalido`)
    }
  }
  // insert your locators and methods here
}
