const express = require('express')
const breads = express.Router()

const Bread = require('../models/bread.js')


// INDEX
breads.get('/', (req, res) => {
    res.render('index', {breads: Bread, title: 'Index Page'})
//   res.send(Bread)
})


// CREATE
breads.post('/', (req, res) => {
  if (!req.body.image) {
    req.body.image = 'https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
  }

  // if(!req.body.name){

  // }

  if(req.body.hasGluten === 'on') {
    req.body.hasGluten = true
  } else {
    req.body.hasGluten = false
  }
  Bread.push(req.body)
  res.redirect('/breads')
})



// NEW
breads.get('/new', (req, res) => {
  res.render('new')
})

// EDIT
breads.get('/:indexArray/edit', (req, res) => {
  res.render('edit', {
    bread: Bread[req.params.indexArray],
    index: req.params.indexArray
  })
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
        bread: currentBread,
        index: breadIndex
      })
    }
})

// DELETE
breads.delete('/:indexArray', (req, res) => {
  console.log(req.query)
  // start (2) ,  delete count
  Bread.splice(req.params.indexArray, 1)
  res.status(303).redirect('/breads')
})

// UPDATE
breads.put('/:arrayIndex', (req, res) => {
  if(req.body.hasGluten === 'on'){
    req.body.hasGluten = true
  } else {
    req.body.hasGluten = false
  }
  Bread[req.params.arrayIndex] = req.body
  res.redirect(`/breads/${req.params.arrayIndex}`)
})










  

module.exports = breads
