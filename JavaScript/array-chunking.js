function chunk(array, size) {
    const result = [];
    let index = 0;

    while(index < array.length){
        result.push(array.slice(index, index + size));
        index += size;
    }

    return result;
}

console.log(chunk([1, 2, 3, 4, 5], 3));