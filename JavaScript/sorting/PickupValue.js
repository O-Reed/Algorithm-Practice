function Pickup(str) {
    let eachChar = new Map();

    for (let i = 0; i < str.length; i++) {
        if (eachChar.has(str[i])) {
            eachChar.set(str[i], eachChar.get(str[i]) + 1);
        } else {
            eachChar.set(str[i], 1);
        }
    }
    let maxCount = 0;
    let maxChar = '';
    eachChar.forEach((value, key) => {
        if (value > maxCount) {
            maxCount = value;
            maxChar = key;
        }
        return maxChar;
    });
    return maxChar;
}

console.log(Pickup("I can give you a shift"));