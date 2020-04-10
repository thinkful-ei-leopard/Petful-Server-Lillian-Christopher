const Queue = require('../queue/Queue');
const store = require('../../store');

// Set up initial data.
// --------------------

const pets = {
  cats: new Queue(),
  dogs: new Queue()
};

store.cats.forEach(cat => pets.cats.enqueue(cat));
store.dogs.forEach(dog => pets.dogs.enqueue(dog));

// --------------------

module.exports = {
  get() {
    pets.cats = pets.cats.all()
    pets.dogs = pets.dogs.all()

    return pets
  },

  dequeue(type) {
    pets[`${type}s`].dequeue();
  }
};

console.log(pets['dogs'])