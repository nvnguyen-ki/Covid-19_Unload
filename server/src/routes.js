
const functions = require('./functions')
//const getUrls = require('get-urls')
const request = require('request-promise')
const cheerio = require('cheerio');

// var countryDailyReport = {
//     method: 'GET',
//     url: 'https://covid-19-data.p.rapidapi.com/report/country/all',
//     qs: {'date-format': 'YYYY-MM-DD', format: 'json', date: '2020-04-01'},
//     headers: {
//       'x-rapidapi-host': 'covid-19-data.p.rapidapi.com',
//       'x-rapidapi-key': 'ed695d1127mshcb85b847f3a808fp131680jsn702c0339b102',
//       useQueryString: true
//     }
//   };

/** COVID-19 Statistics API Documentation
Based on public data by Johns Hopkins CSSE **/

  var USAData = {
    method: 'GET',
    url: 'https://covid-19-statistics.p.rapidapi.com/reports',
    qs: {
      iso: 'USA',
      region_name: 'US',
      city_name: '',
      date: '2020-06-28',
    },
    headers: {
      'x-rapidapi-host': 'covid-19-statistics.p.rapidapi.com',
      'x-rapidapi-key': 'ed695d1127mshcb85b847f3a808fp131680jsn702c0339b102',
      useQueryString: true
    }
  };
  
module.exports = (app) => {
    // request from covid api depending on country
    app.post('/test', 
    async function(req, res) { 
        try {// request for daily usa data
            console.log(req.body.region_province)
            console.log(req.body.city_name)
            USAData.qs.region_province = req.body.region_province
            USAData.qs.city_name = req.body.city_name
            await request(USAData, function (error, response, body) {
                if (error) throw new Error(error);
                let jsonbody = JSON.parse(body)
                if (jsonbody.data.length == 0 ) {
                    return res.send({
                        error: 'Incorrect region or city'
                    })
                } else {
                    let data = []
                    const confirmed = jsonbody.data[0].region.cities[0].confirmed
                    const death = jsonbody.data[0].region.cities[0].deaths
                    const last_update = jsonbody.data[0].region.cities[0].last_update
                    data.push({
                        confirmed, death, last_update
                    })
                    console.log(data)
                    return res.send(data)
                }
            });
        }   catch (err) {
                return res.status(500).send({
                error: 'An error has occured trying to parse'
                })
        }
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