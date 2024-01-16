import { LinkedList } from '../datatypes/linkedlists.js';

const findMiddleNode = (myLinkedList) => {
    let slow = myLinkedList.head;
    let fast = myLinkedList.head;
    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
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
console.log(findMiddleNode(myLinkedList));
