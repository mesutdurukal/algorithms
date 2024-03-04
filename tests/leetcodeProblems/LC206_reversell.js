function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
    if (head === null) {
        return head;
    }

    let current = head;
    let previous = null;

    while (current !== null) {
        let temp = current.next;
        current.next = previous;
        previous = current;
        current = temp;
    }

    return previous;
};

reverseList(
    new ListNode(
        1,
        new ListNode(
            1,
            new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
        )
    )
);
