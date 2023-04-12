Feature('login');

const { I, homeScreen, menuMaisScreen, loginScreen } = inject()

Scenario('Realizar login com sucesso | Minha Conta', async () => {
    I.waitForElement('~APP_INPUT_SEARCH', 10)
    homeScreen.selectTabBars('Mais')
    menuMaisScreen.selectMenu('Login')
    loginScreen.doLogin()
    menuMaisScreen.checkLogin()
});

Scenario.only('Realizar login com sucesso | Meu Desconto', async () => {
    I.waitForElement('~APP_INPUT_SEARCH', 10)

    homeScreen.selectTabBars('Mais')
    menuMaisScreen.selectMenu('Login')
    loginScreen.doLogin()
    menuMaisScreen.checkLogin()
});