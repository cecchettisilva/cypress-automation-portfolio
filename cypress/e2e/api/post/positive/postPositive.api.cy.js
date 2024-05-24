
import { schemaResponse200Post } from '../../../../fixtures/contracts/post/schemaPost'
import { faker } from '@faker-js/faker'

context("Positive tests api (Dummy Api)", () => {

    describe("[Dummy Api][API] - Positive post flow tests", { tags: [ 'testApi', 'testApiPositive' ]}, () => {

        it("[GET] Get a list of all posts by user", () => {
            
            cy.standardRequest(
                'GET',
                '/user/6632e4c562be27803e8c2546/post',
                'application/json',
                '',
                null, 
                200
            ).then((repsonsePosts) => {
                expect(repsonsePosts.data).to.not.be.empty
            })
        })

        it("[POST] Create a post and validate the schema contract", () => {

            const text = faker.lorem.words(10)
            const image = faker.image.url()
            
            cy.standardRequest(
                'POST',
                '/post/create',
                'application/json',
                '',
                {
                    text: text,
                    image: image,
                    likes: 1000,
                    tags: ["test","cypress"],
                    owner: "6632e56e62be277f8f8c25bd"
                },
                200    
            ).then(async (responseCreatePost) => {

                expect(responseCreatePost).to.not.be.empty

                await schemaResponse200Post.validateAsync(responseCreatePost).then(() => {
                    cy.log('Contract validate with success')                         
                })
            })
        })

        it("[DELETE] Create a post and delete after creation", () => {

            const text = faker.lorem.words(10)
            const image = faker.image.url()
            
            cy.standardRequest(
                'POST',
                '/post/create',
                'application/json',
                '',
                {
                    text: text,
                    image: image,
                    likes: 1000,
                    tags: ["test","cypress"],
                    owner: "6632e4c562be27803e8c2546"
                },
                200    
            ).then((responseCreatePost) => {
                expect(responseCreatePost).to.not.be.empty

                const id = responseCreatePost.id

                cy.standardRequest(
                    'DELETE',
                    '/post/'+`${id}`,
                    'application/json',
                    '',
                    null,
                    200    
                )
            })
        })

        it("[PUT] Update a post", () => {

            const textUpdate = faker.lorem.words(10)
            const imageUpdate = faker.image.url()
            const likesUpdate = faker.number.octal(1000)
            
            cy.standardRequest(
                'PUT',
                '/post/66381845d2bb8134974583e0',
                'application/json',
                '',
                {
                    text: textUpdate,
                    image: imageUpdate,
                    likes: likesUpdate,
                    tags: ["test","cypress"],
                    owner: "6632e4c562be27803e8c2546"
                },
                200    
            ).then((responseCreatePost) => {
                expect(responseCreatePost).to.not.be.empty
            })
        })
    })
})