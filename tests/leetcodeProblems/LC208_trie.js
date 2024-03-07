let Node = function () {
    this.children = new Map();
    this.end = false;
    this.setEnd = function () {
        this.end = true;
    };
    this.isEnd = function () {
        return this.end;
    };
};
var Trie = function () {
    this.root = new Node();
};

Trie.prototype.insert = function (word, node = this.root) {
    if (word.length === 0) {
        node.setEnd();
        return;
    } else if (node.children.has(word[0])) {
        return this.insert(word.substr(1), node.children.get(word[0]));
    } else {
        node.children.set(word[0], new Node());
        return this.insert(word.substr(1), node.children.get(word[0]));
    }
};

Trie.prototype.search = function (word, node = this.root) {
    if (word.length === 0) return node.isEnd();
    else if (!node.children.has(word[0])) return false;
    return this.search(word.substr(1), node.children.get(word[0]));
};

Trie.prototype.startsWith = function (prefix, node = this.root) {
    if (prefix.length === 0) return true;
    else if (!node.children.has(prefix[0])) return false;
    return this.startsWith(prefix.substr(1), node.children.get(prefix[0]));
};

var obj = new Trie();
obj.insert('apple');
var param_2 = obj.search('apple');
var param_2 = obj.search('app');
var param_3 = obj.startsWith('app');
obj.insert('app');
var param_2 = obj.search('app');
obj.insert('app');
