const axios = require('axios')

module.exports = {
    // async getApps() {
    //     const response = await axios.get('https://api-cloud.browserstack.com/app-automate/recent_group_apps',
    //         { headers: { Authorization: "Basic Z2FicmllbF83elp2RUs6aEhOc2lMM3JoODh0UDEzRUFwc1c=" } })

    //     const apps =  response.data
    //     console.log(apps)
    // }
    async getPets() {
        const response = await axios.get('https://www.cobasi.com.br/external-apis/pet/pets/user',
            {
                headers: {
                    "accept": "application/json",
                    'Content-Type': "application/json",
                    'X-Cobasi-Session': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NDZiNzQ2Nzg3ZWJlMDAxMWEyMGIxNyIsInVzZXJJZCI6IjM3MDY4YjYxLTE0ZDQtNGU5Ni04Mzk1LWM3YmZlYjMyNGEyNCIsInVzZXJOYW1lIjoiZ2FicmllbC5sb3Blc0Bjb2Jhc2kuY29tLmJyIiwibWFzdGVyRGF0YUlkIjoiNzMxOTZlMzctMzVjMS0xMWVkLTgzYWItMTI2OTMyYjFmNTA5IiwiY3JlYXRlZEF0IjoiMjAyMy0wNC0yNFQxNzowNzoxOC41MDFaIiwiaWF0IjoxNjgyMzU2MDM4LCJleHAiOjE3NDQ1NjQwMzh9.597CIZTewkbJoyJB5Iq5sAzHytrvsSjdaBkaKBZgvWI"

                }
            })
        return await response.data
    },

    async deletePet(pet) {
        var petId
        const list = await this.getPets()

        list.forEach(element => {
            if (element.name === pet) {
                petId = element.id
            }
        })

        if (petId) {
            await axios.delete(`https://www.cobasi.com.br/external-apis/pet/pets/${petId}`,
                {
                    headers: {
                        "accept": "application/json",
                        'Content-Type': "application/json",
                        'X-Cobasi-Session': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NDZiNzQ2Nzg3ZWJlMDAxMWEyMGIxNyIsInVzZXJJZCI6IjM3MDY4YjYxLTE0ZDQtNGU5Ni04Mzk1LWM3YmZlYjMyNGEyNCIsInVzZXJOYW1lIjoiZ2FicmllbC5sb3Blc0Bjb2Jhc2kuY29tLmJyIiwibWFzdGVyRGF0YUlkIjoiNzMxOTZlMzctMzVjMS0xMWVkLTgzYWItMTI2OTMyYjFmNTA5IiwiY3JlYXRlZEF0IjoiMjAyMy0wNC0yNFQxNzowNzoxOC41MDFaIiwiaWF0IjoxNjgyMzU2MDM4LCJleHAiOjE3NDQ1NjQwMzh9.597CIZTewkbJoyJB5Iq5sAzHytrvsSjdaBkaKBZgvWI"

                    }
                })
        }

    },
    
    async createPet(pet) {
        var petExist
        const list = await this.getPets()

        list.forEach(element => {
            if (element.name === pet) {
                petExist = element
            }
        })

        if (!petExist) {
            await axios.post('https://www.cobasi.com.br/external-apis/pet/pets/',
                {
                    "birth": "2022-12-27",
                    "breed": "5dc07dd86c607b525b9bc142",
                    "gender": "MALE",
                    "name": 'cadastro via api',
                    "origin": "ESPACO_PET",
                    "type": "DOG"
                },
                {
                    headers: {
                        accept: "application/json",
                        'Content-Type': "application/json",
                        'X-Cobasi-Session': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NDZiNzQ2Nzg3ZWJlMDAxMWEyMGIxNyIsInVzZXJJZCI6IjM3MDY4YjYxLTE0ZDQtNGU5Ni04Mzk1LWM3YmZlYjMyNGEyNCIsInVzZXJOYW1lIjoiZ2FicmllbC5sb3Blc0Bjb2Jhc2kuY29tLmJyIiwibWFzdGVyRGF0YUlkIjoiNzMxOTZlMzctMzVjMS0xMWVkLTgzYWItMTI2OTMyYjFmNTA5IiwiY3JlYXRlZEF0IjoiMjAyMy0wNC0yNFQxNzowNzoxOC41MDFaIiwiaWF0IjoxNjgyMzU2MDM4LCJleHAiOjE3NDQ1NjQwMzh9.597CIZTewkbJoyJB5Iq5sAzHytrvsSjdaBkaKBZgvWI"

                    },
                })
        }
    }
}
