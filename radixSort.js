/*
Concept
Radix sort, also known as bucket sort, is one of the oldest sorting algorithms and even pre-exists computers. It was used to sort punched cards back in the 1880s.

It’s based on the idea of having a sub-array, or bucket, for each type of data we need to compare, like A-Z or in our case 0-9. We take the first character/digit in each item, add the whole item to it’s corresponding bucket, then put them back into an array while retaining their new order.

We can then move on to the next character/digit and repeat the process. When an item runs out of characters/digits we’ll add it to the first bucket, since everything else is obviously larger/longer. When we’ve done this as many times as the number of digits/characters of the largest item, our array will have been completely sorted without making any pesky comparisons.
*/


function getDigit(num, i) {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10
}

function digitCount(num) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
    let maxDigits = 0;
    for (let i = 0; i < nums.length; i++) {
        maxDigits = Math.max(maxDigits, digitCount(nums[i]));
    }
    return maxDigits;
}

function radixSort(nums) {
    let maxDigitCount = mostDigits(nums);
    for (let k = 0; k < maxDigitCount; k++) {
        let digitBuckets = Array.from({ length: 10 }, () => []);
        for (let i = 0; i < nums.length; i++) {
            let digit = getDigit(nums[i], k);
            digitBuckets[digit].push(nums[i]);
        }
        console.log(digitBuckets);
        nums = [].concat(...digitBuckets);
        console.log(nums);
    }

    return nums;
}

radixSort([23, 345, 5467, 12, 2345, 9852])