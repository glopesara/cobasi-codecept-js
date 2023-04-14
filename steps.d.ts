/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file.js');
type homeScreen = typeof import('./pages/home_screen.js');
type menuMaisScreen = typeof import('./pages/menu_mais_screen.js');
type loginScreen = typeof import('./pages/login_screen.js');
type descontos_screen = typeof import('./pages/descontos_screen.js');
type servicos_screen = typeof import('./pages/servicos_screen.js');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, homeScreen: homeScreen, menuMaisScreen: menuMaisScreen, loginScreen: loginScreen, descontos_screen: descontos_screen, servicos_screen: servicos_screen }
  interface Methods extends Appium {}
  interface I extends ReturnType<steps_file> {}
  namespace Translation {
    interface Actions {}
  }
}
