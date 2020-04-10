const Queue = require('../queue/Queue');
const store = require('../../store');

// Set up initial data.
// --------------------

const people = new Queue();
store.people.forEach(person => people.enqueue(person));

// --------------------

module.exports = {
  get() {
    let arrayOfPeople = people.all().split(' => ');
    return arrayOfPeople;
  },

  enqueue(person) {
    people.enqueue(person);
  },

  dequeue() {
    people.dequeue();
  }
};