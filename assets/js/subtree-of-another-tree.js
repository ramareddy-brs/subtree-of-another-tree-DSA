function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
  }
  
  // Function to check if two trees are identical
  function areIdentical(tree1, tree2) {
    if (!tree1 && !tree2) return true;
    if (!tree1 || !tree2) return false;
  
    return (
      tree1.val === tree2.val &&
      areIdentical(tree1.left, tree2.left) &&
      areIdentical(tree1.right, tree2.right)
    );
  }
  
  // Function to check if subTree is a subtree of tree
  function isSubtree(tree, subTree) {
    if (!tree) return false;
  
    if (areIdentical(tree, subTree)) {
      return true;
    }
  
    return isSubtree(tree.left, subTree) || isSubtree(tree.right, subTree);
  }
  
  
  const root = new TreeNode(3);
  root.left = new TreeNode(4);
  root.right = new TreeNode(5);
  root.left.left = new TreeNode(1);
  root.left.right = new TreeNode(2);
  
  const subRoot = new TreeNode(4);
  subRoot.left = new TreeNode(1);
  subRoot.right = new TreeNode(2);
  
  const output = isSubtree(root, subRoot);
  console.log(output); 