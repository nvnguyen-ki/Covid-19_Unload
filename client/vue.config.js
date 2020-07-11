const path = require('path')

module.exports = {
    devServer: {
        proxy: {
            '/': {
                target: 'https://covid-19-unload.herokuapp.com/'
            }
        }
    }
}