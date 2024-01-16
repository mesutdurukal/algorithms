import { LinkedList } from '../datatypes/linkedlists.js';

const hasLoop = (myLinkedList) => {
    let slow = myLinkedList.head;
    let fast = myLinkedList.head;
    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) {
            return true;
        }
    }
    return false;
};

let myLinkedList = new LinkedList(4);
myLinkedList.push(5);
myLinkedList.push(6);
myLinkedList.push(12);
myLinkedList.push(4);
myLinkedList.unshift(2);
myLinkedList.insert(2, 112);
myLinkedList.printList();

myLinkedList.tail.next = myLinkedList.get(2);
console.log(hasLoop(myLinkedList));
