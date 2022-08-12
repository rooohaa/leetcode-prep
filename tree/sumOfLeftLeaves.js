/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function (root) {
  let sum = 0

  function traverse(node, isLeft) {
    if (!node.right && !node.left && isLeft) {
      sum += node.val
    }

    if (node.left) traverse(node.left, true)
    if (node.right) traverse(node.right, false)
  }

  traverse(root)

  return sum
}
