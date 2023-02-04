// dependencies
const express = require('express')
const baker = express.Router()
const Baker = require('../models/baker')
const bakerSeedData = require('../models/baker_seed')


baker.get('/data/seed', function(req, res){

    Baker.insertMany(bakerSeedData).then(res.redirect('/breads'))

})




module.exports = baker;