import { LoginPage } from '../pages/login_page'

before(function(){
    cy.log('I am outside all describe blocks')
})


describe('All login tests', function () {

    //object creation //global dec
    let loginPage = new LoginPage()

    beforeEach(function(){
      //calling function of login page class
      loginPage.navigate('https://trytestingthis.netlify.app/')
    })

    it.only('login test -valid cred', () => {
        loginPage.loginWithValidCredentials('test', 'test')
    })

    it('login test - invalid cred', () => {

        loginPage.loginWithInValidCredentials('abc', '123')

        // loginPage.enterUsername('test')
        // loginPage.enterPassword('test')
        // loginPage.clickLogin()


        // cy.visit('https://trytestingthis.netlify.app/')
        // cy.get('#uname').type('test')
        // cy.get('#pwd').type('test')
        // cy.get('[type="submit"]').click()
        // cy.contains('Login Successful')
    })



})






