console.log('starting #1')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const {sequelize} = require('./models')
const config = require('./config/config.js')
const app = express()
app.use(morgan('combine'))
app.use(bodyParser.json())
app.use(cors())

require('./routes')(app)

sequelize.sync() //{force: true}
    .then(() => {
        app.listen(config.port)
        console.log('server started on port' + config.port)
    })

