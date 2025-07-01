const swaggerJsDoc = require('swagger-jsdoc')
const path = require('path');

const options = {
    definition:{
        openapi:'3.0.0',
        info:{
            title:'CipherNote-API',
            version:'1.0.0',
            description:'Cool API for managing personal notes',
        },
        servers:[
            {
                url:'http://localhost:3000'
            }
        ],
        components:{
            securitySchemes:{
                bearerAuth:{
                     type:'http',
                     scheme:'bearer',
                     bearerFormat:'JWT'
                }
               }
        },
        security:[{bearerAuth: [] }]
    },
     apis: [path.join(__dirname, '../routes/*.js')],
}

module.exports = swaggerJsDoc(options)