const swaggerJsdoc = require("swagger-jsdoc");
const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
        title: 'Food Delivery API',
        version: '1.0.0',
    },
    components:{
        securitySchemes:{
            bearerAuth:{
                type: 'http',
                scheme: 'bearer',
                bearerFormat: 'JWT',
            }
        }
    }
};
const options = {
    swaggerDefinition,
    // Paths to files containing OpenAPI definitions
    apis: [
        './api/*.js',
    ],
};
module.exports =  swaggerSpec = swaggerJsdoc(options);
