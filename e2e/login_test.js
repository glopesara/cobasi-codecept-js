Feature('login');

const { I, homeScreen, menuMaisScreen, loginScreen } = inject()

Scenario('Realizar login com sucesso | Minha Conta', async () => {
    I.waitForElement('~APP_INPUT_SEARCH', 10)
    homeScreen.selectTabBars('Mais')
    menuMaisScreen.selectMenu('Login')
    loginScreen.doLogin()
    menuMaisScreen.checkLogin()
});



