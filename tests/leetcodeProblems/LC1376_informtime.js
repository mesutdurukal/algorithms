var numOfMinutes = function (n, headID, manager, informTime) {
    let max = 0;

    function dfs(emp) {
        if (manager[emp] != -1) {
            informTime[emp] += dfs(manager[emp]);
            manager[emp] = -1;
        }
        return informTime[emp];
    }

    for (let i = 0; i < n; i++) {
        if (informTime[i] == 0) {
            continue;
        }
        max = Math.max(max, dfs(i));
    }
    return max;
};

numOfMinutes(6, 2, [2, 2, -1, 2, 2, 2, 5, 4], [0, 0, 1, 0, 3, 2, 0, 0]);
