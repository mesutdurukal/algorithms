/*

There are n gas stations along a circular route, where the amount of gas at the ith station is gas[i].

You have a car with an unlimited gas tank and it costs cost[i] of gas to travel from the ith station to its next (i + 1)th station. You begin the journey with an empty tank at one of the gas stations.

Given two integer arrays gas and cost, return the starting gas station's index if you can travel around the circuit once in the clockwise direction, otherwise return -1. If there exists a solution, it is guaranteed to be unique
 */

/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit_ = function (gas, cost) {
    if (
        gas.reduce((partialSum, a) => partialSum + a, 0) >=
        cost.reduce((partialSum, a) => partialSum + a, 0)
    ) {
        const len = gas.length;
        for (let i = 0; i < len; i++) {
            if (gas[i] > 0) {
                let remaining = 0;

                for (let j = i; j < i + len; j++) {
                    let ind = j % len;

                    if (gas[ind] != cost[ind]) {
                        remaining = remaining + gas[ind] - cost[ind];
                        if (remaining < 0) break;
                    }
                }
                if (remaining >= 0) return i;
            }
        }
    }
    return -1;
};

const canCompleteCircuit = (gas, cost) => {
    let len = gas.length;
    let start = len - 1;
    let end = 0;
    let remaining = gas[start] - cost[start];

    while (start >= end) {
        if (remaining >= 0) {
            remaining += gas[end] - cost[end];
            end++;
        } else {
            start--;
            remaining += gas[start] - cost[start];
        }
    }
    return remaining >= 0 ? start : -1;
};

const gas = [1, 2, 3, 4, 5];
const cost = [3, 4, 5, 1, 2];

console.log(canCompleteCircuit(gas, cost));
