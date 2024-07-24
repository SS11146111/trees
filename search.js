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
insert(50)
insert(40)
insert(45)
insert(55)
insert(60)

function searchNode(root,key)
{
    if(root==null || root.key==key)
    {
        return root;
    }

    if(key<root.key)
    {
        return searchNode(root.left,key)
    }
    else
    {
        return searchNode(root.right,key)
    }
}

const result = searchNode(root, 155)

if(result==null)
    console.log("Not found")
else
    console.log("Found")

    
//TC: best case: O(logn) ; worst case: O(n)