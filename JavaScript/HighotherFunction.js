const multiply = (a) => (b) => a * b;
const multiplyByTwo = multiply(2);
console.log(multiplyByTwo(5));

const add = (a, b) => a + b;
const multiplyByThree = (num) => num * 3;

const addAndMultiply = (a, b, multiplier) => {
    const sum = add(a, b);
    return multiplyByThree(sum);
}

console.log(addAndMultiply(2, 3, multiplyByThree));

const calculator = {
    value: 0,
    add(num) {
        this.value += num;
        return this;
    },
    subtract(num) {
        this.value -= num;
        return this;
    },
    multiply(num) {
        this.value *= num;
        return this;
    },
    getValue() {
        return this.value;
    },
};

const result = calculator.add(5).subtract(2).multiply(3).getValue();
console.log(result);
