import { LinkedList } from '../datatypes/linkedlists.js';

var removeNthFromEnd = function (head, n) {
    if (head.next == null) {
        // Length of LL is 1
        return null;
    }
    let nodeAhead = head;
    for (let i = 0; i < n; i++) {
        nodeAhead = nodeAhead.next;
    }
    let nodeBehind = head;
    if (!nodeAhead) {
        // Remove head
        head = head.next;
        return head;
    }
    while (nodeAhead.next) {
        nodeBehind = nodeBehind.next;
        nodeAhead = nodeAhead.next;
    }

    nodeBehind.next = nodeBehind.next.next;
    return head;
};

let myLinkedList = new LinkedList(1);
myLinkedList.push(2);
/*myLinkedList.push(6);
myLinkedList.push(12);
myLinkedList.push(4);*/
console.log(removeNthFromEnd(myLinkedList.head, 2));
