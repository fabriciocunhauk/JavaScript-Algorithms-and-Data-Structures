/* Recursion is a process in which a function calls itself as a subroutine. This allows the function to be repeated several times, since it calls itself
during its execution. ... Recursion is often seen as an efficient method of programming since it requires the least amount of code to perform the necessary functions. */

function collectOddValues(arr) {

    let result = []

    function helper(helperInput) {
        if (helperInput.length === 0) {
            return;
        }
        if (helperInput[0] % 2 !== 0) {
            result.push(helperInput[0])
        }
        helper(helperInput.slice(1))
    }
    helper(arr)
    console.log(result)
    return result
}

collectOddValues([1, 2, 3, 4, 5, 6, 7, 8])
