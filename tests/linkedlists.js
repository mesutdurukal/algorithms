const node = (val) => {
    return {
        value: val,
        next: null,
    };
};

class LinkedList {
    constructor(val) {
        const newNode = node(val);
        this.head = newNode;
        this.tail = newNode;
        this.length = 1;
    }

    push(val) {
        const newNode = node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop() {
        if (this.length == 0) {
            return undefined;
        } else if (this.length == 1) {
            this.head = null;
            this.tail = null;
        } else {
            let currentNode = this.head;
            while (currentNode.next) {
                if (currentNode.next == this.tail) {
                    this.tail = currentNode;
                    this.tail.next = null;
                } else currentNode = currentNode.next;
            }
        }
        this.length--;
        return this;
    }

    shift() {
        if (this.length == 0) {
            return undefined;
        } else if (this.length == 1) {
            this.head = null;
            this.tail = null;
        } else {
            let currentNext = this.head.next;
            this.head.next = null; //even without this line, it works. it means head will have a back link. but who cares
            this.head = currentNext;
        }
        this.length--;
        return this;
    }

    unshift(val) {
        const newNode = node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            const exHead = this.head;
            this.head = newNode;
            this.head.next = exHead;
        }
        this.length++;
        return this;
    }

    insert(index, value) {
        let nNode = node(value);
        let cNode = this.get(index);
        const prevNext = cNode.next;
        cNode.next = nNode;
        nNode.next = prevNext;
        this.length++;
        return this;
    }

    remove(index) {
        if (index == 0) {
            this.head = this.get(1);
        } else {
            this.get(index - 1).next = this.get(index + 1);
        }
        this.length--;
    }

    set(index, val) {
        let cNode = this.head;
        for (let i = 0; i < index; i++) {
            cNode = cNode.next;
        }
        cNode.value = val;
    }

    get(index) {
        let cNode = this.head;
        for (let i = 0; i < index; i++) {
            cNode = cNode.next;
        }
        //console.log('Node in ' + index + ' is: ' + cNode.value);
        return cNode;
    }

    reverse_() {
        for (let i = this.length - 1; i > 0; i--)
            this.get(i).next = this.get(i - 1);

        const prevhead = this.head;
        this.head = this.tail;
        this.tail = prevhead;
        this.tail.next = null;
    }

