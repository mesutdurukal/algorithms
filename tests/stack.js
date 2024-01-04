const node = (val) => {
    return {
        value: val,
        next: null,
    };
};

class stack {
    constructor(val) {
        const newNode = node(val);
        this.top = newNode;
        this.length = 1;
    }

    push(value) {
        const newNode = node(value);
        if (this.length > 0) newNode.next = this.top;

        this.top = newNode;
        this.length++;
    }

    pop() {
        if (this.length == 0) return undefined;
        const extop = this.top;
        const newtop = extop.next;
        extop.next = null;

        this.top = newtop;
        this.length--;
        return extop;
    }

    printStack() {
        let node = this.top;
        while (node) {
            console.log(node.value);
            node = node.next;
        }
    }
}

let newStack = new stack(3);
newStack.push(2);
newStack.printStack();
newStack.pop();
newStack.printStack();
