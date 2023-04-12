/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file.js');
type home_screen = typeof import('./pages/home_screen.js');
type menu_mais = typeof import('./pages/menu_mais_screen.js');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, home_screen: home_screen, menu_mais: menu_mais }
  interface Methods extends Appium {}
  interface I extends ReturnType<steps_file> {}
  namespace Translation {
    interface Actions {}
  }
}
