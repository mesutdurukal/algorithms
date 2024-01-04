const newNode = (value) => {
    return {
        value: value,
        prev: null,
        next: null,
    };
};

class DoublyLinkedLists {
    constructor(number) {
        const n = newNode(number);
        this.head = n;
        this.tail = n;
        this.length = 1;
    }

    printList() {
        let currentNode = this.head;
        while (currentNode) {
            console.log(currentNode.value);
            currentNode = currentNode.next;
        }
    }

    get(index) {
        if (index >= this.length || index < 0) {
            return null;
        } else {
            let currentNode = this.head;
            for (let i = 0; i < index; i++) {
                currentNode = currentNode.next;
            }
            return currentNode;
        }
    }

    remove(index) {
        let removedNode;
        if (index < 0 || index >= this.length) {
            return false;
        } else if (index == 0) {
            removedNode = this.head;
            this.shift();
        } else if (index == this.length - 1) {
            removedNode = this.tail;
            this.pop();
        } else {
            const prevNod = this.get(index - 1);
            const currentNode = prevNod.next;
            const nextNode = currentNode.next;
            removedNode = currentNode;

            //index-1 -> next: next node
            prevNod.next = nextNode;

            // new node.next = index
            currentNode.next = null;

            // backward bindings: index and new nod
            currentNode.prev = null;
            nextNode.prev = prevNod;

            //length
            this.length--;
        }
        return removedNode;
    }

    insert(index, value) {
        if (index < 0 || index > this.length) {
        } else if (index == 0) {
            this.unshift(value);
        } else if (index == this.length) {
            this.push(value);
        } else {
            const newNod = newNode(value);
            const prevNod = this.get(index - 1);
            const nextNode = prevNod.next;

            //index-1 -> next: new node
            prevNod.next = newNod;

            // new node.next = index
            newNod.next = nextNode;

            // backward bindings: index and new nod
            newNod.prev = prevNod;
            nextNode.prev = newNod;

            //length
            this.length++;
        }
    }

    set(index, value) {
        const nod = this.get(index);
        if (nod) nod.value = value;
    }

    getHead() {
        return this.head;
    }

    getTail() {
        return this.tail;
    }

    addOnTopOfEmpty(value) {
        const newnod = newNode(value);
        this.head = newnod;
        this.tail = newnod;
    }

    // add a new node at the end
    push(value) {
        if (this.head) {
            const newnod = newNode(value);

            // update current tail
            this.tail.next = newnod;

            // backward binding
            newnod.prev = this.tail;

            // set new tail
            this.tail = newnod;
        } else {
            this.addOnTopOfEmpty(value);
        }
        //update length
        this.length++;
    }

    // remove from beginning
    shift() {
        if (this.length == 1) {
            this.head = null;
            this.tail = null;
        } else if (this.length == 2) {
            this.head.next = null;
            this.tail.prev = null;
            this.head = this.tail;
        } else {
            // head.next = null
            const nextNod = this.head.next;
            this.head.next = null;

            // next prev = null
            nextNod.prev = null;

            // head = next
            this.head = nextNod;
        }
        // update length
        this.length--;
    }

    unshift(value) {
        if (this.head) {
            // new node.next = head
            const newnod = newNode(value);
            newnod.next = this.head;

            //head.pev = new node
            this.head.prev = newnod;

            // set head
            this.head = newnod;
        } else {
            this.addOnTopOfEmpty(value);
        }
        //update length
        this.length++;
    }

    // remove the last node
    pop() {
        if (this.length == 1) {
            this.head = null;
            this.tail = null;
        } else if (this.length == 2) {
            this.head.next = null;
            this.tail.prev = null;
            this.tail = this.head;
        } else {
            // set last 2. node next null
            const lastSecondNode = this.tail.prev;
            lastSecondNode.next = null;

            // remove backward binding
            this.tail.prev = null;

            // set last 2. node as tail
            this.tail = lastSecondNode;
        }
        // update length
        this.length--;
    }

    swapFirstLast() {
        if (this.length == 0) {
        } else {
            // get first and last nodes
            let firstNode = this.head;
            let secondNode = firstNode.next;
            let lastNode = this.tail;
            let lastSecondNode = lastNode.prev;

            // update prev and next values
            firstNode.next = null;
            firstNode.prev = lastSecondNode;
            lastNode.prev = null;
            lastNode.next = secondNode;
            secondNode.prev = lastNode;
            lastSecondNode.next = firstNode;

            // update head and tail
            this.head = lastNode;
            this.tail = firstNode;
        }
    }

    reverse() {
        let currentNode = this.head;
        while (currentNode) {
            let prev = currentNode.prev;
            let next = currentNode.next;
            currentNode.next = prev;
            currentNode.prev = next;

            currentNode = next;
        }

        let exHead = this.head;
        this.head = this.tail;
        this.tail = exHead;
    }

    isPalindrome() {
        let midCnt = this.length / 2;
        let leftSide = this.head;
        let rightSide = this.tail;
        for (let i = 0; i < midCnt; i++) {
            if (leftSide.value != rightSide.value) return false;
            leftSide = leftSide.next;
            rightSide = rightSide.prev;
        }
        return true;
    }

    swapPairs() {
        if (this.length > 1) {
            let secondHalf = this.head.next;
            let firstHalf;
            let beforePair;
            let afterPair;
            while (secondHalf) {
                firstHalf = secondHalf.prev;
                beforePair = firstHalf.prev;
                afterPair = secondHalf.next;

                if (beforePair) beforePair.next = secondHalf;
                firstHalf.next = afterPair;
                firstHalf.prev = secondHalf;
                secondHalf.prev = beforePair;
                secondHalf.next = firstHalf;
                if (afterPair) afterPair.prev = firstHalf;

                if (firstHalf == this.head) this.head = secondHalf;
                if (secondHalf == this.tail) this.tail = firstHalf;
                if (afterPair) secondHalf = afterPair.next;
                else secondHalf = null;
            }
        }
    }
}

console.log('Create a new list');
a = new DoublyLinkedLists(5);
a.printList();
console.log('POP');
a.pop();
a.printList();
console.log('PUSH');
a.push(3);
a.printList();
console.log('Unshift');
a.unshift(8);
a.printList();
console.log('2 pops');
a.pop();
a.pop();
a.printList();
console.log('Unshift');
a.unshift(822);
a.printList();
console.log('3 Push');
a.push(2);
a.push(22);
a.push(2222);
a.printList();
console.log('shift');
a.shift();
a.printList();
console.log('set');
a.set(2, 3);
a.set(-1, 3);
a.printList();
console.log('insert');
a.insert(0, 1);
a.insert(-1, 3);
a.insert(99, 0);
a.insert(0, 5);
a.insert(1, 1111);
a.printList();
console.log('remove');
a.remove(0);
a.remove(-1);
a.remove(99);
a.remove(0);
a.remove(1);
a.printList();
console.log('head: ' + a.getHead().value);
console.log('tail: ' + a.getTail().value);
console.log('reverse');
a.reverse();
a.printList();
a.push(33);
console.log('swapPairs');
a.swapPairs();
a.printList();
console.log('Features');
console.log('head: ' + a.getHead().value);
console.log('tail: ' + a.getTail().value);
console.log('length: ' + a.length);
