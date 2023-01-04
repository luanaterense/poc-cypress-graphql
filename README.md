# poc-cypress-graphql

Este projeto foi criado com a intenção de apresentar um estudo sobre testes de contrato com Cypress e AJV (Json Schema Validator) e com uma API em graphql.

Documentações:
- https://ajv.js.org/guide/getting-started.html
- https://docs.cypress.io/guides/overview/why-cypress

Ao clonar o projeto, será necessário o download do NodeJS e então o download do Cypress e AJV.

Para instalar o AJV, execute o seguinte comando:

    npm install ajv --save-dev

Para instalar o Cypress, execute:

    npm install cypress --save-dev

Ao realizar as instalações os testes poderão ser executados através do comando:

    npm test

Caso queira apenas executar localmente o teste, execute o comando abaixo e utilize a janela do Cypress para isso.

    npx cypress open

Ao executar os testes, será possível visualizar as evidências locais nas pastas ..\cypress\videos e ..\cypress\evidências.

Em nuvem, será possível verificar os gráficos e evidências neste [link](https://cloud.cypress.io/projects/xh7k56/runs/3/test-results/e10a5ea9-5086-46e2-a796-2c70f1b4dcb3 "link").

O GitHub Actions também demonstrará a execução do teste.