// The basic idea of this strategy is to create two values, or pointers, that each corresponds to an index in an array and moving these pointers towards the beginning, end, or middle of the array based on a provided condition.

function sumZero(arr) {
    let left = 0
    let right = arr.length - 1
    while (left < right) {
        let sum = arr[left] + arr[right]
        if (sum === 0) {
            return [arr[left], arr[right]]
        } else if (sum > 0) {
            right--
        } else {
            left++
        }
    }
}

sumZero([-4, -3, -2, -1, 0, 1, 2, 3, 4])