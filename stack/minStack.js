class MinStack {
  constructor() {
    this.stack = [];
    this.minStack = [];
  }

  push(value) {
    this.stack.push(value);
    const currMin = this.getMin();
    let newMin = currMin || value;

    if (currMin && value < currMin) {
      newMin = value;
    }

    this.minStack.push(newMin);
  }

  pop() {
    this.minStack.pop();

    return this.stack.pop();
  }

  top() {
    return this.stack[this.stack.length - 1];
  }

  getMin() {
    return this.minStack[this.minStack.length - 1];
  }
}

const minStack = new MinStack();

minStack.push(-2);
minStack.push(0);
minStack.push(-3);

console.log('after pushes: ', minStack);

console.log(minStack.getMin()); // return -3

console.log(minStack.pop());

console.log('after pop: ', minStack);
console.log(minStack.top()); // return 0
console.log(minStack.getMin()); // return -2
