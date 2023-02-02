// DEPENDENCIES
const express = require('express')
const methodOverride = require('method-override')
const mongoose = require('mongoose')

// CONFIGURATION
require('dotenv').config()
const PORT = process.env.PORT
const app = express()



// MIDDLEWARE
app.set('views', __dirname + '/views') //dunder-score
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public')) // setup serving static assets
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))


// ROUTES
app.get('/', (req, res) => {
  res.send('Welcome to an Awesome App about Breads!')
})


// Breads
const breadsController = require('./controllers/breads_controller.js')
app.use('/breads', breadsController)


// 404 Page
app.get('*', function(req, res){
  res.render('error404')
})


mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true, }, () =>{
  console.log(`Connected to mongo:${process.env.MONGO_URI}`)
})

// LISTEN FOR SERVER
app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
})


