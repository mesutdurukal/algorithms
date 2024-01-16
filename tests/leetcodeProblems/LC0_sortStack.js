import { Stack } from '../datatypes/stackArray.js';

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
    return stack;
}

let stack = new Stack();
stack.push(5);
stack.push(3);
stack.push(1);
stack.push(4);
stack.push(2);
sortStack(stack).printStack();
