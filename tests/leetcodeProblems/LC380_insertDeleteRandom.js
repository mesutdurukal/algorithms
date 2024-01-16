var RandomizedSet = function () {
    this.obj = [];
    return this;
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
    if (this.obj.indexOf(val) > -1) return false;
    else {
        this.obj.push(val);
        return true;
    }
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
    if (this.obj.indexOf(val) > -1) {
        this.obj.splice(this.obj.indexOf(val), 1);
        return true;
    } else return false;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
    return this.obj[Math.floor(Math.random() * this.obj.length)];
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
