// require mongoose 
const mongoose = require('mongoose')
// creating shorthand for the Schema constructor 
const { Schema } = mongoose 


const breadSchema = new Schema({
  name: {type: String, required: true},
  hasGluten: Boolean,
  image: {type: String, default: 'https://via.placeholder.com/500'},
  baker: {
    type: String,
    enum: ['Rachel', 'Monica', 'Chandler', 'Joey', 'Ross', 'Phoebe']
  }
})

const Bread = mongoose.model('Bread', breadSchema)

module.exports = Bread