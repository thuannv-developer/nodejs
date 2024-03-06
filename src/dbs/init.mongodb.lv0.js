'use strict'

const { default: mongoose } = require("mongoose")

const connectString = `mongodb://atlas-sql-65deb37525f9c90a2a52ab3b-mmjlb.a.query.mongodb.net/shop_dev?ssl=true&authSource=admin`;

mongoose.connect(connectString).then(_ => console.log(`Connected Mongodb Success`))
.catch(err => console.log(`Error Connect!`))

// dev
if (1 === 1) {
    mongoose.set('debug', true)
    mongoose.set('debug', {color: true})
}

module.exports = mongoose