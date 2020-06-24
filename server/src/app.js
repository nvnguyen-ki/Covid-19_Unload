console.log('starting #1')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const {sequelize} = require('./models')
const config = require('./config/config.js')
const app = express()
const request = require('request-promise')
const cheerio = require('cheerio')
// const json2csv = require('json2csv').Parser
// const fs = require('fs')
app.use(morgan('combine'))
app.use(bodyParser.json())
app.use(cors())
var http = require('http');
var server = http.createServer(app);

require('./routes')(app);

sequelize.sync({force: true}) 
    .then(() => {
        app.listen(config.port)
        console.log('server started on port' + config.port)
    });



    app.post('/', function(req, res) {
        let url = [req.body.url];

        (async function () {
            let imdbData = []
            for (let movie of url) {
            const response = await request({
              uri: movie,
              json: true,
              header: {
                accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
                "accept-encoding": "gzip, deflate, br",
                "accept-language": "en-US,en;q=0.9}",
              },
              gzip: true
              })
            let $ = cheerio.load(response)
            const title = $('div[class="title_wrapper"] > h1').text().trim()
            const rating = $('div[class="ratingValue"] > strong').text()
            imdbData.push({
              title, rating
            })
          }
            res.json(imdbData)
          }
          )()
        if (!url) { //User input is blank.
            res.json('err mate');
        }
       
      });

server.listen(process.env.PORT, process.env.IP);
