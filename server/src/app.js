console.log('starting #1')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const config = require('./config/config.js')
const app = express()

// const json2csv = require('json2csv').Parser
// const fs = require('fs')
app.use(morgan('combine'))
app.use(bodyParser.json())
app.use(cors())
require('./routes')(app);

console.log('running on ' + config.port)
app.listen(config.port)



   