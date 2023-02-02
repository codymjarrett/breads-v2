const express = require('express')
const breads = express.Router()
const seeds = require('../seeds')
const Bread = require('../models/bread')


// INDEX
breads.get('/', (req, res) => {
  Bread.find({}, [], {sort: {name: 1}}).then((foundBreads) => {    
    res.render('index', {breads: foundBreads, title: 'Index Page'})
  })
})


// CREATE
breads.post('/', (req, res) => {
  console.log(req.body)
  if (!req.body.image) {
    req.body.image = undefined
  }


  if(req.body.hasGluten === 'on') {
    req.body.hasGluten = true
  } else {
    req.body.hasGluten = false
  }
  Bread.create(req.body)
  res.redirect('/breads')
})



// NEW
breads.get('/new', (req, res) => {
  res.render('new')
})

// EDIT
breads.get('/:id/edit', (req, res) => {

  Bread.findById(req.params.id)
  .then(foundBread => {
    res.render('Edit', {
      bread: foundBread,
    })
  })
  .catch(error =>{
    console.log(error)
    res.render('error404')
  } )

})



// SHOW
breads.get('/:id', (req, res) => {
    Bread.findById(req.params.id)
    .then(foundBread => {
      res.render('Show', {
        bread: foundBread,
      })
    })
    .catch(error =>{
      console.log(error)
      res.render('error404')
    } )

})

// DELETE
breads.delete('/:id', (req, res) => {
 
  Bread.findByIdAndDelete(req.params.id).then(function(deletedBread){
    console.log(deletedBread)
    res.status(303).redirect('/breads')
  })
})

// UPDATE
breads.put('/:id', (req, res) => {
  if(req.body.hasGluten === 'on'){
    req.body.hasGluten = true
  } else {
    req.body.hasGluten = false
  }

  Bread.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true}).then((updatedBread) => {
    res.redirect(`/breads/${req.params.id}`)
  }).catch(error => {
    res.render('GenericError', {
      error
    })
  })
})


// SEED ROUTE
breads.get('/data/seed', (req, res) => {
  Bread.insertMany(seeds)
    .then(createdBreads => {
      res.redirect('/breads')
    })
})











  

module.exports = breads
