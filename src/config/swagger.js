const swaggerJSDoc = require('swagger-jsdoc');

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Teste Tecnico - Api de controle de visitantes',
            version: '1.0.0',
            description: 'Documentação da API REST para controle de entrada e saída de visitantes em condominios',
        },
    },
    apis: ['./src/routes/*.js']

};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;