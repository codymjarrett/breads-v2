// require mongoose 
const mongoose = require('mongoose')

// creating shorthand for the Schema constructor 
const { Schema } = mongoose 


const bakerSchema = Schema({
    name: {
        type: String, 
        required: true, 
        enum: ['Rachel', 'Monica', 'Chandler', 'Joey', 'Ross', 'Phoebe']
    },
    startDate: {type: Date, required: true},
    bio: {type: String},


})

const Baker = mongoose.model('Baker', bakerSchema)

module.exports = Baker