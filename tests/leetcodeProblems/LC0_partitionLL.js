import { LinkedList } from '../datatypes/linkedlists.js';
import { node } from '../datatypes/linkedlists.js';

const partitionList = (myLinkedList, x) => {
    if (myLinkedList.head === null) return;

    const dummy1 = node(0);
    const dummy2 = node(0);
    let prev1 = dummy1;
    let prev2 = dummy2;
    let current = myLinkedList.head;

    while (current !== null) {
        if (current.value < x) {
            prev1.next = current;
            prev1 = current;
        } else {
            prev2.next = current;
            prev2 = current;
        }
        current = current.next;
    }

    prev2.next = null;
    prev1.next = dummy2.next;

    myLinkedList.head = dummy1.next;
    return myLinkedList;
};

let myLinkedList = new LinkedList(4);
myLinkedList.push(5);
myLinkedList.push(6);
myLinkedList.push(12);
myLinkedList.push(4);
myLinkedList.unshift(2);
myLinkedList.insert(2, 112);
myLinkedList.printList();
partitionList(myLinkedList, 5).printList();
