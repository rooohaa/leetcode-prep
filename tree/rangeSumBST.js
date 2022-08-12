var rangeSumBST = function (root, low, high) {
  let sum = 0

  function traverse(node) {
    if (node.val >= low && node.val <= high) {
      sum += node.val
    }

    if (node.left) traverse(node.left)
    if (node.right) traverse(node.right)
  }

  traverse(root)

  return sum
}

console.log([10, 5, 15, 3, 7, null, 18], 7, 15) // -> 32
