module.exports = {
    port: process.env.port || 8081,
    db: {
        database: process.env.DB_NAME || 'scrapeData',
        user: process.env.DB_USER || 'scrapeData',
        password: process.env.DB_PASS || 'scrapeData',
        options: {
            dialect: process.env.DIALECT || 'sqlite',
            host: process.env.HOST || 'localhost',
            storage: './scrapeData.sqlite'
        }
    }
}