    reverse() {
        let prevHead = this.head;
        this.head = this.tail;
        this.tail = prevHead;

        let curr = prevHead;
        let prev = null;
        let next;
        for (let i = 0; i < this.length; i++) {
            next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
    }
    findKthFromEnd(k) {
        let slow = this.head;
        let fast = this.head;

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
    }

    findKthFromEnd_(k) {
        let len = this.getLength();
        if (k > len) return null;
        let index = len - k;
        let currNode = this.head;
        for (let i = 0; i < index; i++) {
            console.log(currNode.value);
            currNode = currNode.next;
        }
        console.log(k + ' from end is: ' + currNode.value);
        return currNode;
    }

    hasLoop() {
        let slow = this.head;
        let fast = this.head;
        while (fast !== null && fast.next !== null) {
            slow = slow.next;
            fast = fast.next.next;
            if (slow === fast) {
                return true;
            }
        }
        return false;
    }

    hasLoop() {
        if (!this.head)
            // empty
            return false;
        if (this.head == this.tail)
            // length is 1
            return false;
        let temp = this.head;
        while (temp != this.tail) {
            let next = temp.next;
            while (next) {
                if (next === this.tail && next.next) {
                    console.log('Loop in tail');
                    return true;
                } else if (next.next == temp) {
                    console.log('Loop in the middle');
                    return true;
                }
                next = next.next;
            }
            temp = temp.next;
        }
        console.log('No loop');
        return false;
    }

    hasLoop_() {
        // this method changes the original list: not allowed!
        let temp = this.head;
        let next;
        let secondNext;
        if (!temp) {
            console.log('List is empty');
            return false;
        }
        while (temp.next) {
            // temp is not tail yet
            next = temp.next;
            temp.next = null;
            secondNext = next.next;
            console.log('temp: ' + temp.value);
            if (!secondNext) {
                // next is tail
                if (next.next) {
                    console.log('Tail has a next.');
                    return true;
                } else {
                    console.log(
                        'Current value: ' + temp.value + '. Next is tail'
                    );
                    return false;
                }
            }
            if (secondNext == this.tail) {
                // second next is tail
                if (secondNext.next) {
                    console.log('Tail has a next.');
                    return true;
                } else {
                    console.log(
                        'Current value: ' + temp.value + '. Second Next is tail'
                    );
                    return false;
                }
            } else {
                if (secondNext.next !== this.tail && !secondNext.next.next) {
                    return true; // node next to secondNext is not tail but next is empty
                }
            }
            temp = next;
        }
        return false;
    }

    getLength() {
        let i = 0;
        let temp = this.head;
        while (temp !== null) {
            i++;
            temp = temp.next;
        }
        return i;
    }

    findMiddleNode_() {
        let midCnter = Math.floor(this.getLength() / 2);
        let midNode = this.get(midCnter);
        console.log('Middle node: ' + midNode.value);
        return midNode;
    }

    findMiddleNode() {
        let slow = this.head;
        let fast = this.head;
        while (fast !== null && fast.next !== null) {
            slow = slow.next;
            fast = fast.next.next;
        }
        return slow;
    }

    printList() {
        console.log('Linked List:');
        let temp = this.head;
        while (temp !== null) {
            console.log(temp.value);
            temp = temp.next;
        }
    }

    getHead() {
        if (this.head === null) {
            console.log('Head: null');
        } else {
            console.log('Head: ' + this.head.value);
        }
    }

    getTail() {
        if (this.tail === null) {
            console.log('Tail: null');
        } else {
            console.log('Tail: ' + this.tail.value);
        }
    }

    partitionList(x) {
        if (this.head === null) return;

        const dummy1 = node(0);
        const dummy2 = node(0);
        let prev1 = dummy1;
        let prev2 = dummy2;
        let current = this.head;

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

        this.head = dummy1.next;
    }

    partitionList_(x) {
        let firstSeperatedNode = null;
        let lastSeperatedNode = null;

        let nodeUnderCheckPrev = null;
        let nodeUnderCheck = this.head;

        for (let i = 0; i < this.length; i++) {
            console.log('Under check: ' + nodeUnderCheck.value);
            if (nodeUnderCheck.value >= x) {
                console.log('Check positive: ' + nodeUnderCheck.value);
                if (firstSeperatedNode)
                    console.log(
                        'firstSeperatedNode1: ' + firstSeperatedNode.value
                    );
                if (lastSeperatedNode)
                    console.log(
                        'lastSeperatedNode1: ' + lastSeperatedNode.value
                    );
                if (firstSeperatedNode) {
                    if (lastSeperatedNode) {
                        lastSeperatedNode.next = nodeUnderCheck;
                        lastSeperatedNode = nodeUnderCheck;
                    } else {
                        lastSeperatedNode = nodeUnderCheck;
                        firstSeperatedNode.next = lastSeperatedNode;
                    }
                } else firstSeperatedNode = nodeUnderCheck;

                if (nodeUnderCheck == this.head)
                    this.head = nodeUnderCheck.next;
                else nodeUnderCheckPrev.next = nodeUnderCheck.next;
                if (firstSeperatedNode)
                    console.log(
                        'firstSeperatedNode2: ' + firstSeperatedNode.value
                    );
                if (lastSeperatedNode)
                    console.log(
                        'lastSeperatedNode2: ' + lastSeperatedNode.value
                    );
            } else nodeUnderCheckPrev = nodeUnderCheck;
            nodeUnderCheck = nodeUnderCheck.next;
        }
        this.printList();
        lastSeperatedNode.next = null;
        nodeUnderCheckPrev.next = firstSeperatedNode;
        return this;
    }

    removeDuplicates() {
        let nodeUnderCheck = this.head;
        let index = 0;
        while (nodeUnderCheck) {
            for (let i = 0; i < index; i++) {
                if (this.get(i).value === nodeUnderCheck.value) {
                    this.remove(index);
                    index--;
                }
            }
            nodeUnderCheck = nodeUnderCheck.next;
            index++;
        }
    }

    reverseBetween(start, end) {
        if (start >= end) {
            return this;
        } else {
            if (start < 0) {
                start = 0;
            }
            if (end > this.length) {
                end = this.length;
            }
        }
        let nextAfterReverseZone = this.get(end + 1);
        for (let index = 0; index < end - start; index++) {
            if (start + index === 0) {
                let targetNext = this.head;
                let nodeToMove = this.get(end); // (start-1+length-index)
                nodeToMove.next = targetNext;
                this.head = nodeToMove;
            } else {
                let target = this.get(start - 1 + index);
                let targetNext = target.next;
                let nodeToMove = this.get(end); // (start-1+length-index)
                target.next = nodeToMove;
                nodeToMove.next = targetNext;
            }
        }

        this.get(end).next = nextAfterReverseZone;
        this.tail = this.get(this.length - 1);
        return this;
    }
}

function test() {
    let myLinkedList = new LinkedList(4);
    myLinkedList.push(5);
    myLinkedList.push(6);
    myLinkedList.push(12);
    myLinkedList.push(4);
    myLinkedList.pop();
    myLinkedList.unshift(2);
    myLinkedList.shift();
    myLinkedList.get(2);
    myLinkedList.insert(2, 112);
    myLinkedList.set(0, 33);
    myLinkedList.findMiddleNode();
    myLinkedList.remove(1);
    myLinkedList.findMiddleNode();
    myLinkedList.printList();
    myLinkedList.reverse();
    myLinkedList.printList();
    myLinkedList.hasLoop();
    //myLinkedList.tail.next = myLinkedList.get(2);
    myLinkedList.hasLoop();

    myLinkedList.getLength();
    myLinkedList.findKthFromEnd(3);
    myLinkedList.push(25);
    myLinkedList.push(40);
    myLinkedList.push(50);
    myLinkedList.push(60);
    myLinkedList.getHead();
    myLinkedList.getTail();
    myLinkedList.reverseBetween(0, 7);
    myLinkedList.getHead();
    myLinkedList.getTail();
    myLinkedList.printList();

    myLinkedList = new LinkedList(3);
    myLinkedList.push(5);
    myLinkedList.push(8);
    myLinkedList.push(5);
    myLinkedList.push(10);
    myLinkedList.push(2);
    myLinkedList.push(1);
    myLinkedList.partitionList(5);
    myLinkedList.printList();

    myLinkedList = new LinkedList(1);
    myLinkedList.push(2);
    myLinkedList.push(3);
    myLinkedList.push(3);
    myLinkedList.push(4);
    myLinkedList.push(5);
    myLinkedList.push(5);
    myLinkedList.removeDuplicates();
    myLinkedList.printList();

    myLinkedList = new LinkedList(1);
    myLinkedList.push(1);
    myLinkedList.push(1);
    myLinkedList.push(1);
    myLinkedList.push(3);
    myLinkedList.push(3);
    myLinkedList.push(4);
    myLinkedList.push(5);
    myLinkedList.push(5);
    myLinkedList.removeDuplicates();
    myLinkedList.printList();

    myLinkedList = new LinkedList(1);
    myLinkedList.push(2);
    myLinkedList.push(3);
    myLinkedList.push(2);
    myLinkedList.push(1);
    myLinkedList.push(4);
    myLinkedList.removeDuplicates();
    myLinkedList.printList();
}

test();
