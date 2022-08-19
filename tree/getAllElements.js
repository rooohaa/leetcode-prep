/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {number[]}
 */
var getAllElements = function (root1, root2) {
  let arr1 = DFS(root1);
  let arr2 = DFS(root2);
  let res = [...arr1, ...arr2].sort((a, b) => a - b);
  return res;
};

function DFS(tree) {
  const arr = [];

  function traverse(node) {
    if (!node) return;

    arr.push(node.val);
    if (node.left) traverse(node.left);
    if (node.right) traverse(node.right);
  }

  traverse(tree);

  return arr;
}
