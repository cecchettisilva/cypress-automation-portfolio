context("Tests without cucumber", () => {
    
    let userLogin

    before(() => {        
        cy.fixture('userLogin').then((fixture) => {
            userLogin = fixture
        })
    })

    beforeEach(() => {       
        cy.visit(Cypress.config().baseUrlFrontend)
    })

    describe("[Sauce Demo][UI] - Positive flow tests", { tags: 'testui' }, () => {

        it("Successful login", () => {
            cy.login(userLogin.standard_user, userLogin.standard_user, 'Products')
        })

        it("Successful do a order", () => {
            cy.login(userLogin.standard_user, userLogin.standard_user, 'Products')
            cy.selectOneProductToCart(
                'Sauce Labs Backpack', 
                'carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.',
                '$29.99'
            )
            cy.finishOrder(
                'Mr.',
                'Test Cypress',
                '99032-060',
                'Thank you for your order!',
                'Your order has been dispatched, and will arrive just as fast as the pony can get there!'            
            )
        })
    })
})