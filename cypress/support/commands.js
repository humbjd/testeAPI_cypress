import Ajv from 'ajv'
import { definitionHelper } from '../utils/schemaDefinitions'

// Loga na aplicação via API
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

// Executa teste de contrato em uma API
Cypress.Commands.add('testeContrato', (schema, resposta) => {

    // Função que mostra os erros
    const getSchemaError = (ajvErros) => {
        return cy.wrap(
            `Campo: ${ajvErros[0]['instancePath']} é inválido. Erro: ${ajvErros[0]['message']}`
        )
    }

    // Iniciar o AJV
    const ajv = new Ajv()
    const validacao = ajv.addSchema(definitionHelper).compile(schema)
    const valido = validacao(resposta)

    // Verificar se o schema passou ou falhou
    if (!valido) {
        getSchemaError(validacao.errors).then((schemaError)=> {
            throw new Error()
        })
    } else {
        expect(valido, 'Validação de contrato').to.be.true
    }

})

// Seleciona um elemento pelo atributo data-test
Cypress.Commands.add('getElement', (seletor) => {
    return cy.get(`[data-test=${seletor}]`)
})