class _Node {
  constructor(value = null, next = null, prev = null) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  } 
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  enqueue(data) {
    const node = new _Node(data);
    if (this.first === null) {
      this.first = node;
    }
    if (this.last) {
      this.last.next = node;
      node.prev = this.last;
    }
    this.last = node;
  }

  dequeue() {
    if(this.first === null){
      return;
    }
    const node =this.first;
    if (node.next === null) {
      this.first = null;
      this.last = null;
      return;
    }
    let newFirst = node.next; //null 
    newFirst.prev = null;
    this.first = newFirst;
    if (node === this.last){
      this.last = null;
    }
    return node.value;
  }

  show() {
    if (this.first === null) {
      return 'Cannot display first item of an empty queue';
    }
    return this.first;
  }

  all() {
    if (this.first === null) {
      return 'Cannot display an empty queue';
    }
    let currNode = this.first;
    let queueString = '';
    while (currNode.next !== null) {
      queueString += `${currNode.value} => `;
      currNode = currNode.next;
    }
    queueString += `${currNode.value}`;
    return queueString;
  }
}

module.exports = Queue;
