/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
    let prerequisitesDict = new Map();
    for (preq in prerequisites) {
        prerequisitesDict.set(preq[0], preq[1]);
    }
};

console.log(canFinish(2, [[1, 0]]));
