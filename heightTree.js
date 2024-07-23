class TreeNode{
    constructor(data)
    {
        this.data=data;
        this.left=null;
        this.right=null;
    }
}

//finding the height of a tree
function height(node)
{
    if(node==null)
        return 0

    let leftHeight = height(node.left);
    let rightHeight = height(node.right);

    let heightT=Math.max(leftHeight,rightHeight)+1
    return heightT;

}

let root=new TreeNode(1)
root.left=new TreeNode(2)
root.right=new TreeNode(3)
root.left.left=new TreeNode(4)
root.left.right=new TreeNode(5)
root.right.left=new TreeNode(6)
root.right.right=new TreeNode(7)

console.log(height(root))