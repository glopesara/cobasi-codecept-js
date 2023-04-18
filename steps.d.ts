/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file.js');
type homeScreen = typeof import('./e2e/support/pages/home_screen.js');
type menuMaisScreen = typeof import('./e2e/support/pages/menu_mais_screen.js');
type loginScreen = typeof import('./e2e/support/pages/login_screen.js');
type descontos_screen = typeof import('./e2e/support/pages/descontos_screen.js');
type servicos_screen = typeof import('./e2e/support/pages/servicos_screen.js');
type compra_programada_screen = typeof import('./e2e/support/pages/compra_programada_screen.js');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, homeScreen: homeScreen, menuMaisScreen: menuMaisScreen, loginScreen: loginScreen, descontos_screen: descontos_screen, servicos_screen: servicos_screen, compra_programada_screen: compra_programada_screen }
  interface Methods extends Appium {}
  interface I extends ReturnType<steps_file> {}
  namespace Translation {
    interface Actions {}
  }
}
