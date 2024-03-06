'use strict'

const { default: mongoose } = require("mongoose")
const { db: {host, name, port, ssl}} = require('../configs/config.mongodb')
const connectString = `mongodb://${host}:${port}/${name}?${ssl}`
const {countConnect} = require('../helpers/check.connect')

class Database
{
    constructor() {
        this.connect()
    }

    //connect
    connect(type = 'mongodb') {
        // dev
        if (1 === 1) {
            mongoose.set('debug', true)
            mongoose.set('debug', {color: true})
        }

        console.log(`connectString::`, connectString);

        mongoose.connect(connectString, {
            maxPoolSize: 50
        }).then( _ => {
            console.log(`Connected Mongodb Pro Success`, countConnect())
        })
        .catch(err => console.log(`Error Connect!`))
    }
    
    static getInstance() {
        if (!Database.instance) {
            Database.instance = new Database()
        }

        return Database.instance
    }
}

const instanceMongodb = Database.getInstance()
module.exports = instanceMongodb