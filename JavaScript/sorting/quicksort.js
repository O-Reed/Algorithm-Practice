function quicksort(array) {
    if (array.length <= 1){
        return array;
    }

    const pivot = array[array.length - 1];
    const left = [];
    const right = [];

    for ( let i = 0; i < array.length - 1; i ++) {
        if (array[i] < pivot ){
            left.push(array[i]);
        } else {
            right.push(array[i]);
        }
    }

    return [...quicksort(left), pivot, ...quicksort(right)];
}

console.log(quicksort([23,5,54,8,4,6,345,567,345,78,435,]))