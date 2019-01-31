const express = require('express')

const app = express()
const router = express.Router()

const expressSwagger = require('express-swagger-generator')(app)

const bodyParser = require('body-parser')

const swaggerUi = require('swagger-ui-express')

const db = require('./app/db/db')

const routes = require('./app/routes/index')

const options = {
  swaggerDefinition: {
    info: {
      description: 'Node JS Starter Code',
      title: 'Node Js Rest API',
      version: '1.0.0',
    },
    host: 'localhost:3000',
    basePath: '/api/v1',
    produces: [
      'application/json',
    ],
    schemes: ['http', 'https'],
    securityDefinitions: {
      JWT: {
        type: 'apiKey',
        in: 'header',
        name: 'Authorization',
        description: '',
      },
    },
  },
  basedir: __dirname, // app absolute path
  files: ['./app/routes/*.js'], // Path to the API handle folder
}

expressSwagger(options)

router.use(bodyParser.urlencoded({ extended: true }))
router.use(bodyParser.json())

app.use('/api/v1', routes(router))

app.get('*', (req, res) => {
  res.status(404).send('Page Not Found')
})

module.exports = app
