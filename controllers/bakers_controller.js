// dependencies
const express = require('express')
const baker = express.Router()
const Baker = require('../models/baker')
const bakerSeedData = require('../models/baker_seed')
const { find } = require('../seeds')


// INDEX
baker.get('/',  async (req, res) => {

    // Baker.find().populate('breads').then(foundBakers => res.send(foundBakers))

    const bakers = await Baker.find().populate('breads').exec()

    res.send(bakers)

})

// SHOW
baker.get('/:id', (req, res) => {
    Baker.findById(req.params.id)
    .populate({
        path: 'breads',
        options: {limit: 2}
    })
    .then(foundBaker => {
        res.render('bakerShow', {
            baker: foundBaker
        })
    })
})

baker.get('/data/seed', function(req, res){
    Baker.insertMany(bakerSeedData).then(res.redirect('/breads'))
})

baker.delete('/:id', function(request, response){
    Baker.findByIdAndDelete(request.params.id)
    .then(() => {
        response.status(303).redirect('/breads')
    })
})




module.exports = baker;