class Node {
    constructor(val) {
        this.value = val;
        this.left = null;
        this.right = null;
    }
}

class bst {
    constructor() {
        this.root = null;
    }

    DFS_inorder() {
        // Deep First - In order
        let results = [];
        function traverse(node) {
            if (node.left) traverse(node.left);
            results.push(node.value);
            if (node.right) traverse(node.right);
        }
        traverse(this.root);
        return results;
    }

    DFS_postorder() {
        // Deep First - Post order
        let results = [];
        function traverse(node) {
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
            results.push(node.value);
        }
        traverse(this.root);
        return results;
    }

    DFS_preorder() {
        // Deep First - Pre order
        let results = [];
        function traverse(node) {
            results.push(node.value);
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
        }
        traverse(this.root);
        return results;
    }

    BFS() {
        // Breadth-First Search
        let currentNode = this.root;
        let results = [];
        let queue = [];
        queue.push(currentNode);

        while (queue.length) {
            currentNode = queue.shift();
            results.push(currentNode.value);
            if (currentNode.left) queue.push(currentNode.left);
            if (currentNode.right) queue.push(currentNode.right);
        }
        return results;
    }

    contains(val) {
        //scan top down and in each iteration decide the value is on the left or right
        let currentNode = this.root;
        while (true) {
            if (!currentNode) return false;
            if (val == currentNode.value) return true;
            if (val < currentNode.value) currentNode = currentNode.left;
            else currentNode = currentNode.right;
        }
    }

    minimum() {
        let currentNode = this.root;
        while (currentNode.left) {
            currentNode = currentNode.left;
        }
        return currentNode.value;
    }

    insert(val) {
        let newNode = new Node(val);
        if (!this.root) {
            this.root = newNode;
            return this;
        }
        let currentNode = this.root;
        while (currentNode) {
            if (newNode.value < currentNode.value) {
                if (!currentNode.left) {
                    currentNode.left = newNode;
                    return this;
                }
                currentNode = currentNode.left;
            } else if (newNode.value > currentNode.value) {
                if (!currentNode.right) {
                    currentNode.right = newNode;
                    return this;
                }
                currentNode = currentNode.right;
            } // equal
            else return undefined;
        }
    }
}

let myBst = new bst();
myBst.insert(47);
myBst.insert(21);
myBst.insert(76);
myBst.insert(18);
myBst.insert(52);
myBst.insert(82);
console.log(myBst.contains(76));
console.log(myBst.contains(81));
console.log(myBst.minimum());
console.log(myBst.BFS());
console.log(myBst.DFS_preorder());
console.log(myBst.DFS_postorder());
console.log(myBst.DFS_inorder());
