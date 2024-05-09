
import { schemaResponseErrorComment } from '../../../fixtures/contracts/comment/schemaComment'
import { faker } from '@faker-js/faker'

context("Negative tests api (Dummy Api)", () => {

    describe("[Dummy Api][API] - Negative comment flow tests", { tags: 'testapi' }, () => {

        it("[POST] Create a comment with invalid post parameter and validate the schema contract", () => {

            const message = faker.lorem.words(8)
            const ownerId = "6632e56e62be277f8f8c25bd"
            const postId = "663827cee47b08779b800e5"
            
            cy.standardRequest(
                'POST',
                '/comment/create',
                'application/json',
                '',
                {
                    message: message,
                    owner: ownerId,
                    post: postId,
                }, 
                400
            ).then(async (responseCreateComment) => {
                expect(responseCreateComment).to.deep.eq({"error": "BODY_NOT_VALID"})

                await schemaResponseErrorComment.validateAsync(responseCreateComment).then(() => {
                    cy.log('Contract validate with success')                         
                })
            })
        })

        it("[GET] Try to get a list of comments by user with invalid path and validate the schema contract", () => {

            const userId = "6632e56e62be277f8f8c25bd"
            
            cy.standardRequest(
                'GET',
                '/postid=' + `${userId}` + '/comment',
                'application/json',
                '',
                null, 
                404
            ).then(async (responseListComments) => {
                expect(responseListComments).to.deep.eq({"error": "PATH_NOT_FOUND"})

                await schemaResponseErrorComment.validateAsync(responseListComments).then(() => {
                    cy.log('Contract validate with success')                         
                })
            })
        })
    })
})