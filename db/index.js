module.exports = require('mongoose').connect('mongodb://localhost/workout', { usenewParse: true, useUnifiedTopology: true, useFindAndModify: false })