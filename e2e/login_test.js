Feature('login');
const { container } = require('codeceptjs');

const { I, homeScreen, menuMaisScreen, loginScreen, descontos_screen } = inject()

Scenario('Realizar login com sucesso | menu mais| Minha Conta', async () => {
    I.waitForElement('~APP_INPUT_SEARCH', 10)
    homeScreen.selectTabBars('Mais')
    menuMaisScreen.selectMenu('Login')
    loginScreen.doLogin('gabriel.lopes@cobasi.com.br', 'Cobasi@123')
    menuMaisScreen.checkLogin()
});

Scenario.only('Realizar login com sucesso | menu mais| Meu Desconto', async () => {
    I.waitForElement('~APP_INPUT_SEARCH', 10)
    homeScreen.selectTabBars('Mais')
    menuMaisScreen.selectMenu('Descontos')
    I.waitForElement('~Próximo', 5)
    await descontos_screen.clickProximo()
    descontos_screen.clickLogin()
    loginScreen.doLogin('gabriel.lopes@cobasi.com.br', 'Cobasi@123')
    descontos_screen.checkLogin()
});