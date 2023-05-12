const data = require('./support/fixtures/users.json');

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
    inicio_screen,
    meus_dados_screen,
    hooks } = inject()

let testPassed = false

Before(async () => {
    await hooks.before()
})

// menu mais

Scenario('Realizar login com sucesso | menu mais | Minha Conta', async () => {
    homeScreen.selectTabBars('Mais')
    menuMaisScreen.selectMenu('Login')
    loginScreen.doLogin(data.user)
    testPassed = await menuMaisScreen.checkLogin()
});

Scenario('Realizar login com sucesso | menu mais | Meu Desconto', async () => {
    homeScreen.selectTabBars('Mais')
    menuMaisScreen.selectMenu('Descontos')
    await descontos_screen.clickProximo()
    descontos_screen.clickLogin()
    loginScreen.doLogin(data.user)
    testPassed = await descontos_screen.checkLogin()
});

Scenario('Realizar login com sucesso | menu mais | Agendamento', async () => {
    homeScreen.selectTabBars('Mais')
    menuMaisScreen.selectMenu('Agendamento')
    loginScreen.doLogin(data.user)
    testPassed = await servicos_screen.checkLogin()
});

Scenario('Realizar login com sucesso | menu mais | Compra Programada', async () => {
    homeScreen.selectTabBars('Mais')
    menuMaisScreen.selectMenu('Compra Programada')
    loginScreen.doLogin(data.user)
    testPassed = await compra_programada_screen.checkLogin()
});

Scenario('Realizar login com sucesso | menu mais | Amigo Cobasi', async () => {
    homeScreen.selectTabBars('Mais')
    menuMaisScreen.selectMenu('Amigo Cobasi')
    loginScreen.doLogin(data.user)
    testPassed = await amigo_cobasi_screen.checkLogin()
})

Scenario('Realizar login com sucesso | menu mais | Espaço Pet', async () => {
    homeScreen.selectTabBars('Mais')
    await menuMaisScreen.selectMenu('Espaço Pet')
    await loginScreen.doLogin(data.user)
    testPassed = await espaco_pet_screen.checkLogin()

})

// tab bar

Scenario('Realizar login com sucesso | tab bar | Descontos', async () => {
    homeScreen.selectTabBars('Descontos')
    await descontos_screen.clickProximo()
    descontos_screen.clickLogin()
    loginScreen.doLogin(data.user)
    testPassed = await descontos_screen.checkLogin()
})

Scenario('Realizar login com sucesso | tab bar | Serviços', async () => {
    homeScreen.selectTabBars('Serviços')
    servicos_screen.clickLogin()
    loginScreen.doLogin(data.user)
    testPassed = await servicos_screen.checkLogin()
})

// Início

Scenario('Realizar login com sucesso | Início | Espaço pet', async () => {
    homeScreen.selectTabBars('Início')
    inicio_screen.clickAcessarEspacoPet()
    loginScreen.doLogin(data.user)
    testPassed = await espaco_pet_screen.checkLogin()
})

Scenario('Realizar login com sucesso | Início | Agendar', async () => {
    homeScreen.selectTabBars('Início')
    inicio_screen.clickAgendar()
    servicos_screen.clickLogin()
    loginScreen.doLogin(data.user)
    testPassed = await servicos_screen.checkLogin()
})

Scenario('Realizar login com sucesso | Início | Amigo Cobasi', async () => {
    homeScreen.selectTabBars('Início')
    inicio_screen.clickAmigoCobasi()
    loginScreen.doLogin(data.user)
    testPassed = await amigo_cobasi_screen.checkLogin()
})

Scenario('Realizar login com sucesso | Início | Meu Desconto', async () => {
    homeScreen.selectTabBars('Início')
    inicio_screen.clickMeuDesconto()
    await descontos_screen.clickProximo()
    descontos_screen.clickLogin()
    loginScreen.doLogin(data.user)
    testPassed = await descontos_screen.checkLogin()
})

Scenario('Realizar login com sucesso | Início | Compra programada', async () => {
    homeScreen.selectTabBars('Início')
    await inicio_screen.clickCompraProgramada()
    loginScreen.doLogin(data.user)
    testPassed = await compra_programada_screen.checkLogin()
})

Scenario('Realizar login com sucesso | Início | Minha compra', async () => {
    homeScreen.selectTabBars('Início')
    await inicio_screen.clickMinhaConta()
    loginScreen.doLogin(data.user)
    testPassed = await meus_dados_screen.checkLogin()
})

After(async () => {
    if (process.env.AMBIENT === 'remote-android' || process.env.AMBIENT === 'remote-ios') {
        hooks.testPassedOrFail(testPassed)
    }

    testPassed = false
});

