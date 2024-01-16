import { LinkedList } from '../datatypes/linkedlists.js';

const findKthFromEnd = (ll, k) => {
    let slow = ll.head;
    let fast = ll.head;

    for (let i = 0; i < k; ++i) {
        if (fast === null) {
            return null;
        }
        fast = fast.next;
    }

    while (fast !== null) {
        slow = slow.next;
        fast = fast.next;
    }

    return slow;
};

let myLinkedList = new LinkedList(4);
myLinkedList.push(5);
myLinkedList.push(6);
myLinkedList.push(12);
myLinkedList.push(4);
myLinkedList.unshift(2);
myLinkedList.insert(2, 112);
myLinkedList.printList();
console.log(findKthFromEnd(myLinkedList, 3));
