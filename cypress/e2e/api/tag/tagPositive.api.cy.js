
import { schemaResponse200Tag, schemaResponse200TagByPost } from '../../../fixtures/contracts/tag/schemaTag'

context("Positive tests api (Dummy Api)", () => {

    describe("[Dummy Api][API] - Positive tag flow tests", { tags: 'testapi' }, () => {

        it("[GET] Get a list of all registred tags and validate the schema contract", () => {
            
            cy.standardRequest(
                'GET',
                '/tag?limit=10',
                'application/json',
                '',
                null, 
                200
            ).then(async (responseTag) => {
                expect(responseTag).to.not.be.empty

                await schemaResponse200Tag.validateAsync(responseTag).then(() => {
                    cy.log('Contract validate with success')                         
                })
            })
        })

        it("[GET] Get a list of tags by post and validate the schema contract", () => {
            
            cy.standardRequest(
                'GET',
                '/tag/cypress/post?limit=10',
                'application/json',
                '',
                null, 
                200
            ).then(async (responseTag) => {
                expect(responseTag).to.not.be.empty

                await schemaResponse200TagByPost.validateAsync(responseTag).then(() => {
                    cy.log('Contract validate with success')                         
                })
            })
        })
    })
})