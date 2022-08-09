class Node {
  constructor(val, next = null) {
    this.val = val
    this.next = next
  }
}

class Stack {
  constructor() {
    this.first = null
    this.last = null
    this.size = 0
  }

  push(val) {
    const newNode = new Node(val)

    if (!this.first) {
      this.first = newNode
      this.last = newNode
    } else {
      const temp = this.first
      this.first = newNode
      this.first.next = temp
    }

    return ++this.size
  }

  pop() {
    if (!this.first) {
      return null
    }

    const temp = this.first
    if (this.first === this.last) {
      this.last = null
    }

    this.first = this.first.next
    this.size -= 1
    return temp.val
  }

  toArray() {
    const items = []
    let current = this.first

    while (current) {
      items.push(current.val)
      current = current.next
    }

    return items
  }
}
