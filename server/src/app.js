console.log('starting #1')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()

// const json2csv = require('json2csv').Parser
// const fs = require('fs')
app.use(morgan('combine'))
app.use(bodyParser.json())
app.use(cors())
require('./routes')(app);
// heroku : name must be "PORT"
const PORT = 8081 || process.env.PORT ;
app.listen(PORT, () => {
    console.log(`listening on ${PORT}`);
  });



   