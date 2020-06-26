
const request = require('request-promise')
const cheerio = require('cheerio')

module.exports = { 
    async getTitles (url) { 
    const body = url;
    console.log(url)
    const response = await request({
        uri: body,
        json: true
    })
    let $ = cheerio.load(response)
    const length = $('div[id="main"] > ul > li > a').length
    const movies = $('div[id="main"] > ul > li > a')
    var titles = []
    for (var i = 0; i < length; i++) {
        titles.push("https://www.imdb.com/" + movies[i].attribs.href)
    }
    console.log("in funct: " + titles.length)
    return titles
}
   
    

}

