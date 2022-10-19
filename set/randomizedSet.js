var RandomizedSet = function () {
  this.store = {};
  this.arr = [];
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
  const lastIdx = this.arr.length;

  if (this.store[val] === undefined) {
    this.store[val] = lastIdx;
    this.arr.push(val);
    return true;
  }

  return false;
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
  if (this.store[val] === undefined) {
    return false;
  }
  const removeItemIdx = this.store[val];
  const lastItem = this.arr[this.arr.length - 1];
  const removeItem = this.arr[removeItemIdx];

  this.arr[this.arr.length - 1] = removeItem;
  this.arr[removeItemIdx] = lastItem;

  this.store[lastItem] = removeItemIdx;
  delete this.store[val];
  this.arr.pop();

  return true;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
  const randIdx = Math.floor(Math.random() * this.arr.length);
  return this.arr[randIdx];
};

const r = new RandomizedSet();
r.insert(12);
r.insert(45);
r.insert(9);

console.log(r);
console.log(r.remove(45));
console.log(r);
