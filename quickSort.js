/*
1. First find the "pivot" element in the array.

2. Start the left pointer at first element of the array.

3. Start the right pointer at last element of the array.

4. Compare the element pointing with left pointer and if it is less than the pivot element, then move the left pointer to the right (add 1 to the left index). Continue this until left side element is greater than or equal to the pivot element.

5. Compare the element pointing with right pointer and if it is greater than the pivot element, then move the right pointer to the left (subtract 1 to the right index). Continue this until right side element is less than or equal to the pivot element.

6. Check if left pointer is less than or equal to right pointer, then saw the elements in locations of these pointers.

7. Increment the left pointer and decrement the right pointer.

8. If index of left pointer is still less than the index of the right pointer, then repeat the process; else return the index of the left pointer. 
*/

function pivot(arr, start = 0, end = arr.length + 1) {
    function swap(array, i, j) {
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    var pivot = arr[start];
    var swapIndex = start;

    for (var i = start + 1; i < arr.length; i++) {
        if (pivot > arr[i]) {
            swapIndex++;
            swap(arr, swapIndex, i);
        }
    }
    swap(arr, start, swapIndex);
    return swapIndex

}

function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        let pivotIndex = pivot(arr, left, right);
        //left
        quickSort(arr, left, pivotIndex - 1);
        //right
        quickSort(arr, pivotIndex + 1, right);
    }
    return arr;
}

quickSort([4, 6, 9, 1, 7, 2, 5, 8]);

/*
Determine Pivot element
But before going forward with the Quick sort, selecting the pivot element plays a major role. If you select the first element as the pivot element, then it gives worst performance in the sorted array. So, it is always advisable to pick the middle element (length of the array divided by 2) as the pivot element and we do the same.

Here are the steps to perform Quick sort that is being shown with an example [5,3,7,6,2,9].

STEP 1: Determine pivot as middle element. So, 7 is the pivot element.

STEP 2: Start left and right pointers as first and last elements of the array respectively. So, left pointer is pointing to 5 at index 0 and right pointer is pointing to 9 at index 5.

STEP 3: Compare element at the left pointer with the pivot element. Since, 5 < 6 shift left pointer to the right to index 1.

STEP 4: Now, still 3 <6 so shift left pointer to one more index to the right. So now 7 > 6 stop incrementing the left pointer and now left pointer is at index 2.

STEP 5: Now, compare value at the right pointer with the pivot element. Since 9 > 6 move the right pointer to the left. Now as 2 < 6 stop moving the right pointer.

STEP 6: Swap both values present at left and right pointers with each other.

STEP 7: Move both pointers one more step.

STEP 8: Since 6 = 6, move pointers to one more step and stop as left pointer crosses the right pointer and return the index of the left pointer.

So, here based on the above approach, we need to write code for swapping elements and partitioning the array as mentioned in above steps.
*/