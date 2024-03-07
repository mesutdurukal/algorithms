function bstToSortedArray(root) {
    const result = [];
    function inOrderTraversal(node) {
        if (node === null) {
            return;
        }
        inOrderTraversal(node.left, result); // Visit left subtree
        result.push(node.val); // Visit node itself
        inOrderTraversal(node.right, result); // Visit right subtree
    }

    inOrderTraversal(root);
    return result;
}
