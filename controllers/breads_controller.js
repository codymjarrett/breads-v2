const express = require('express')
const breads = express.Router()

const Bread = require('../models/bread.js')


// INDEX
breads.get('/', (req, res) => {
    res.render('index', {breads: Bread, title: 'Index Page'})
//   res.send(Bread)
})

// SHOW
breads.get('/:arrayIndex', (req, res) => {
    // res.send(Bread[req.params.arrayIndex])
    const breadIndex = req.params.arrayIndex;
    const currentBread = Bread[breadIndex];

    if(!currentBread){ // falsy
      res.render('error404')
    } else {
      res.render('Show', {
        bread: currentBread
      })
    }
})
  

module.exports = breads
