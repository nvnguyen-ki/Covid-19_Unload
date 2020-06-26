const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const functions = require('./functions')
//const getUrls = require('get-urls')
const request = require('request-promise')
const cheerio = require('cheerio')
module.exports = (app) => {
    app.post('/register', 
    AuthenticationControllerPolicy.register,
    AuthenticationController.register)

    app.post('/login', 
    AuthenticationController.login)    


    // scraping all upcoming movies
    app.post('/scrape2', 
    function(req, res) { 
        const body = req.body;
        (async function () {
            // response to get uri
        const response = await request({
            uri: body.text,
            json: true
        })
        // loading response
        let $ = cheerio.load(response)
        const length = $('div[id="main"] > ul > li > a').length
        const movies = $('div[id="main"] > ul > li > a')
        console.log(movies[0].attribs.href)
        let titles = []
        for (var i = 0; i < length; i++) {
            titles.push("https://www.imdb.com/" + movies[i].attribs.href)
        }
        res.send(titles)
        
    }
        )()
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