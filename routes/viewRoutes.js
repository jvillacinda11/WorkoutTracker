const router = require('express').Router()
const { Exercise } = require('../models')

//get all exercises
router.get('/items', (req, res) => Item.find()
  .then(items => res.json(items))
  .catch(err => console.log(err)))

  module.exports = router