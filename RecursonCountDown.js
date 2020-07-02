// Some computer programming languages allow a module or function to call itself. This technique is known as recursion. In recursion, a function α either calls itself directly or calls a function β that in turn calls the original function α. The function α is called recursive function.

function countdown(num) {
    if (num <= 0) {
        console.log("All done")
        return
    }
    console.log(num)
    num--
    countdown(num)
}

countdown(10)