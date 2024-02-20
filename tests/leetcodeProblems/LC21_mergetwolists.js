import { LinkedList } from '../datatypes/linkedlists.js';
function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}
var mergeTwoLists_ = function (list1, list2) {
    let left = list1;
    let right = list2;
    let head;
    if (!left && !right) return null;
    else if (!left) return list2;
    else if (!right) return list1;
    if (left.value < right.value) {
        head = right;
        right = right.next;
    } else {
        head = left;

        left = left.next;
    }
    let currentNode = head;
    while (left || right) {
        if (!right || left.value < right.value) {
            currentNode.next = left;
            currentNode = left;
            left = left.next;
        } else {
            currentNode.next = right;
            currentNode = right;
            right = right.next;
        }
    }
    return head;
};

var mergeTwoLists = function (list1, list2) {
    if (!list1 || !list2) return list1 || list2;
    if (list1.val < list2.val) {
        return new ListNode(list1.val, mergeTwoLists(list1.next, list2));
    }
    return new ListNode(list2.val, mergeTwoLists(list1, list2.next));
};
let myLinkedList = new LinkedList(1);
myLinkedList.push(2);
myLinkedList.push(4);
let myLinkedList2 = new LinkedList(1);
myLinkedList2.push(3);
myLinkedList2.push(4);
mergeTwoLists(myLinkedList.head, myLinkedList2.head);
//mergeTwoLists(null, null);
