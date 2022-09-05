def hasPathSum(root, targetSum):      
  def dfs(node, curr_sum):
    if not node:
      return False
    
    curr_sum += node.val
    
    if not node.left and not node.right:
      return curr_sum == targetSum
    
    return (dfs(node.left, curr_sum) or dfs(node.right, curr_sum))

  return dfs(root, 0)
