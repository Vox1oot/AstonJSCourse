Array.prototype.filterArray = function(cb, thisArg = null) {
    const result = [];

    if (thisArg !== null) {
        cb = cb.bind(thisArg);
    }

    for (let item of this) {
        if (cb(item)) {
            result.push(item);
        }
    }
    return result;
};
