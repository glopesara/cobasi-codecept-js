module.exports = {
    loaderCapabilities() {

        const user = 'gabriel_7zZvEK'
        const acess_key = 'hHNsiL3rh88tP13EApsW'

        switch (process.env.AMBIENT) {
            case 'local-android':
                return {
                    platform: process.env.PLATFORM,
                    app: process.env.APP ? process.env.APP : '',
                    desiredCapabilities: {
                        platformVersion: process.env.VERSION,
                        udid: process.env.UDID,
                        deviceName: process.env.DEVICE,

                        appPackage: process.env.APPPACKAGE,
                        appActivity: process.env.APPACTIVITY,
                        unicodeKeyboard: true,
                        resetKeyboard: true,
                    }
                }
                break;
            case 'local-ios':
                return {
                    platform: process.env.PLATFORM,
                    app: process.env.APP ? process.env.APP : '',
                    desiredCapabilities: {
                        platformVersion: process.env.VERSION,
                        udid: process.env.UDID,
                        deviceName: process.env.DEVICE,
                        newCommandTimeout: "100000",
                        adbExecTimeout: "100000",
                        locationServicesAuthorized: true,
                        locationServicesEnabled: true,
                        autoAcceptAlerts: true,
                        autoDismissAlerts: false,
                        "settings[snapshotMaxDepth]": "60"
                    }
                }
                break;
            case 'remote-android':
                return {
                    automationName: "Appium",
                    app: "bs://b681a1e912644375c14aeba344adf1a51b797549",
                    host: "hub-cloud.browserstack.com",
                    port: 4444,
                    platform: process.env.PLATFORM,
                    user: user,
                    key: acess_key,
                    device: process.env.DEVICE,
                    platformVersion: process.env.VERSION,
                    desiredCapabilities: {
                        buildName: "16.6.2",
                        projectName: "Cobasi",
                        unicodeKeyboard: true,
                        resetKeyboard: true,
                    }
                }
            case 'remote-ios':
                return {
                    automationName: "Appium",
                    app: 'bs://dfd7e66ffbd5c7b9d9d4271c0ea715b635e985fa',
                    host: "hub-cloud.browserstack.com",
                    port: 4444,
                    platform: process.env.PLATFORM,
                    user: user,
                    key: acess_key,
                    device: process.env.DEVICE,
                    platformVersion: process.env.VERSION,
                    desiredCapabilities: {
                        buildName: "16.6.2",
                        projectName: "Cobasi",
                        locationServicesAuthorized: true,
                        locationServicesEnabled: true,
                        autoAcceptAlerts: true,
                        autoDismissAlerts: false,
                    }
                }
            default:
                throw new Error(`Ambiente "${process.env.AMBIENT}" é invalido`)
        }
    }
} 