/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
    if ((head == null) || (head.next == null)  || k==0)
        return head
    let firstNode = head;
    let secondNode = firstNode;
    let listLen = 0;
    for (let i = 0; i < k; i++) {
        secondNode = secondNode.next;
        if (secondNode == null) {
            listLen = i + 1;
            break;
        }
    }

    if (listLen > 0) {
        let actualRotate = k % listLen;
        if (actualRotate == 0) return head;
        secondNode = firstNode;
        for (let i = 0; i < actualRotate; i++) {
            secondNode = secondNode.next;
        }
    }

    let kthNode = firstNode;
    while (secondNode.next != null) {
        secondNode = secondNode.next;
        kthNode = kthNode.next;
    }

    let newHead = kthNode.next;
    kthNode.next = null;
    secondNode.next = head;
    return newHead;
};

function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}

rotateRight(
    new ListNode(
        1,
        new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
    ),
    2
);
rotateRight(new ListNode(0, new ListNode(1, new ListNode(2))), 4);
rotateRight(,0);
