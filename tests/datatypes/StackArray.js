class Stack {
    constructor() {
        this.stackList = [];
    }

    getStackList() {
        return this.stackList;
    }

    printStack() {
        for (let i = this.stackList.length - 1; i >= 0; i--) {
            console.log(this.stackList[i]);
        }
    }

    isEmpty() {
        return this.stackList.length === 0;
    }

    peek() {
        if (this.isEmpty()) {
            return null;
        } else {
            return this.stackList[this.stackList.length - 1];
        }
    }

    size() {
        return this.stackList.length;
    }

    push(val) {
        this.stackList[this.stackList.length] = val;
    }

    pop() {
        if (this.stackList.length == 0) return null;
        return this.stackList.pop();
    }
}

function reverseString(string) {
    let reversedString = '';
    for (let i = 0; i < string.length; i++) {
        console.log(string[string.length - 1 - i]);
        reversedString += string[string.length - 1 - i];
    }
    return reversedString;
}

function isBalancedParentheses(string) {
    // scan: start from beginning of string to end
    let openP = 0;
    let balancedP = 0;
    for (let i = 0; i < string.length; i++) {
        // ( increments number of open p
        // ) decreases number of open p
        if (string[i] === '(') openP++;
        if (string[i] === ')') {
            if (openP > 0) {
                openP--;
                balancedP++;
            } else return false;
        }
    }
    return openP > 0;
}

function sortStack(stack) {
    const additionalStack = new Stack();

    while (!stack.isEmpty()) {
        const temp = stack.pop();

        while (!additionalStack.isEmpty() && additionalStack.peek() > temp) {
            stack.push(additionalStack.pop());
        }

        additionalStack.push(temp);
    }

    while (!additionalStack.isEmpty()) {
        stack.push(additionalStack.pop());
    }
}

console.log([5, 3, 1, 4, 2].pop());
//console.log(sortStack([5, 3, 1, 4, 2]));
