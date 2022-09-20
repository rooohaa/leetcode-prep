# Definition for a binary tree node.
class TreeNode:
  def __init__(self, val=0, left=None, right=None):
    self.val = val
    self.left = left
    self.right = right

tree = TreeNode(5)
tree.left = TreeNode(3)
tree.left.left = TreeNode(2)
tree.left.right = TreeNode(4)

tree.right = TreeNode(6)
tree.right.right = TreeNode(7)

def findTarget(root, k):
  if not root:
    return False

  seen = set()
  stack = [root]

  while stack:
    curr = stack.pop()
    possible_res = k - curr.val

    if possible_res in seen:
      return True

    seen.add(curr.val)

    if curr.left:
      stack.append(curr.left)
    if curr.right:
      stack.append(curr.right)

  return False

print(findTarget(tree, 9))
