function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
    // remove: prev.next = next
    let prev = null;
    let curr = head;
    let shouldRemove = false;
    while (curr && curr.next) {
        if (curr.val == curr.next.val) {
            shouldRemove = true;
        } else {
            if (!shouldRemove) {
                prev = curr;
            } else {
                if (prev != null) prev.next = curr.next;
                else head = curr.next;
            }
            shouldRemove = false;
        }
        curr = curr.next;
    }
    if (shouldRemove) {
        if (prev == null) return [];
        prev.next = null;
    }
    return head;
};

deleteDuplicates(new ListNode(1, new ListNode(1)));
/*deleteDuplicates(
    new ListNode(
        1,
        new ListNode(
            1,
            new ListNode(
                3,
                new ListNode(
                    3,
                    new ListNode(4, new ListNode(4, new ListNode(5)))
                )
            )
        )
    )
);*/
// [1,2,3,3,4,4,5]
