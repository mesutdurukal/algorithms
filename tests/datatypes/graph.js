class graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
            return true;
        }
        return false;
    }

    removeVertex(vertex) {
        if (!this.adjacencyList[vertex]) return undefined;
        while (this.adjacencyList[vertex].length) {
            let adjV = this.adjacencyList[vertex].pop();
            this.removeEdge(adjV, vertex);
            /*this.adjacencyList[adjV] = this.adjacencyList[adjV].filter(
                (v) => v !== vertex
            );*/
        }
        delete this.adjacencyList[vertex];
        //this.adjacencyList.filter((l) => l !== vertex);
    }

    addEdge(v1, v2) {
        if (this.adjacencyList[v1] && this.adjacencyList[v2]) {
            this.adjacencyList[v1].push(v2);
            this.adjacencyList[v2].push(v1);
            return true;
        }
        return false;
    }

    removeEdge(v1, v2) {
        if (this.adjacencyList[v1] && this.adjacencyList[v2]) {
            this.adjacencyList[v1] = this.adjacencyList[v1].filter(
                (v) => v !== v2
            );
            this.adjacencyList[v2] = this.adjacencyList[v2].filter(
                (v) => v !== v1
            );
            return true;
        }
        return false;
    }
}

function factorial(n) {
    let result = n;
    while (n > 2) {
        result = result * (n - 1);
        n--;
    }
    return result;
}

console.log(factorial(6));
