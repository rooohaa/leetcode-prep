//  Definition for a binary tree node.

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

var sortedArrayToBST = function (nums) {
  if (!nums.length) return null

  return constructTree(nums, 0, nums.length - 1)
}

function constructTree(nums, left, right) {
  if (left > right) return null

  const mid = Math.floor((left + right) / 2)
  const root = new TreeNode(nums[mid])

  root.left = constructTree(nums, left, mid - 1)
  root.right = constructTree(nums, mid + 1, right)

  return root
}

console.log(sortedArrayToBST([-10, -3, 0, 5, 9]))
