// In computer science, binary search, also known as half-interval search,[1] logarithmic search,[2] or binary chop,[3] is a search algorithm that finds the position of a target value within a sorted array.[4][5] Binary search compares the target value to the middle element of the array. If they are not equal, the half in which the target cannot lie is eliminated and the search continues on the remaining half, again taking the middle element to compare to the target value, and repeating this until the target value is found. If the search ends with the remaining half being empty, the target is not in the array.

// Binary search runs in logarithmic time in the worst case, making {\displaystyle O(\log n)}O(\log n) comparisons, where {\displaystyle n}n is the number of elements in the array, the {\displaystyle O}O is Big O notation, and {\displaystyle \log }\log  is the logarithm.[6] Binary search is faster than linear search except for small arrays. However, the array must be sorted first to be able to apply binary search. There are specialized data structures designed for fast searching, such as hash tables, that can be searched more efficiently than binary search. However, binary search can be used to solve a wider range of problems, such as finding the next-smallest or next-largest element in the array relative to the target even if it is absent from the array.

function binarySearch(arr, value) {
    var start = 0
    var end = arr.length - 1
    var mid = Math.floor((start + end) / 2)

    while (arr[mid] !== value && start <= end) {
        if (value < arr[mid]) {
            end = mid - 1
        } else {
            start = mid + 1
        }
        mid = Math.floor((start + end) / 2)
    }
    if (arr[mid] === value) {
        return mid
    }
    return -1

}

binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 17)