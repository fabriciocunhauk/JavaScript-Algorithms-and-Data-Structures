function valueSeaarch(arr, value) {

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            return i
        }
    }
    return -1
}

valueSeaarch([2, 4, 6, 5, 10, 16], 8)
