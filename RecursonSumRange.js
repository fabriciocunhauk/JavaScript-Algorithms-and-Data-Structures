/* Some computer programming languages allow a module or function to call itself. This technique is known as recursion. In recursion, a function α either calls itself directly
or calls a function β that in turn calls the original function α. The function α is called recursive function. */

function sumRange(num) {
    if (num === 1) return 1
    return num + sumRange(num - 1)
}

sumRange(10)
