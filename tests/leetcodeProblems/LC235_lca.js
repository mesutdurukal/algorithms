var lowestCommonAncestor = function (root, p, q) {
    // If the value of root node is greater than the value of p node and less than the value of q node...
    if (root.val > p.val && root.val < q.val) {
        return root;
    }
    // If the value of p node and the q node is less than the value of root node...
    else if (root.val > p.val && root.val > q.val) {
        return lowestCommonAncestor(root.left, p, q);
    }
    // If the value of p node and the q node is greater than the value of root node...
    else if (root.val < p.val && root.val < q.val) {
        return lowestCommonAncestor(root.right, p, q);
    }
    return root;
};
