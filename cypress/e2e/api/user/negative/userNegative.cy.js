
import { schemaResponseErrorUser } from '../../../../fixtures/contracts/user/schemaUser'
import { faker } from '@faker-js/faker'

context("Positive tests api (Dummy Api)", () => {

    describe("[Dummy Api][API] - Negative user flow tests", { tags: [ 'testApi', 'testApiNegative' ] }, () => {

        it("[POST] Create user with invalid title and email", () => {

            const firstName = faker.person.firstName()
            const lastName = faker.person.lastName() 
            const email = faker.string.numeric(2)
            
            cy.standardRequest(
                'POST',
                '/user/create',
                'application/json',
                '',
                {
                    title: 'MR',
                    firstName: firstName,
                    lastName: lastName,
                    email: email
                }, 
                400
            ).then((responseCreate) => {

                const emailErrorMessage = responseCreate.data.email.replace(/\s\(\d+\)/g, "")

                expect(responseCreate.error).to.eq("BODY_NOT_VALID")
                expect(emailErrorMessage).to.equal("Path `email` is invalid.")
                expect(responseCreate.data.title).to.equal("`MR` is not a valid enum value for path `title`.") 
            })
        })

        it("[GET] Get a user application searching for a invalid id and validate the schema contract", () => {
            cy.standardRequest(
                'GET',
                '/user/6632e56e62be277f8f8c25',
                'application/json',
                '',
                null, 
                400
            ).then(async(response) => {
                expect(response).to.deep.equal({
                    "error": "PARAMS_NOT_VALID"
                  })

                await schemaResponseErrorUser.validateAsync(response).then(() => {
                    cy.log('Contract validate with success')                         
                })
            })
        })

        it("[PUT] Update user ith invalid email", () => {

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
                    email: update
                }, 
            200)
        })

        it("[DELETE] Delete a invalid user", () => {

            const id = faker.string.alphanumeric(25)

            cy.standardRequest(
                'DELETE',
                '/user/'+`${id}`,
                'application/json',
                '',
                null,
                400
            ).then((responseDeleteUser) => {
                expect(responseDeleteUser).to.deep.eq({
                    "error": "PARAMS_NOT_VALID"
                })
            })
        })
    })
})