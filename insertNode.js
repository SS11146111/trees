class TreeNode{
    constructor(key)
    {
        this.key=key;
        this.left=null;
        this.right=null;
    }
}

var root = null;

function insert(data)
{
    root = insertRec(root,data)
}

function insertRec(root, data)
{
    if(root==null)
    {
        root=new TreeNode(data);
        return root
    }

    if(data<root.key)
    {
        root.left=insertRec(root.left,data)
    }
    else if(data>root.key)
    {
        root.right=insertRec(root.right,data)
    }

    return root;
}

function inorder(node)
{
    if(node==null)
        return
    
    inorder(node.left);
    console.log(node.key);
    inorder(node.right);
 
}

insert(50)
insert(40)
insert(45)
insert(55)
insert(60)

inorder(root)

//TC: best case: O(logn) ; worst case: O(n)