Feature('login');
const { container } = require('codeceptjs');

const { I,
    homeScreen,
    menuMaisScreen,
    loginScreen,
    descontos_screen,
    servicos_screen,
    compra_programada_screen,
    amigo_cobasi_screen } = inject()

Scenario('Realizar login com sucesso | menu mais| Minha Conta', async () => {
    I.waitForElement('~APP_INPUT_SEARCH', 10)
    I.waitForElement({ ios: '~Super Ofertas' }, 10)
    homeScreen.selectTabBars('Mais')
    menuMaisScreen.selectMenu('Login')
    loginScreen.doLogin('gabriel.lopes@cobasi.com.br', 'Cobasi@123')
    menuMaisScreen.checkLogin()
});

Scenario('Realizar login com sucesso | menu mais| Meu Desconto', async () => {
    I.waitForElement('~APP_INPUT_SEARCH', 10)
    I.waitForElement({ ios: '~Super Ofertas' }, 10)
    homeScreen.selectTabBars('Mais')
    menuMaisScreen.selectMenu('Descontos')
    await descontos_screen.clickProximo()
    descontos_screen.clickLogin()
    loginScreen.doLogin('gabriel.lopes@cobasi.com.br', 'Cobasi@123')
    descontos_screen.checkLogin()
});

Scenario('Realizar login com sucesso | menu mais| Agendamento', async () => {
    I.waitForElement('~APP_INPUT_SEARCH', 10)
    I.waitForElement({ ios: '~Super Ofertas' }, 10)
    homeScreen.selectTabBars('Mais')
    menuMaisScreen.selectMenu('Agendamento')
    loginScreen.doLogin('gabriel.lopes@cobasi.com.br', 'Cobasi@123')
    servicos_screen.checkLogin()
});

Scenario('Realizar login com sucesso | menu mais| Compra Programada', async () => {
    I.waitForElement('~APP_INPUT_SEARCH', 10)
    I.waitForElement({ ios: '~Super Ofertas' }, 10)
    homeScreen.selectTabBars('Mais')
    menuMaisScreen.selectMenu('Compra Programada')
    loginScreen.doLogin('gabriel.lopes@cobasi.com.br', 'Cobasi@123')
    compra_programada_screen.checkLogin()
});

Scenario.only('Realizar login com sucesso | menu mais| Amigo Cobasi', async () => {
    I.waitForElement('~APP_INPUT_SEARCH', 10)
    I.waitForElement({ ios: '~Super Ofertas' }, 10)
    homeScreen.selectTabBars('Mais')
    menuMaisScreen.selectMenu('Amigo Cobasi')
    loginScreen.doLogin('gabriel.lopes@cobasi.com.br', 'Cobasi@123')
    amigo_cobasi_screen.checkLogin()
})