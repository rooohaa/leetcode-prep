class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class LinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  // Push to the end of list
  push(value) {
    const newNode = new Node(value)

    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.tail.next = newNode
      this.tail = newNode
    }

    this.length += 1

    return this
  }

  // Remove last element from list
  pop() {
    if (!this.head) {
      return undefined
    }

    let current = this.head
    let newTail = current

    while (current.next) {
      newTail = current
      current = current.next
    }

    this.tail = newTail
    this.tail.next = null
    this.length -= 1

    if (this.length === 0) {
      this.head = null
      this.tail = null
    }

    return current
  }

  // Remove first element from list
  shift() {
    if (!this.head) {
      return undefined
    }

    const currHead = this.head
    this.head = currHead.next
    this.length -= 1

    if (this.length === 0) {
      this.tail = null
    }

    return currHead
  }

  // Insert at the start of list
  unshift(val) {
    const newNode = new Node(val)

    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      newNode.next = this.head
      this.head = newNode
    }

    this.length += 1

    return this
  }

  // Get item at index
  get(index) {
    if (index < 0 || index >= this.length) {
      return null
    }

    let i = 0
    let current = this.head

    while (i !== index) {
      current = current.next
      i += 1
    }

    return current
  }

  // Set the value of item at index
  set(value, index) {
    const item = this.get(index)

    if (!item) return false

    item.value = value
    return true
  }

  // Insert new node at index
  insert(index, value) {
    if (index < 0 || index > this.length) return false
    if (index === this.length - 1) return !!this.push(value)
    if (index === 0) return !!this.unshift(value)

    const newNode = new Node(value)
    const prev = this.get(index - 1)
    const temp = prev.next

    prev.next = newNode
    newNode.next = temp

    this.length += 1

    return true
  }

  // Remove node at index
  remove(index) {
    if (index < 0 || index >= this.length) {
      return undefined
    }
    if (index === 0) return this.shift()
    if (index === this.length - 1) return this.pop()

    const prevNode = this.get(index - 1)
    const removed = prevNode.next
    prevNode.next = removed.next

    this.length -= 1

    return removed
  }

  // Reverse linked list
  reverse() {
    const node = this.head
    this.head = this.tail
    this.tail = node

    // TODO
  }

  // Make array from linked list
  toArray() {
    const arr = []
    let current = this.head

    while (current) {
      arr.push(current.value)
      current = current.next
    }

    return arr
  }
}
