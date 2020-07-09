/* The idea behind selection sort is that you loop through the input array linearly, selecting the first smallest element, and then swap it to the first position. Then you loop through the array again using a linear scan and get the second smallest element, swap it to the second position, and so on and so forth until your array is completely sorted.  O(n²) */

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let min = i
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j
            }
        }
        console.log("========================")
        console.log(arr)
        console.log("SWAPING TO: ")

        if (i !== min) {
            let temp = arr[i]
            arr[i] = arr[min]
            arr[min] = temp
        }
        console.log(arr)
        console.log("========================")
    }
    return arr
}

selectionSort([10, 4, 6, 9, 2, 3, 7, 5, 8, 1]) 