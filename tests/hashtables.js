class hashtables {
    constructor(size) {
        this.dataMap = new Array(size);
    }

    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i) * 23;
        }
        hash = hash % this.dataMap.length;
        return hash;
    }

    set(key, value) {
        let index = this._hash(key);
        if (!this.dataMap[index]) {
            this.dataMap[index] = [];
        }
        this.dataMap[index].push([key, value]);
    }

    get(key) {
        let index = this._hash(key);
        if (!this.dataMap[index]) {
            for (let i = 0; i < this.dataMap[index].length; i++) {
                if (this.dataMap[index][i][0] == key) {
                    return this.dataMap[index][i][1];
                }
            }
        }
        return undefined;
    }

    keys() {
        let keys = [];
        for (let i = 0; i < this.dataMap.length; i++) {
            if (this.dataMap[i]) {
                for (let j = 0; j < this.dataMap[i].length; j++) {
                    keys.push(this.dataMap[i][j][0]);
                }
            }
        }
        return keys;
    }

    matchingKey(array1, array2) {
        let obj1 = [];
        for (let i = 0; i < array1.length; i++) {
            obj1[array1[i]] = true;
        }

        for (let j = 0; j < array2.length; j++) {
            if (obj1[array2[j]]) return true;
        }
        return false;
    }
}

let myTable = new hashtables(7);
myTable.set('washers', 50);
myTable.set('bolts', 1400);
myTable.set('lumber', 70);
console.log(myTable.keys());
console.log(myTable.matchingKey([1, 2, 3, 4], [5]));
