function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists_ = function (lists) {
    let currentNodes = [];

    for (let i = 0; i < lists.length; i++) {
        if (lists[i] != null && lists[i].length != 0)
            currentNodes.push(lists[i]);
    }

    if (
        currentNodes.length == 0 ||
        (currentNodes.length == 1 && currentNodes[0] == null)
    ) {
        return null;
    }

    let head = null;
    let newNode = null;
    while (currentNodes.length) {
        currentNodes.sort((a, b) => a.val - b.val);
        let minNode = currentNodes[0];
        if (newNode == null) {
            head = minNode;
            newNode = minNode;
        } else {
            newNode.next = minNode;
            newNode = minNode;
        }

        if (minNode.next) currentNodes[0] = minNode.next;
        else {
            currentNodes.shift();
        }
    }
    return head;
};

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
    if (!l1) {
        return l2;
    }
    if (!l2) {
        return l1;
    }
    if (l1.val < l2.val) {
        l1.next = mergeTwoLists(l1.next, l2);
        return l1;
    } else {
        l2.next = mergeTwoLists(l1, l2.next);
        return l2;
    }
};

var mergeKLists = function (lists) {
    let ans = lists[0];
    for (let i = 1; i < lists.length; i++) {
        ans = mergeTwoLists(ans, lists[i]);
    }
    return ans;
};

mergeKLists([[]]);
mergeKLists([]);
mergeKLists([[], []]);
mergeKLists([
    new ListNode(1, new ListNode(4, new ListNode(5))),
    new ListNode(1, new ListNode(3, new ListNode(4))),
    new ListNode(6, new ListNode(6)),
]);
