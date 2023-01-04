/// <reference types="cypress"/>

import Ajv from "ajv"
const ajv = new Ajv()

describe('Validar Schema', () => {
    it('Faz requisição', () => {
        cy.request({
            method: "POST",
            "content-type": "application/json",
            url: "https://snowtooth.moonhighway.com/graphql",
            body: {query: "query{allLifts(status:OPEN){id}}"}
        }).then(res => {
            cy.fixture('schema').then((schema) => {
        
              //Compila o schema e guarda em cache
              const validate = ajv.compile(schema)
        
              //Valida o body retornado e compara com o schema
              const valid = validate(res.body)
        
              //Se ocorrer erro, mostra o erro no console
              try {
                console.log(validate.errors)
                cy.get(validate.errors[0].message).should('be.empty')
        
                cy.writeFile(
                    'cypress/evidencias/CT-01.json',
                    JSON.stringify(res.body))
            }
            catch (ex) {
                cy.log(ex)
            }
          })
          })
    })
})