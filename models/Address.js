const mongoose = require('mongoose')
const addressSchema = new mongoose.Schema({
  street: {
    type: String,
    required: true
  },
  cep: {
    type: String,
    required: true
  },
  neighborhood: {
    type: String,
    default: true
  },
  city: {
    type: String,
    default: true
  },
  uf: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'State'
  },
})

module.exports = mongoose.model('Address', addressSchema)
