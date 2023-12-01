import Ajv from "ajv"

Cypress.Commands.add('login', (email, password) => {

    cy.login()

        cy.request({
            method: 'POST',
            url: '/api/auth',
            body: {
                email: email,
                password: password
            }
        }).then(() => {

            Cypress.Cookies.defaults({
                preserve: 'jwt'
            })
        })
    })

Cypress.Commands.add('testeContrato', () => {

    // Função que mostra os erros
    const getSchemaError = (ajvErros) => {
        return cy.wrap(
            `Campo: ${ajvErros[0]['instancePath']} é inválido. Erro: ${ajvErros[0]['message']}`
        )
    }
})

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
