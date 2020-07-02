// 1- Start from the leftmost element of array and one by one compare the element we are searching for with each element of the array.

// 2- If there is a match between the element we are searching for and an element of the array, return the index.

function valueSeaarch(arr, value) {

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            return i
        }
    }
    return -1
}

valueSeaarch([2, 4, 6, 5, 10, 8, 16], 8)
