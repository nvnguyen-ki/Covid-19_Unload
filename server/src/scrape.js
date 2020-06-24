const request = require('request-promise')
const cheerio = require('cheerio')
const json2csv = require('json2csv').Parser
const fs = require('fs')

const movies = ["https://www.imdb.com/title/tt8946378/?ref_=hm_fanfav_tt_1_pd_fp1"];
// eslint-disable-next-line no-unexpected-multiline
(async () => {
  let imdbData = []
  for (let movie of movies) {
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
  const json = new json2csv()
  const csv = json.parse(imdbData)
  
  fs.writeFileSync("./imdb.csv", csv, "utf-8")
}



)()

