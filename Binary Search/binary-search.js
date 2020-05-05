function search(item, list) {
    let low = 0;
    let high = list.length - 1;

    while (low <= high) {
        const mid = Math.round((low + high) / 2);
        const guess = list[mid];

        if (guess === item) return mid;
        if  (guess < item) { 
            low = mid + 1;
        } else {
            high = mid - 1;
        } 
    }

    return null;
}

module.exports = search;