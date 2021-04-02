const { model, Schema} = require('mongoose')

const WorkoutSchema = new Schema({
  date: Date,
  exercises: {
    type: String,
    name: String,
    duration: String,
    weight: String,
    reps: String,
    sets: String
  }
})

module.exports = model('Workout',WorkoutSchema)