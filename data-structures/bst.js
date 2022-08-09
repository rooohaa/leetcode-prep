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

  bfs() {
    const visited = []
    const queue = []

    queue.push(this.root)

    while (queue.length) {
      const node = queue.shift()
      visited.push(node.val)

      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }

    return visited
  }

  dfsPreOrder() {
    const visited = []
    const current = this.root

    function traverse(node) {
      visited.push(node.val)
      if (node.left) traverse(node.left)
      if (node.right) traverse(node.right)
    }

    traverse(current)

    return visited
  }

  dfsPostOrder() {
    const visited = []
    const current = this.root

    function traverse(node) {
      if (node.left) traverse(node.left)
      if (node.right) traverse(node.right)
      visited.push(node.val)
    }

    traverse(current)

    return visited
  }

  dfsInOrder() {
    const visited = []
    const current = this.root

    function traverse(node) {
      if (node.left) traverse(node.left)
      visited.push(node.val)
      if (node.right) traverse(node.right)
    }

    traverse(current)

    return visited
  }
}

const tree = new BST()
