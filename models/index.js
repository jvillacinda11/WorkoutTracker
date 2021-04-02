const { model, Schema } = require('mongoose')

module.exports = model('exercise', new Schema({
  day: Date,
  type: String,
  name: String,
  duration: Number,
  weight: Number,
  reps: Number,
  sets: Number
}))