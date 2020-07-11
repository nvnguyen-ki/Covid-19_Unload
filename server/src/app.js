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
// handle production
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(__dirname, '../public'))

    // single page app
    app.get(/.*/, (req, res) => {
        res.sendFile(__dirname, '../public/index.html')
    })
}
console.log('running on ' + config.port)
app.listen(config.port)



   