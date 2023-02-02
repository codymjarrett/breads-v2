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

// Instance helper methods 
breadSchema.methods.getBakedBy = function(){
  return `${this.name} was baked with love by ${this.baker}`
}

// Static helper method

// breadSchema.static.getBreadsByBaker = function(bakerName){
//   return this.find({baker: bakerName})
// }

breadSchema.static('getBreadsByBaker', function(bakerName){
  return this.find({baker: bakerName})
}) 

const Bread = mongoose.model('Bread', breadSchema)


module.exports = Bread