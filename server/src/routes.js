
const functions = require('./functions')
//const getUrls = require('get-urls')
const request = require('request-promise')
const cheerio = require('cheerio')

var options = {
    method: 'GET',
    url: 'https://covid-19-data.p.rapidapi.com/report/country/name',
    qs: {
        'date-format': 'YYYY-MM-DD',
        format: 'json',
        date: '2020-04-01',
        name: ''
      },
    headers: {
      'x-rapidapi-host': 'covid-19-data.p.rapidapi.com',
      'x-rapidapi-key': 'ed695d1127mshcb85b847f3a808fp131680jsn702c0339b102',
      useQueryString: true
    }
  };
  
module.exports = (app) => {
    // request from covid api depending on country
    app.post('/test', 
    async function(req, res) { 
        // request for a country
        options.qs.name = req.body.text
        if (req.body.text == "") {
            return res.send({
                error: "please provide valid country"
            })
        }
        request(options, function (error, response, body) {
            if (error) throw new Error(error);
            // parsing body cause it's a string instead in json format
            var jsonbody = JSON.parse(body);
            let data = []
            var confirmed = jsonbody[0].provinces[0].confirmed
            var recovered = jsonbody[0].provinces[0].recovered
            var deaths = jsonbody[0].provinces[0].deaths
            var active = jsonbody[0].provinces[0].active
            // pushing the parsed info into an array
            data.push({
                confirmed, recovered, deaths, active
            })
            console.log(data);
            res.send(data)
        })
    })
    
    // scraping title and ratings of all movies within an array.
    app.post('/scrape', 
    async function(req, res) {
        try {
            const body = req.body
            // await will make sure function is ran before going linearly down.
            const titles = await functions.getTitles(body.text)
            const text = body.text
            console.log("this is working: " + text)
            //const urls = Array.from(getUrls(text));
            
            if (!body || text === "" || titles.length == 0) { //no text provided.
                return res.send({
                    error: "please provide valid urls"
                })
            } else {
            (async function () {
                let imdbData = []
                for (let movie of titles) {
                const response = await request({
                uri: movie,
                json: true
                })
                let $ = cheerio.load(response)
                const title = $('div[class="title_wrapper"] > h1').text().trim()
                var rating = $('div[class="ratingValue"] > strong').text()
                if (rating === "") {
                    rating = "unrated"
                }
                imdbData.push({
                title, rating
                })
            }
                res.send(imdbData)
                console.log(imdbData)
                return {
                    title: imdbData.title,
                    rating: imdbData.rating
                }
            }
            )()
        }
    }
        catch (err) {
            res.status(500).send({
            error: 'An error has occured trying to parse'
        })
    }
      });


}