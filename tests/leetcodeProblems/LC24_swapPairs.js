function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
    if (head == null) return null;
    if (head.next == null) return head;
    let currentNode = head;
    let lastEnd;
    while (currentNode != null && currentNode.next != null) {
        let nextNode = currentNode.next;
        let nextNextNode = nextNode.next;
        nextNode.next = null;
        currentNode.next = null;
        nextNode.next = currentNode;
        if (lastEnd != null) lastEnd.next = nextNode;
        lastEnd = currentNode;
        if (currentNode == head) {
            head = nextNode;
        }
        currentNode = nextNextNode;
    }
    if (currentNode != null) {
        lastEnd.next = currentNode;
    }
    return head;
};

let node4 = new ListNode(4, undefined);
let node3 = new ListNode(3, node4);
let node2 = new ListNode(2, node3);
let head = new ListNode(1, node2);
swapPairs(head);
