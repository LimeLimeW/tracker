const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let tacheSchema = new Schema({
  name: {
    type: String
  },
  description: {
    type: String
  }
}, {
    collection: 'taches'
  })

module.exports = mongoose.model('Tache', tacheSchema)