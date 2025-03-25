function PickupNonRepeatArray(str) {
    let charMap = new Map();
    let maxLength = 0;
    let start = 0;

    for (let end = 0; end < str.length; end++) {
        if (charMap.has(str[end])) {
            start = Math.max(start, charMap.get(str[end]) + 1);
        }
        charMap.set(str[end], end);
        maxLength = Math.max(maxLength, end - start + 1);
    }

    return maxLength;
}

console.log(PickupNonRepeatArray('abcddfeseeji'));