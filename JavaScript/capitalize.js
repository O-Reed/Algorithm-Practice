function capitalize(str) {

    const words = str.split(' ');
    // for (let word of words) {
    //     result.push(word[0].toUpperCase() + word.slice(1))
    // }

    return words.map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
}

console.log(capitalize("this is my resume!"))