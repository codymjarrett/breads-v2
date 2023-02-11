// require mongoose 
const mongoose = require('mongoose')
const breads = require('../controllers/breads_controller')
// creating shorthand for the Schema constructor 
const { Schema } = mongoose 
const fs = require('fs')


const breadSchema = new Schema({
  name: {type: String, required: true},
  hasGluten: Boolean,
  image: {type: String, default: 'https://via.placeholder.com/500'},
  baker: {
    type: Schema.Types.ObjectID,
    ref: 'Baker'
  }
})

// Instance helper methods 
breadSchema.methods.getBakedBy = function(){
  return `${this.name} was baked with love by ${this.baker.name}, 
  who has been with us since ${this.baker.startDate.getFullYear()}`
}

breadSchema.methods.getBakerBio = function(){
  return `Baker Biography: ${this.baker.bio}`
}

// Static helper method

// breadSchema.static.getBreadsByBaker = function(bakerName){
//   return this.find({baker: bakerName})
// }

breadSchema.static('getBreadsByBaker', function(bakerName){
  return this.find({baker: bakerName})
}) 

breadSchema.pre('save', function(){
  fs.writeFile(__dirname + '/text.txt', 'Created a new bread', err => {
    if(err){
      console.log('error')
    }
  })
})

breadSchema.post('save', function(){
  console.log(this)

  fs.writeFile(__dirname + '/text.txt', this.name, err => {
    if(err){
      console.log('error')
    }
  })
})

const Bread = mongoose.model('Bread', breadSchema)


module.exports = Bread