const { I } = inject();

module.exports = {
  selectTabBars(tabBar) {
    switch (tabBar) {
      case 'Mais':
        I.click('~Mais')
        break;
      default:
        break;
    }
  }
  // insert your locators and methods here
}
