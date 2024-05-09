
import { schemaResponse200User } from '../../../fixtures/contracts/user/schemaUser'
import { faker } from '@faker-js/faker'

context("Positive tests api (Dummy Api)", () => {

    let responsesUser

    before(() => {
        cy.fixture('api/responsesUser').then((fixture) => {
            responsesUser = fixture
        })
    })

    describe("[Dummy Api][API] - Positive user flow tests", { tags: 'testapi' }, () => {

        it("[POST] Create user", () => {

            const firstName = faker.person.firstName()
            const lastName = faker.person.lastName() 
            const email = faker.internet.email({ firstName: firstName, lastName: lastName })
            
            cy.standardRequest(
                'POST',
                '/user/create',
                'application/json',
                '',
                {
                    title: 'mr',
                    firstName: firstName,
                    lastName: lastName,
                    email: email
                }, 
                200
            )
        })

        it("[GET] Get a list of all application users", () => {
            cy.standardRequest(
                'GET',
                '/user?page=4?limit=5',
                'application/json',
                '',
                null, 
                200
            ).then((response) => {
                expect(response.data).to.not.be.empty
            })
        })

        it("[GET] Get a user application and validate the schema contract searching by id", () => {
            cy.standardRequest(
                'GET',
                '/user/6632e56e62be277f8f8c25bd',
                'application/json',
                '',
                null, 
                200
            ). then(async(response) => {
                expect(response).to.deep.equal(responsesUser.responseUserWilliamCecchetti)

                await schemaResponse200User.validateAsync(response).then(() => {
                    cy.log('Contract validate with success')                         
                })
            })
        })

        it("[PUT] Update user", () => {

            const update = faker.string.numeric(2)

            cy.standardRequest(
                'PUT',
                '/user/6632f0bf62be2764238c33ac',
                'application/json',
                '',
                {
                    title: 'mr',
                    firstName: 'teste',
                    lastName: 'update '+`${update}`,
                    email: 'testupdate@gmail.com'
                }, 
                200
            )
        })

        it("[DELETE] Creating and deleting a user after creation", () => {

            const firstName = faker.person.firstName()
            const lastName = faker.person.lastName() 
            const email = faker.internet.email({ firstName: firstName, lastName: lastName })
            
            cy.standardRequest(
                'POST',
                '/user/create',
                'application/json',
                '',
                {
                    title: 'mr',
                    firstName: firstName,
                    lastName: lastName,
                    email: email
                }, 
                200
            ).then((responseCreate) => {

                const id = responseCreate.id

                cy.standardRequest(
                    'DELETE',
                    '/user/'+`${id}`,
                    'application/json',
                    '',
                    null,
                    200
                )
            })
        })
    })
})