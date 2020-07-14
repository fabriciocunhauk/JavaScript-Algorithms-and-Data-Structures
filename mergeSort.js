/*Merge sort is one of the most popular sorting algorithms today and it uses the concept of divide and conquer to sort a list of elements. Meaning, it will divide the bigger problem into smaller problems and then solve each of the small problems in order to solve the bigger problem that we started out with.

1. we will first break the given array into halves until we have an array that has one element or which is completely empty.

2. once we have smaller sorted array, merge those arrays back together until you're back to the full length of the array.

3. And once the array has been merged together, return the merged array.

As the pseudo-code says, we need to merge back the sorted array, so for that, we will need to implement a helper function that will do that job for us.

                           mergeSort([10,24,76,73])

             left                                          right
            [10,24]               mergeArrays             [73,76]
    mergeSort([10,24])                              mergeSort([76,73])
    [10] mergeArrays [24]                        [76]   mergeArrays [73]
 mergeSort([10]) mergeSort([24])                mergeSort([76])  mergeSort([73]) 

                            [10,24,73,76]

*/

function mergeArrays(arr1, arr2) {
    let result = [];
    let i = 0;
    let j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr2[j] > arr1[i]) {
            result.push(arr1[i]);
            i++;
        } else {
            result.push(arr2[j]);
            j++;
        }
    }
    while (i < arr1.length) {
        result.push(arr1[i]);
        i++;
    }
    while (j < arr2.length) {
        result.push(arr2[j])
        j++;
    }

    return result
}



function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));

    return mergeArrays(left, right);
}

mergeSort([10, 24, 73, 76]) 