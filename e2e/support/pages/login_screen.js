const { I } = inject();

module.exports = {
  async doLogin(user) {
    I.waitForElement('~Acesse sua conta', 5)

    var input = '#text-input-outlined'

    I.fillField(input, user.email)
    I.click('~Continuar')

    I.waitForElement('~Esqueci minha senha', 5)
    I.fillField(input, user.pass)
    I.click('~Entrar')
  }
}



// // exemple class
// class Login {
//   // constructor() {
//   //   this.inputFileField = 'input[name=fileUpload]';
//   //   this.fileSize = '.file-size';
//   //   this.fileName = '.file-name'
//   // }

//   doLogin() {
//     I.waitForElement('~Acesse sua conta', 5)
//     var input = '#text-input-outlined'
//     I.fillField(input, 'gabriel.lopes@cobasi.com.br')
//     I.click('~Continuar')
//     I.waitForElement('~Acesse sua conta', 5)
//     I.fillField(input, 'Cobasi@123')
//     I.click('~Entrar')
//   }
// }

// module.exports = new Login();
// module.exports.Login = Login;