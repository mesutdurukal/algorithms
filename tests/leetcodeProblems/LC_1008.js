/**
 * Definition for a binary tree node.
 */
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
const bstFromPreorder = (preorder) => {
    // base cases
    if (preorder.length === 0) return null;
    if (preorder.length === 1) return new TreeNode(preorder[0]);

    // result tree node
    var res = new TreeNode(preorder[0]);

    // iterate from 1 to n
    for (let i = 1; i < preorder.length; i++) {
        // insert this num
        res = insert(res, preorder[i]);
    }

    return res;
};

/**
 * recursive func to insert value into tree
 * @param {TreeNode} root
 * @param {number} val val to insert
 * @return {TreeNode} altered node
 */
const insert = (root, val) => {
    // base
    if (root === null) return new TreeNode(val);

    // compare value between val and root
    if (val < root.val) {
        // insert in left subtree
        root.left = insert(root.left, val);
    } else {
        // insert in right subtree
        root.right = insert(root.right, val);
    }

    // return root w/ val inserted
    return root;
};
