const { I } = inject();

module.exports = {
    async scrollToElement(element) {
        const scroll = () => {
            if (process.env.PLATFORM === 'android') {
                I.performSwipe({ x: 300, y: 1590 }, { x: 300, y: 200 })
            }
            else {
                I.performSwipe({ x: 300, y: 700 }, { x: 300, y: 200 })
            }
        }

        var find = await I.grabNumberOfVisibleElements(element);
        var condition = 0
        while (find === 0) {
            scroll()
            I.wait(1)
            find = await I.grabNumberOfVisibleElements(element)
            condition++
            if (condition === 5) {
                throw new Error(`O elemento "${element}" não foi encontrado`)
            }
        }
    }
}