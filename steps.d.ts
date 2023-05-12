/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file.js');
type comprarScreen = typeof import('./e2e/support/pages/home_screen.js');
type menuMaisScreen = typeof import('./e2e/support/pages/menu_mais_screen.js');
type loginScreen = typeof import('./e2e/support/pages/login_screen.js');
type descontosScreen = typeof import('./e2e/support/pages/descontos_screen.js');
type servicosScreen = typeof import('./e2e/support/pages/servicos_screen.js');
type compraProgramadaScreen = typeof import('./e2e/support/pages/compra_programada_screen.js');
type amigoCobasiScreen = typeof import('./e2e/support/pages/amigo_cobasi_screen.js');
type espacoPetScreen = typeof import('./e2e/support/pages/espaco_pet_screen.js');
type inicioScreen = typeof import('./e2e/support/pages/inicio_screen.js');
type apis = typeof import('./e2e/support/helpers/apis.js');
type scroll = typeof import('./e2e/support/helpers/scroll.js');
type hooks = typeof import('./e2e/support/helpers/hooks.js');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, comprarScreen: comprarScreen, menuMaisScreen: menuMaisScreen, loginScreen: loginScreen, descontosScreen: descontosScreen, servicosScreen: servicosScreen, compraProgramadaScreen: compraProgramadaScreen, amigoCobasiScreen: amigoCobasiScreen, espacoPetScreen: espacoPetScreen, inicioScreen: inicioScreen, apis: apis, scroll: scroll, hooks: hooks }
  interface Methods extends Appium, Mochawesome {}
  interface I extends ReturnType<steps_file>, WithTranslation<Mochawesome> {}
  namespace Translation {
    interface Actions {}
  }
}
