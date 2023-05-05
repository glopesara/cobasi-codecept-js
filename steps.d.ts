/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file.js');
type homeScreen = typeof import('./e2e/support/pages/home_screen.js');
type menuMaisScreen = typeof import('./e2e/support/pages/menu_mais_screen.js');
type loginScreen = typeof import('./e2e/support/pages/login_screen.js');
type descontos_screen = typeof import('./e2e/support/pages/descontos_screen.js');
type servicos_screen = typeof import('./e2e/support/pages/servicos_screen.js');
type compra_programada_screen = typeof import('./e2e/support/pages/compra_programada_screen.js');
type amigo_cobasi_screen = typeof import('./e2e/support/pages/amigo_cobasi_screen.js');
type espaco_pet_screen = typeof import('./e2e/support/pages/espaco_pet_screen.js');
type inicio_screen = typeof import('./e2e/support/pages/inicio_screen.js');
type apis = typeof import('./e2e/support/helpers/apis.js');
type scroll = typeof import('./e2e/support/helpers/scroll.js');
type hooks = typeof import('./e2e/support/helpers/hooks.js');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, homeScreen: homeScreen, menuMaisScreen: menuMaisScreen, loginScreen: loginScreen, descontos_screen: descontos_screen, servicos_screen: servicos_screen, compra_programada_screen: compra_programada_screen, amigo_cobasi_screen: amigo_cobasi_screen, espaco_pet_screen: espaco_pet_screen, inicio_screen: inicio_screen, apis: apis, scroll: scroll, hooks: hooks }
  interface Methods extends Appium, Mochawesome {}
  interface I extends ReturnType<steps_file>, WithTranslation<Mochawesome> {}
  namespace Translation {
    interface Actions {}
  }
}
