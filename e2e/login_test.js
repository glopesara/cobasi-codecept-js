const data = require('./support/fixtures/users.json');

Feature('login');

const { I,
    comprarScreen,
    menuMaisScreen,
    loginScreen,
    descontosScreen,
    servicosScreen,
    compraProgramadaScreen,
    amigoCobasiScreen,
    espacoPetScreen,
    inicioScreen,
    meusDadosScreen,
    hooks } = inject()

let testPassed = false

Before(async () => {
    await hooks.before()
})

// menu mais

Scenario('Realizar login com sucesso | menu mais | Minha Conta', async () => {
    comprarScreen.selectTabBars('Mais')
    menuMaisScreen.selectMenu('Login')
    loginScreen.doLogin(data.user)
    testPassed = await menuMaisScreen.checkLogin()
});

Scenario('Realizar login com sucesso | menu mais | Meu Desconto', async () => {
    comprarScreen.selectTabBars('Mais')
    menuMaisScreen.selectMenu('Descontos')
    await descontosScreen.clickProximo()
    descontosScreen.clickLogin()
    loginScreen.doLogin(data.user)
    testPassed = await descontosScreen.checkLogin()
});

Scenario('Realizar login com sucesso | menu mais | Agendamento', async () => {
    comprarScreen.selectTabBars('Mais')
    menuMaisScreen.selectMenu('Agendamento')
    loginScreen.doLogin(data.user)
    testPassed = await servicosScreen.checkLogin()
});

Scenario('Realizar login com sucesso | menu mais | Compra Programada', async () => {
    comprarScreen.selectTabBars('Mais')
    menuMaisScreen.selectMenu('Compra Programada')
    loginScreen.doLogin(data.user)
    testPassed = await compraProgramadaScreen.checkLogin()
});

Scenario('Realizar login com sucesso | menu mais | Amigo Cobasi', async () => {
    comprarScreen.selectTabBars('Mais')
    menuMaisScreen.selectMenu('Amigo Cobasi')
    loginScreen.doLogin(data.user)
    testPassed = await amigoCobasiScreen.checkLogin()
})

Scenario('Realizar login com sucesso | menu mais | Espaço Pet', async () => {
    comprarScreen.selectTabBars('Mais')
    await menuMaisScreen.selectMenu('Espaço Pet')
    await loginScreen.doLogin(data.user)
    testPassed = await espacoPetScreen.checkLogin()

})

// tab bar

Scenario('Realizar login com sucesso | tab bar | Descontos', async () => {
    comprarScreen.selectTabBars('Descontos')
    await descontosScreen.clickProximo()
    descontosScreen.clickLogin()
    loginScreen.doLogin(data.user)
    testPassed = await descontosScreen.checkLogin()
})

Scenario('Realizar login com sucesso | tab bar | Serviços', async () => {
    comprarScreen.selectTabBars('Serviços')
    servicosScreen.clickLogin()
    loginScreen.doLogin(data.user)
    testPassed = await servicosScreen.checkLogin()
})

// Início

Scenario('Realizar login com sucesso | Início | Espaço pet', async () => {
    comprarScreen.selectTabBars('Início')
    inicioScreen.clickAcessarEspacoPet()
    loginScreen.doLogin(data.user)
    testPassed = await espacoPetScreen.checkLogin()
})

Scenario('Realizar login com sucesso | Início | Agendar', async () => {
    comprarScreen.selectTabBars('Início')
    inicioScreen.clickAgendar()
    servicosScreen.clickLogin()
    loginScreen.doLogin(data.user)
    testPassed = await servicosScreen.checkLogin()
})

Scenario('Realizar login com sucesso | Início | Amigo Cobasi', async () => {
    comprarScreen.selectTabBars('Início')
    inicioScreen.clickAmigoCobasi()
    loginScreen.doLogin(data.user)
    testPassed = await amigoCobasiScreen.checkLogin()
})

Scenario('Realizar login com sucesso | Início | Meu Desconto', async () => {
    comprarScreen.selectTabBars('Início')
    inicioScreen.clickMeuDesconto()
    await descontosScreen.clickProximo()
    descontosScreen.clickLogin()
    loginScreen.doLogin(data.user)
    testPassed = await descontosScreen.checkLogin()
})

Scenario('Realizar login com sucesso | Início | Compra programada', async () => {
    comprarScreen.selectTabBars('Início')
    await inicioScreen.clickCompraProgramada()
    loginScreen.doLogin(data.user)
    testPassed = await compraProgramadaScreen.checkLogin()
})

Scenario('Realizar login com sucesso | Início | Minha compra', async () => {
    comprarScreen.selectTabBars('Início')
    await inicioScreen.clickMinhaConta()
    loginScreen.doLogin(data.user)
    testPassed = await meusDadosScreen.checkLogin()
})

// comprar
Scenario('Realizar login com sucesso | Comprar | Mundos Cobasi | Amigo Cobasi', async () => {
    comprarScreen.selectMundosCobasi('Amigo Cobasi')
    loginScreen.doLogin(data.user)
    testPassed = await amigoCobasiScreen.checkLogin()
})

After(async () => {
    if (process.env.AMBIENT === 'remote-android' || process.env.AMBIENT === 'remote-ios') {
        hooks.testPassedOrFail(testPassed)
    }

    testPassed = false
});

