function bubbleSort(arr) {
  let swappped;
  do {
    swapped = false;
    for (let i = 0; i < arr.length(); i ++ ) {
      if(arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swappped = true;
      }
    }
  } while(swapped);

  return arr;
}

let arr = [5,3,8,4,2];
console.log(bubbleSort(arr))