Feature('login');
const { container } = require('codeceptjs');

const { I,
    homeScreen,
    menuMaisScreen,
    loginScreen,
    descontos_screen,
    servicos_screen,
    compra_programada_screen,
    amigo_cobasi_screen,
    espaco_pet_screen } = inject()


Before(() => {
    I.waitForElement('~APP_INPUT_SEARCH', 10)

    I.runOnIOS(() => {
        I.waitForElement({ ios: '~Super Ofertas' }, 10)
    })
})

// menu mais

Scenario.only('Realizar login com sucesso | menu mais| Minha Conta', async () => {
    homeScreen.selectTabBars('Mais')
    menuMaisScreen.selectMenu('Login')
    loginScreen.doLogin('gabriel.lopes@cobasi.com.br', 'Cobasi@123')
    menuMaisScreen.checkLogin()
});

Scenario('Realizar login com sucesso | menu mais| Meu Desconto', async () => {
    homeScreen.selectTabBars('Mais')
    menuMaisScreen.selectMenu('Descontos')
    await descontos_screen.clickProximo()
    descontos_screen.clickLogin()
    loginScreen.doLogin('gabriel.lopes@cobasi.com.br', 'Cobasi@123')
    descontos_screen.checkLogin()
});

Scenario('Realizar login com sucesso | menu mais| Agendamento', async () => {
    homeScreen.selectTabBars('Mais')
    menuMaisScreen.selectMenu('Agendamento')
    loginScreen.doLogin('gabriel.lopes@cobasi.com.br', 'Cobasi@123')
    servicos_screen.checkLogin()
});

Scenario('Realizar login com sucesso | menu mais| Compra Programada', async () => {
    homeScreen.selectTabBars('Mais')
    menuMaisScreen.selectMenu('Compra Programada')
    loginScreen.doLogin('gabriel.lopes@cobasi.com.br', 'Cobasi@123')
    compra_programada_screen.checkLogin()
});

Scenario('Realizar login com sucesso | menu mais| Amigo Cobasi', async () => {
    homeScreen.selectTabBars('Mais')
    menuMaisScreen.selectMenu('Amigo Cobasi')
    loginScreen.doLogin('gabriel.lopes@cobasi.com.br', 'Cobasi@123')
    amigo_cobasi_screen.checkLogin()
})

Scenario('Realizar login com sucesso | menu mais| Espaço Pet', async () => {
    homeScreen.selectTabBars('Mais')
    menuMaisScreen.selectMenu('Espaço Pet')
    loginScreen.doLogin('gabriel.lopes@cobasi.com.br', 'Cobasi@123')
    espaco_pet_screen.checkLogin()
})

// tab bar