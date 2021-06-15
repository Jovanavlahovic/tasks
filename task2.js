function count(input) {
    let openBrackets = 0;
    let closedBrackets = 0;

    for (let character of input) {
        if (character === "(") {
            openBrackets += 1;
        }
        if (character === ")") {
            closedBrackets  += 1;
        }
    }
    return openBrackets === closedBrackets;
}