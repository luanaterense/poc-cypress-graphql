import Ajv from "ajv"
const ajv = new Ajv()

it('Consultando países', () => {
  cy.request({
    method: 'POST',
    url: 'https://countries.trevorblades.com/',
    body: {
      query: `
      {
        country(code: "BR") {
          name
          native
          capital
          emoji
          currency
          languages {
            code
            name
          }
        }
      }
      `,
    },
  }).then(res => {
    cy.fixture('schema').then((schema) => {

      //Compila o schema e guarda em cache
      const validate = ajv.compile(schema)

      //Valida o body retornado e compara com o schema
      const valid = validate(res.body)

      //Se ocorrer erro, mostra o erro no console
      try {
        console.log(validate.errors)
        cy.log('Mensagem:', validate.errors[0].message)
        cy.log('Path do schema: ', validate.errors[0].schemaPath)
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