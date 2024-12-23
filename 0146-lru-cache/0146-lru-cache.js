/**
 * @param {number} capacity
 */
 //Initialize the LRU cache with positive size
var LRUCache = function(capacity) {
    this.map = new Map();
    this.capacity = capacity;
};

/** 
 * @param {number} key
 * @return {number}
 */
 //Return the key if the key is exists, otherwise return -1
LRUCache.prototype.get = function(key) {
    if(!this.map.has(key)) return -1;
    let value = this.map.get(key);
    this.map.delete(key);
    this.map.set(key, value)
    return value;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
        if(this.map.has(key)) this.map.delete(key);
    this.map.set(key, value);
    if (this.map.size > this.capacity) this.map.delete(this.map.keys().next().value);
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */