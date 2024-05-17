import { Eyes } from '@applitools/eyes-cypress'

Cypress.Commands.add('openEyes', () => {
    const eyes = new Eyes();
    eyes.setApiKey(Cypress.env('APPLITOOLS_API_KEY'))
})