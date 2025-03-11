function mergesort(array) {
    if ( array.length <= 1 ) {
        return array;
    }

    const mid = Math.floor(array.length / 2);
    const left = mergesort(array.slice(0, mid));
    const right = mergesort(array.slice(mid));

    return merge(left, right);
}


function merge(left, right) {
    const merged = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (left.length > leftIndex && right.length > rightIndex ){
        if (left[leftIndex] > right[rightIndex]){
            merged.push(right[rightIndex]);
            rightIndex ++;
        }
        else {
            merged.push(left[leftIndex]);
            leftIndex ++;
        }
    }

    return merged.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));

}

console.log(mergesort([34,3456,56,8,45,234,2,6,456,78,34,75]))
