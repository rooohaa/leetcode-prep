var invertTree = function (root) {
  if (!root) {
    return null
  }

  const left = root.left
  const right = root.right

  root.left = right
  root.right = left

  invertTree(left)
  invertTree(right)

  return root
}
