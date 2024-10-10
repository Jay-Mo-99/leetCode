/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    const operand = tokens.pop();

    let executor;
    switch (operand) {
        case "+":
            executor = add;
            break;
        case "-":
            executor = sub;
            break;
        case "*":
            executor = mul;
            break;
        case "/":
            executor = div;
            break;
        default:
            // number
            return parseInt(operand)
    }

    const rhs = evalRPN(tokens);
    const lhs = evalRPN(tokens);

    return executor(lhs, rhs);
};

function add(lhs, rhs) {
    return lhs + rhs
}

function sub(lhs, rhs) {
    return lhs - rhs
}

function mul(lhs, rhs) {
    return lhs * rhs;
}

function div(lhs, rhs) {
    return Math.trunc(lhs / rhs)
}