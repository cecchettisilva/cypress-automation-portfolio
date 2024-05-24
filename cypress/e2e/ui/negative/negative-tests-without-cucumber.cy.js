context("Negative tests without cucumber (Sauce Labs - Swag Labs)", () => {
    
    let userLogin

    before(() => {        
        cy.fixture('userLogin').then((fixture) => {
            userLogin = fixture
        })
    })

    beforeEach(() => {       
        cy.visit(Cypress.config().baseUrlFrontend)
    })

    describe("[Sauce Demo][UI] - Negative flow tests", { tags: [ 'testUi', 'testUiNegative' ] }, () => {

        it("Unsuccessful login with wrong password", () => {
            cy.login(userLogin.user_wrong_pass, userLogin.user_wrong_pass, 'Epic sadface: Username and password do not match any user in this service')
        })

        it("Unsuccessful login with locked user", () => {
            cy.login(userLogin.locked_out_user, userLogin.locked_out_user, 'Epic sadface: Sorry, this user has been locked out.')
        })

        it("Unsuccessful order when no server is unavailable to handle the request", () => {

            cy.intercept('POST', '/UNIVERSE/TOKEN/json').as('finishError')

            cy.login(userLogin.error_user, userLogin.error_user, 'Products')
            cy.selectOneProductToCart(
                'Sauce Labs Backpack', 
                'A description should be here, but it failed to render! This error has been reported to Backtrace.',
                '$29.99'
            )
            cy.finishOrder(
                'Mr.',
                '',
                '99032-060',
                '',
                ''           
            )
            cy.wait('@finishError').its('response.statusCode').should('eq', 503)
            cy.wait('@finishError').its('response.body').should('contain', '503 Service Unavailable')
        })
    })
})