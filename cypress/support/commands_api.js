const baseUrlAPI = Cypress.config().baseUrlAPI

Cypress.Commands.add('standardRequest', (method, endpoint, contentType, accessToken, requestBody, statusCode) => {  
    cy.api({
        failOnStatusCode: false,
        method: method,
        url: `${baseUrlAPI}` + `${endpoint}`,
        headers: {
            "app-id": '66305b97e94a48f7b34df16b',
            "Content-Type": contentType,
            "Authorization": accessToken
        },
        body: requestBody
    }) 
    .then((response) => {
        expect(response.status).to.eq(statusCode)
        return response.body
    }).as(endpoint) 
})