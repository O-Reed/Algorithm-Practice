/**
 * Given a string, return a new string with the reversed order of characters
 * --- Example\
 *  reverse('hi') === 'ih'
 */


function reverse(str) {
    let reversed = '';

    for (let char of str)
        reversed = char + reversed;

    return reversed;
}

console.log(reverse('hi'));