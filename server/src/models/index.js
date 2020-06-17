const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize')
const config = require('../config/config.js')
const db = {}

var datab = config.db.database
var user = config.db.user
var password = config.db.password
var option = config.db.option
const sequelize = new Sequelize( 
    {
        host: 'localhost',
        dialect: 'sqlite',
        datab,
        user,
        password,
        option
    }
    
)



fs
    .readdirSync(__dirname)
    .filter((file) => 
        file !== 'index.js'
)
    .forEach((file) => {
        const model = sequelize.import(path.join(__dirname, file))
        db[model.name] = model
})

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db