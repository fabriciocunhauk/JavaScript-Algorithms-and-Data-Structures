// The basic idea of this strategy is to create two values, or pointers, that each corresponds to an index in an array and moving these pointers towards the beginning, end, or middle of the array based on a provided condition.

function countUniqueValues(arr) {
    if (arr.length === 0) {
        return 0
    };
    var i = 0;
    for (var j = 1; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j]
        }
    }
    return i + 1;
}

countUniqueValues([1, 1, 1, 2, 3, 4, 5, 6, 6, 7])