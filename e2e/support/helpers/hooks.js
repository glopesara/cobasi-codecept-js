const { I } = inject();

module.exports = {
    async before() {
        I.wait(3)
        I.runOnAndroid(async () => {
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
    }
}