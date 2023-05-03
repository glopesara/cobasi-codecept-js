const data = require('./support/fixtures/users.json')

Feature('login');

const { I,
    homeScreen,
    menuMaisScreen,
    loginScreen,
    descontos_screen,
    servicos_screen,
    compra_programada_screen,
    amigo_cobasi_screen,
    espaco_pet_screen,
    hooks } = inject()


Before(async () => {
    await hooks.before()
})

// menu mais

Scenario('Realizar login com sucesso | menu mais | Minha Conta', async () => {
    homeScreen.selectTabBars('Mais')
    menuMaisScreen.selectMenu('Login')
    loginScreen.doLogin(data.user)
    menuMaisScreen.checkLogin()
});

Scenario('Realizar login com sucesso | menu mais | Meu Desconto', async () => {
    homeScreen.selectTabBars('Mais')
    menuMaisScreen.selectMenu('Descontos')
    await descontos_screen.clickProximo()
    descontos_screen.clickLogin()
    loginScreen.doLogin(data.user)
    descontos_screen.checkLogin()
});

Scenario('Realizar login com sucesso | menu mais | Agendamento', async () => {
    homeScreen.selectTabBars('Mais')
    menuMaisScreen.selectMenu('Agendamento')
    loginScreen.doLogin(data.user)
    servicos_screen.checkLogin()
});

Scenario('Realizar login com sucesso | menu mais | Compra Programada', async () => {
    homeScreen.selectTabBars('Mais')
    menuMaisScreen.selectMenu('Compra Programada')
    loginScreen.doLogin(data.user)
    compra_programada_screen.checkLogin()
});

Scenario('Realizar login com sucesso | menu mais | Amigo Cobasi', async () => {
    homeScreen.selectTabBars('Mais')
    menuMaisScreen.selectMenu('Amigo Cobasi')
    loginScreen.doLogin(data.user)
    amigo_cobasi_screen.checkLogin()
})

Scenario('Realizar login com sucesso | menu mais | Espaço Pet', async () => {
    homeScreen.selectTabBars('Mais')
    menuMaisScreen.selectMenu('Espaço Pet')
    await loginScreen.doLogin(data.user)
    espaco_pet_screen.checkLogin()
})

// tab bar

Scenario('Realizar login com sucesso | tab bar | Descontos', async () => {
    homeScreen.selectTabBars('Descontos')
    await descontos_screen.clickProximo()
    descontos_screen.clickLogin()
    loginScreen.doLogin(data.user)
    descontos_screen.checkLogin()
})

Scenario('Realizar login com sucesso | tab bar | Serviços', async () => {
    homeScreen.selectTabBars('Serviços')
    servicos_screen.clickLogin()
    loginScreen.doLogin(data.user)
    servicos_screen.checkLogin()
})

