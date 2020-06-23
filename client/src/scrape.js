const functions = require('firebase-functions')
const cors = require('cors')({origin: true})

const cheerio = require('cheerio')
const getURLs = require('get-urls')
const fetch = require('node-fetch')

const scrapeMetatags = (text) => {
  const urls = Array.from(getURLs(text))
  const requests = urls.map(async url => {
    const res = await fetch(url)
    const html = await res.text()
    const $ = cheerio.load(html)

    const getMetatag = (name) =>
      // eslint-disable-next-line no-template-curly-in-string
      $('meta[name=${name}]').attr('content') ||
            // eslint-disable-next-line no-template-curly-in-string
            $('meta[property="og:${name}"]').attr('content') ||
            // eslint-disable-next-line no-template-curly-in-string
            $('meta[property="twitter:${name}"]').attr('content')

    return {
      url,
      title: $('title').first().text(),
      favicon: $('link[rel=:"shortcut icon"]').attr('href'),
      description: $('meta[name=description]').attr('content'),
      image: getMetatag('image'),
      author: getMetatag('author')
    }
  })
  return Promise.all(requests)
}

exports.scraper = functions.https.onRequest((request, res) => {
  cors(request, res, async () => {
    const body = JSON.parse(request.body)
    const data = await scrapeMetatags(body.text)
    res.send(data)
  })
})
