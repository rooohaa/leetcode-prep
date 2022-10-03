var leafSimilar = function (root1, root2) {
  const first = getLeafValues(root1);
  const second = getLeafValues(root2);

  if (first.length !== second.length) return false;

  for (let i = 0; i < first.length; i++) {
    if (first[i] !== second[i]) {
      return false;
    }
  }

  return true;
};

function getLeafValues(root) {
  const nodes = [];

  function traverse(node) {
    if (!node) {
      return null;
    }

    if (!node.left && !node.right) {
      nodes.push(node.val);
    }

    if (node.left) traverse(node.left);
    if (node.right) traverse(node.right);
  }

  traverse(root);

  return nodes;
}
