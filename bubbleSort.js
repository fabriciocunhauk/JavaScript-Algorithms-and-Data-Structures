/*According to Wikipedia "Bubble sort, sometimes referred to as sinking sort, is a simple sorting algorithm that repeatedly steps through the list to be sorted, compares each pair of adjacent items and swaps them if they are in the wrong order. The pass through the list is repeated until no swaps are needed, which indicates that the list is sorted. The algorithm, which is a comparison sort, is named for the way smaller elements "bubble" to the top of the list. Although the algorithm is simple, it is too slow and impractical for most problems even when compared to insertion sort. It can be practical if the input is usually in sort order but may occasionally have some out-of-order elements nearly in position."*/

// NAIVE SOLUTION  O(n²)
function bubbleSort(arr) {
    for (i = arr.length; i > 0; i--) {
        for (j = 0; j < i - 1; j++) {
            console.log(arr, arr[j], arr[j + 1])
            if (arr[j] > arr[j + 1]) {
                temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
        console.log("ONE INTERATION!")
    }
    return arr
}

bubbleSort([10, 4, 6, 9, 2, 3, 7, 5, 8, 1])

// OPTIMIZED WITH noSwaps  O(n)
function bubbleSort(arr) {
    var noSwaps;
    for (i = arr.length; i > 0; i--) {
        noSwaps = true;
        for (j = 0; j < i - 1; j++) {
            console.log(arr, arr[j], arr[j + 1])
            if (arr[j] > arr[j + 1]) {
                temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
                noSwaps = false;
            }
        }
        console.log("ONE INTERATION!")
        if (noSwaps) break;
    }
    return arr
}

bubbleSort([10, 4, 6, 9, 2, 3, 7, 5, 8, 1])