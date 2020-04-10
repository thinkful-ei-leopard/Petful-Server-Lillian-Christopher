const Queue = require('../queue/Queue')
const store = require('../../store')

// Set up initial data.
// --------------------

const people = new Queue()
store.people.forEach(person => people.enqueue(person))

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
    display(people)
  },

  enqueue(person) {
    people.enqueue(person)
  },

  dequeue() {
    people.dequeue()
  }
}
