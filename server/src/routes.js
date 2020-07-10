
// const functions = require('./functions')
//const getUrls = require('get-urls')

/* request apis */
const request = require('request-promise')
// const cheerio = require('cheerio');

/* COVID-19 Statistics API Documentation
Based on public data by Johns Hopkins CSSE */

var countriesDaily = {
    method: 'GET',
    url: 'https://covid-193.p.rapidapi.com/statistics',
    headers: {
      'x-rapidapi-host': 'covid-193.p.rapidapi.com',
      'x-rapidapi-key': 'ed695d1127mshcb85b847f3a808fp131680jsn702c0339b102',
      useQueryString: true
    }
  };
  

  var dailyUSAData = {
    method: 'GET',
    url: 'https://covid-19-statistics.p.rapidapi.com/reports',
    qs: {
      iso: 'USA',
      region_name: 'US',
      city_name: '',
      date: '',
    },
    headers: {
      'x-rapidapi-host': 'covid-19-statistics.p.rapidapi.com',
      'x-rapidapi-key': 'ed695d1127mshcb85b847f3a808fp131680jsn702c0339b102',
      useQueryString: true
    }
  };

  var totalData = {
    method: 'GET',
    url: 'https://covid-19-statistics.p.rapidapi.com/reports/total',
    qs: {date: ''},
    headers: {
      'x-rapidapi-host': 'covid-19-statistics.p.rapidapi.com',
      'x-rapidapi-key': 'ed695d1127mshcb85b847f3a808fp131680jsn702c0339b102',
      useQueryString: true
    }
  };

  var USATotal = {
    method: 'GET',
    url: 'https://covid-19-data.p.rapidapi.com/country',
    qs: {format: 'json', name: 'USA'},
    headers: {
      'x-rapidapi-host': 'covid-19-data.p.rapidapi.com',
      'x-rapidapi-key': 'ed695d1127mshcb85b847f3a808fp131680jsn702c0339b102',
      useQueryString: true
    }
  };
  // https://documenter.getpostman.com/view/8854915/SzS8rjHv?version=latest#225b6b2e-7880-460d-903e-d96c8d1e69ea
  var dailyUpdates = {
    method: 'GET',
    url: 'https://covidtracking.com/api/states',
    headers: {
      json: true
    }
  };
    // getting the date of yesterday
    var today = new Date();    
    // set date of today to yesterday.
    today.setDate(today.getDate()-1)
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    today = yyyy + '-' + mm + '-' + dd;

module.exports = (app) => {
    app.post('/countriesDaily', (req,res) => {
    request(countriesDaily, function (error, response, body) {
    if (error) throw new Error(error);
    const countries = JSON.parse(body)
    res.send(countries.response)
    });
    })


    // index from 0 to 55 brings latest updates from every state 
    app.post('/LatestUpdate', (req,res) => {
        request(dailyUpdates, function (error, response, body) {
            if (error) throw new Error(error);
            const dailyUpdates = (JSON.parse(body));
            res.send(dailyUpdates)
        });
    })
    // total USA and World Covid Data
    app.post('/WorldData', (req,res) => {
        let USAData = []
        // request for usa data
            request(USATotal, function (error, response, body) {
                if (error) throw new Error(error);
                const UsaTotal = (JSON.parse(body));
                const usaConfirmed = UsaTotal[0].confirmed;
                const usaDeaths = UsaTotal[0].deaths;
                // push data to array
                USAData.push({
                    usaConfirmed, usaDeaths
                })
            });
        totalData.qs.date = today
        let worldDatas = []
        // request for total data
            request(totalData, function (error, response, body) {
                if (error) throw new Error(error);
                const worldData = (JSON.parse(body));
                //console.log(worldData)
                const total_in_world = worldData.data.confirmed
                const total_death_in_world = worldData.data.deaths
                const usaConfirmed = USAData[0].usaConfirmed
                const usaDeaths = USAData[0].usaDeaths
                const lastUpdate = worldData.data.last_update
                worldDatas.push({
                    total_in_world,total_death_in_world, usaConfirmed, usaDeaths, lastUpdate
                })
                res.send(worldDatas)
            });
    })
    // request from covid api depending on country
    app.post('/searchData', 
    async function(req, res) { 
        try {// request for daily usa data
            const region =  req.body.region_province
            const city = req.body.city_name
            if (region == "" || city == "") {
                return res.send({
                    error: 'Incorrect state or city'
            })
        }
            dailyUSAData.qs.region_province = region
            dailyUSAData.qs.city_name = city
            dailyUSAData.qs.date = today
            await request(dailyUSAData, function (error, response, body) {
                
                if (error) throw new Error(error);
                let jsonbody = JSON.parse(body)
                if (jsonbody.data.length == 0) {
                    return res.send({
                        error: 'Incorrect state or city'
                    })
                } else {
                    let data = []
                    for (let i = 0; i < jsonbody.data.length; i++) {
                        
                        const city = jsonbody.data[i].region.cities[0].name
                        const state = jsonbody.data[i].region.province
                        const total_confirmed_in_state = jsonbody.data[i].confirmed
                        const total_death = jsonbody.data[i].deaths
                        const today_confirmed_in_city = jsonbody.data[i].region.cities[0].confirmed
                        const death_in_city = jsonbody.data[i].region.cities[0].deaths
                        const last_update = jsonbody.data[i].region.cities[0].last_update
                        data.push({
                            state, city ,total_confirmed_in_state, today_confirmed_in_city, total_death, death_in_city, last_update
                        })
                    }
                    //console.log(jsonbody)
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
    // app.post('/scrape', 
    // async function(req, res) {
    //     try {
    //         const body = req.body
    //         // await will make sure function is ran before going linearly down.
    //         const titles = await functions.getTitles(body.text)
    //         const text = body.text
    //         console.log("this is working: " + text)
    //         //const urls = Array.from(getUrls(text));
            
    //         if (!body || text === "" || titles.length == 0) { //no text provided.
    //             return res.send({
    //                 error: "please provide valid urls"
    //             })
    //         } else {
    //         (async function () {
    //             let imdbData = []
    //             for (let movie of titles) {
    //             const response = await request({
    //             uri: movie,
    //             json: true
    //             })
    //             let $ = cheerio.load(response)
    //             const title = $('div[class="title_wrapper"] > h1').text().trim()
    //             var rating = $('div[class="ratingValue"] > strong').text()
    //             if (rating === "") {
    //                 rating = "unrated"
    //             }
    //             imdbData.push({
    //             title, rating
    //             })
    //         }
    //             res.send(imdbData)
    //             console.log(imdbData)
    //             return {
    //                 title: imdbData.title,
    //                 rating: imdbData.rating
    //             }
    //         }
    //         )()
    //     }
    // }
    //     catch (err) {
    //         res.status(500).send({
    //         error: 'An error has occured trying to parse'
    //     })
    // }
    //   });


}