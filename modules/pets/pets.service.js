const Queue = require('../queue/Queue')
const store = require('../../store')

// Set up initial data.
// --------------------

const pets = {
  cats: new Queue(),
  dogs: new Queue()
}

store.cats.forEach(cat => pets.cats.enqueue(cat))
store.dogs.forEach(dog => pets.dogs.enqueue(dog))

// --------------------

function display(queue){
  if (queue.first === null) {
    return 'Cannot display an empty queue';
  }
  let currNode = queue.first;
  let queueString = '';
  while (currNode.next !== null) {
    queueString += `${currNode.value} => `;
    currNode = currNode.next;
  }
  queueString += `${currNode.value}`;
  return queueString;
}

module.exports = {
  get() {
    display(pets.cats)
    display(pets.dogs)
  },

  dequeue(type) {
    pets[`${type}`].dequeue()
  }
}

console.log(pets.cats)