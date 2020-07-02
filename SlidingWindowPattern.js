// Sliding window algorithm is used to perform required operation on specific window size of given large buffer or array. Window starts from the 1st element and keeps shifting right by one element. The objective is to find the minimum k numbers present in each window. This is commonly know as Sliding window problem or algorithm.

// For example to find the maximum or minimum element from every n element in given array, sliding window algorithm is used.

function maxSubarraySum(arr, num) {
    let maxSum = 0
    let tempSum = 0
    if (arr.length < num) return null
    for (let i = 0; i < num; i++) {
        maxSum += arr[i]
    }
    tempSum = maxSum
    for (let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i - num] + arr[i]
        maxSum = Math.floor(maxSum, tempSum)
    }
    return maxSum
}

maxSubarraySum([2, 6, 8, 9, 2, 1, 8, 5, 6, 3], 3)

// Method 1:

// First way is to use quick sort, when pivot is at Kth position, all elements on the right side are greater than pivot, hence, all elements on the left side automatically become K smallest elements of given array.

// Method 2:

// Keep an array of K elements, Fill it with first K elements of given input array. Now from K+1 element, check if the current element is less than the maximum element in the auxiliary array, if yes, add this element into array. Only problem with above solution is that we need to keep track of maximum element. Still workable. How can we keep track of maximum element in set of integer? Think heap. Think Max heap.

// Method 3:

// Great! In O(1) we would get the max element among K elements already chose as smallest K elements . If max in current set is greater than newly considered element, we need to remove max and introduce new element in set of K smallest element. Heapify again to maintain the heap property. Now we can easily get K minimum elements in array of N.

// Space Auxiliary: O(n)

// Time Complexity: O(n)