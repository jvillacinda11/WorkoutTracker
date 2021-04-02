const router = require('express').Router()
const { Workout } = require('../models')

//get all exercises
router.get('/Workout', (req, res) => Item.find()
  .then(items => res.json(items))
  .catch(err => console.log(err)))

  module.exports = router