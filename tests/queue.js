const node = (val) => {
    return {
        value: val,
        next: null,
    };
};

class queue {
    constructor(val) {
        const newNode = node(val);
        this.first = newNode;
        this.last = newNode;
        this.length = 1;
    }

    enqueue(value) {
        const newNode = node(value);
        this.last.next = newNode;
        this.last = newNode;
        this.length++;
    }

    get(index) {
        let node = this.first;
        for (let i = 0; i < index; i++) node = node.next;
        return node;
    }

    dequeue() {
        if (this.length == 0) return undefined;
        const exfirst = this.first;
        const newfirst = exfirst.next;
        exfirst.next = null;

        this.first = newfirst;
        this.length--;
        return exfirst;
    }

    printQueue() {
        let node = this.top;
        while (node) {
            console.log(node.value);
            node = node.next;
        }
    }
}

let newQueue = new queue(3);
newQueue.push(2);
newQueue.printQueue();
newQueue.pop();
newQueue.printQueue();
