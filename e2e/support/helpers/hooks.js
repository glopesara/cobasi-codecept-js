const { I } = inject();

module.exports = {
    async before() {
        I.runOnAndroid(async () => {
            I.wait(3)
            const tap = await I.grabNumberOfVisibleElements('#com.android.permissioncontroller:id/permission_allow_button')
            if (tap > 0) {
                I.click('#com.android.permissioncontroller:id/permission_allow_button')
            }
        })

        I.waitForElement('~APP_INPUT_SEARCH', 10)


        const update = await I.grabNumberOfVisibleElements('~Atualizar Depois')
        if (update > 0) {
            I.click('~Atualizar Depois')
        }
    },

    testPassedOrFail(testPassed) {
        if (testPassed === true) {
            I.executeScript('browserstack_executor: {"action": "setSessionStatus", "arguments": {"status":"passed","reason": " Teste realizado com sucesso"}}')
        }
        else {
            I.executeScript('browserstack_executor: {"action": "setSessionStatus", "arguments": {"status":"failed","reason": "Teste falhou"}}')
        }
    }
}