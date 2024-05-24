
import { schemaResponse200CreateComment, schemaResponse200CommentByUserPost } from '../../../../fixtures/contracts/comment/schemaComment'
import { faker } from '@faker-js/faker'

context("Positive tests api (Dummy Api)", () => {

    describe("[Dummy Api][API] - Positive comment flow tests", { tags: [ 'testApi', 'testApiPositive' ]}, () => {

        it("[POST] Create a comment and validate the schema contract", () => {

            const message = faker.lorem.words(8)
            const ownerId = "6632e56e62be277f8f8c25bd"
            const postId = "663827cee47b08779b800e5b"
            
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
                200
            ).then(async (responseCreateComment) => {
                expect(responseCreateComment).to.not.be.empty

                await schemaResponse200CreateComment.validateAsync(responseCreateComment).then(() => {
                    cy.log('Contract validate with success')                         
                })
            })
        })

        it("[GET] Get a list of comments by user and validate the schema contract", () => {

            const userId = "6632e56e62be277f8f8c25bd"
            
            cy.standardRequest(
                'GET',
                '/post?id=' + `${userId}` + '/comment',
                'application/json',
                '',
                null, 
                200
            ).then(async (responseListComments) => {
                expect(responseListComments.data).to.not.be.empty

                await schemaResponse200CommentByUserPost.validateAsync(responseListComments).then(() => {
                    cy.log('Contract validate with success')                         
                })
            })
        })

        it("[POST] Delete a comment", () => {

            const message = faker.lorem.words(8)
            const ownerId = "6632e56e62be277f8f8c25bd"
            const postId = "663827cee47b08779b800e5b"
            
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
                200,
            ).then((responseCreateComment) => {
                expect(responseCreateComment).to.not.be.empty

                const id = responseCreateComment.id

                cy.standardRequest(
                    'DELETE',
                    '/comment/'+`${id}`,
                    'application/json',
                    '',
                    null,
                    200
                ).then((responseDeleteComment) => {
                    expect(responseDeleteComment).to.deep.equal({ id: id })
                })
            })
        })
    })
})