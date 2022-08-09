class Node {
  constructor(val, left = null, right = null) {
    this.val = val
    this.left = left
    this.right = right
  }
}

class BST {
  constructor() {
    this.root = null
  }

  insert(val) {
    const newNode = new Node(val)

    if (!this.root) {
      this.root = newNode
      return this
    }

    let current = this.root

    while (true) {
      if (val === current.val) return undefined

      if (val < current.val) {
        if (!current.left) {
          current.left = newNode
          return this
        } else {
          current = current.left
        }
      } else if (val > current.val) {
        if (!current.right) {
          current.right = newNode
          return this
        } else {
          current = current.right
        }
      }
    }
  }

  find(val) {
    if (!this.root) return false

    let current = this.root
    let found = false

    while (current && !found) {
      if (val < current.val) {
        current = current.left
      } else if (val > current.val) {
        current = current.right
      } else {
        found = true
      }
    }

    if (!found) return false

    return current
  }
}

const tree = new BST()
