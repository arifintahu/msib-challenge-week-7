const { EventEmitter } = require('events')

class CalculatorEvent extends EventEmitter {
    constructor(initialValue = 0) {
        super();
        this.currentValue = initialValue;
    }

    add(number) {
        const result = this.currentValue + number;
        this.emit("calculationResult", {
            operator: "add",
            operandLeft: this.currentValue,
            operandRight: number,
            result: result,
        });
        this.currentValue = result;
    }

    substract(number) {}

    multiply(number) {}

    divide(number) {}
    
    exponent(number) {}
}

module.exports = CalculatorEvent;
