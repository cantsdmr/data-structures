import { ObjectStack } from "../data-structures/stack/object-stack";

function solution(S: string) {
    var stack = new ObjectStack();

    if (S.length === 0) {
        return 1;
    }

    var i = 0;
    var result = 1;

    do {
        const symbol = S.charAt(i);

        if (symbol === '(' || symbol === '{' || symbol === '[') {
            stack.push(S.charAt(i));
        } else if (symbol === ')' || symbol === '}' || symbol === ']') {
            const openBracket = stack.pop();

            if (openBracket === undefined) {
                result = 0;
                break;
            }

            if (openBracket === '(' && symbol !== ')') {
                result = 0;
                break;
            }

            if (openBracket === '{' && symbol !== '}') {
                result = 0;
                break;
            }

            if (openBracket === '[' && symbol !== ']') {
                result = 0;
                break;
            }
        }

        i++;
    } while (i <= S.length - 1)

    if (!stack.isEmpty()) {
        result = 0;
    }

    return result;
}


console.log(solution('{{{{'))