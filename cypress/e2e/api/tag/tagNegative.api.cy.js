
import { schemaResponse200Tag, schemaResponse200TagByPost } from '../../../fixtures/contracts/tag/schemaTag'

context("Negative tests api (Dummy Api)", () => {

    describe("[Dummy Api][API] - Negative tag flow tests", { tags: 'testapi' }, () => {

        it("[GET] Validate a invalid tag by post and validate the schema contract", () => {
            
            cy.standardRequest(
                'GET',
                '/tag/abc/post?limit=10',
                'application/json',
                '',
                null, 
                200
            ).then(async (responseTag) => {
                expect(responseTag.data).to.be.empty
                expect(responseTag.total).eq(0)
                expect(responseTag.page).eq(0)
                expect(responseTag.limit).eq(10)

                await schemaResponse200TagByPost.validateAsync(responseTag).then(() => {
                    cy.log('Contract validate with success')                         
                })
            })
        })
    })
})