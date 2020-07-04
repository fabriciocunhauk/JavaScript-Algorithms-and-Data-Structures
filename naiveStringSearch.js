/* Naive pattern searching is the simplest method among other pattern searching algorithms. It checks for all character of the main string to the pattern. Naive algorithm is exact string matching(means finding one or all exact occurrences of a pattern in a text) algorithm. This algorithm is helpful for smaller texts.*/

function naiveSearch(long, short) {
    var count = 0;

    for (var i = 0; i < long.length; i++) {
        for (var j = 0; j < short.length; j++) {
            console.log(short[j], long[i + j]);
            if (short[j] !== long[i + j]) {
                console.log("BREAK");
                break;
            }
            if (j === short.length - 1) {
                console.log("FOUND ONE!");
                count++;
            }
        }
    }
    return count;
}

naiveSearch("lorie loled", "lol")