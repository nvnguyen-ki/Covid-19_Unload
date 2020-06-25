const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const getUrls = require('get-urls')
const request = require('request-promise')
const cheerio = require('cheerio')
module.exports = (app) => {
    app.post('/register', 
    AuthenticationControllerPolicy.register,
    AuthenticationController.register)

    app.post('/login', 
    AuthenticationController.login)    
   
    app.post('/scrape', 
    function(req, res) {
        try {
            const body = req.body
            const text = body.text
            const urls = Array.from(getUrls(text));
            if (!body || text === "" || urls.length == 0) { //no text provided.
                return res.send({
                    error: "please provide valid urls"
                })
            } else {
            (async function () {
                let imdbData = []
                for (let movie of urls) {
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