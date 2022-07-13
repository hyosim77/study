const calculator = {
    plus: function (a, b) {
        return a + b
    },
    minus: function (a, b) {
        return a - b
    },
    times: function (a, b) {
        return a * b
    },
    divide: function (a, b) {
        return a / b
    },
    power: function (a, b) {
        return a ** b;
    }
}

const plusResult = calculator.plus(1, 2);
const minusResult = calculator.minus(plusResult, 5);
const divisorResult = calculator.divide(minusResult, 10);
const powerResult = calculator.power(divisorResult, 20);