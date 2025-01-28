function reverseInt(n) {
    const reversed = n.toString().split('').reverse().join('');

    return parseInt(reversed) * -1;
}

console.log(reverseInt(-15));