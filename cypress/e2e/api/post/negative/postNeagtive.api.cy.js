
import { schemaResponseErrorPost } from '../../../../fixtures/contracts/post/schemaPost'

context("Negative tests api (Dummy Api)", () => {

    describe("[Dummy Api][API] - Negative post flow tests", { tags: [ 'testApi', 'testApiNegative' ] }, () => {

        it("[POST] Create a post with invalid likes parameter", () => {
            
            cy.standardRequest(
                'POST',
                '/post/create',
                'application/json',
                '',
                {
                    text: 123,
                    image: 123,
                    likes: "abc",
                    tags: "test",
                    owner: "6632e4c562be27803e8c2546"
                },
                400    
            ).then((responseCreatePost) => {

                expect(responseCreatePost.error).to.eq("BODY_NOT_VALID")
                expect(responseCreatePost.data.likes).to.eq('Cast to Number failed for value \"abc\" (type string) at path \"likes\"')
            })
        })

        it("[GET] Get a list of posts from a user that doesn't exist", () => {
            
            cy.standardRequest(
                'GET',
                '/user/6632e4c562be27803e8c/post',
                'application/json',
                '',
                null,
                400 
            ).then((responseCreatePost) => {

                expect(responseCreatePost.error).to.eq("PARAMS_NOT_VALID")
            })
        })
    })
})