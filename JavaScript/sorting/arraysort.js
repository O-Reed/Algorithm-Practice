//An array of strings yet to be sorted
var colors = ["Red", "Black", "Purple", "Blue"]

//sorting by default ascending order
console.log(colors.sort()); // ["Black","Blue","Purple","Red"]

//sorting by descending order
colors.sort(function (a, b) {
    if (a > b) {
        return -1;
    }
    if (b > a) {
        return 1;
    }
    return 0;
});   // ["Red", "Purple", "Blue", "Black"]
