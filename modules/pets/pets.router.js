const express = require('express');
const json = require('body-parser').json();

const Pets = require('./pets.service');
const People = require('../people/people.service');

const router = express.Router();

router.get('/', (req, res) => {
  res.json(Pets.get())
});

router.delete('/', json, (req, res) => {
  // Remove a pet from adoption.
  const { type } = req.body;
  const typeOfPet = type;

  Pets.dequeue(type)

  res.set(204).end()
});

module.exports = router;
