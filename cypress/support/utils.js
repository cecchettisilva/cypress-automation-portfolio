cy.fixture('/endpointPost/baseResponseSuccessCreatePost.json').then((expectedResponse) => {

    expectedResponse.id = responseCreatePost.id
    expectedResponse.image = responseCreatePost.image
    expectedResponse.text = responseCreatePost.text
    expectedResponse.publishDate = responseCreatePost.publishDate
    expectedResponse.updatedDate = responseCreatePost.updatedDate
    expectedResponse.owner.id = responseCreatePost.owner.id
    expectedResponse.owner.firstName = responseCreatePost.owner.firstName
    expectedResponse.owner.lastName = responseCreatePost.owner.lastName

    expect(responseCreatePost).to.deep.equal(expectedResponse)
})