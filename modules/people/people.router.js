const express = require('express')
const json = require('body-parser').json()

const People = require('./people.service')

const router = express.Router()

router.get('/', (req, res) => {
  res.json(People.get())
})

router.post('/', json, (req, res) => {
  // Add a new person to the queue.
})

module.exports = router
