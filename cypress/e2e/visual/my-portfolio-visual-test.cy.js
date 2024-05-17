context("Visual testing  with applitools using my own portfolio", () => {
    
    let userLogin

    before(() => {        
        cy.fixture('userLogin').then((fixture) => {
            userLogin = fixture
        })
    })

    beforeEach(() => {       
        // Start Applitools Visual AI Test
        cy.eyesOpen({
            appName: 'My Portfolio',
            testName: Cypress.currentTest.title,
        })
    })

    afterEach(() => {     
        // End Applitools Visual AI Test  
        cy.eyesClose()
    })

    describe("[Portfolio][Visual Testing] - Positive flow tests", { tags: 'testui' }, () => {

        it("Test changes of test 1 page", () => {

            cy.visit(Cypress.config().baseUrlPortfolio + "/test1.html")
            
            cy.eyesCheckWindow({
                tag: "test 1 page",
                fully: true
            })
        })
    })
})