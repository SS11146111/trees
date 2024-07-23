class TreeNode{
    constructor(data)
    {
        this.data=data;
        this.left=null;
        this.right=null;
    }
}

let root=new TreeNode(16)
root.left=new TreeNode(5)
root.right=new TreeNode(4)
root.left.left=new TreeNode(3)
root.left.right=new TreeNode(1)
root.right.left=new TreeNode(8)
root.right.right=new TreeNode(7)

console.log(root)