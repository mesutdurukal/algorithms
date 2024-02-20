function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}

var addTwoNumbers = function (l1, l2) {
    let t1 = l1;
    let t2 = l2;
    let remainder = 0;
    let lastNode = null;
    let headNode = null;
    while (t1 != null || t2 != null) {
        let val = remainder;
        if (t1 != null) val += t1.val;
        if (t2 != null) val += t2.val;
        remainder = Math.floor(val / 10);
        let nodeF = new ListNode(val - remainder * 10);
        if (lastNode != null) lastNode.next = nodeF;
        else headNode = nodeF;
        lastNode = nodeF;
        if (t1 != null) t1 = t1.next;
        if (t2 != null) t2 = t2.next;
    }
    if (remainder > 0) {
        lastNode.next = new ListNode(remainder);
    }
    return headNode;
};

addTwoNumbers(n11, n21);

let n13 = new ListNode(3);
let n12 = new ListNode(4, n13);
let n11 = new ListNode(2, n12);
let n23 = new ListNode(4);
let n22 = new ListNode(6, n23);
let n21 = new ListNode(5, n22);
