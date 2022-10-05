def isUnivalTree(root):
  if not root:
    return False
  
  val = root.val
  stack = [ root ]
  
  while stack:
    curr_node = stack.pop()
    
    if curr_node.val != val:
      return False
    
    if curr_node.left:
      stack.append(curr_node.left)
    if curr_node.right:
      stack.append(curr_node.right)
  return True