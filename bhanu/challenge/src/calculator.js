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

    substract(number) {
        const result = this.currentValue - number;
        this.emit("calculationResult", {
            operator: "substract",
            operandLeft: this.currentValue,
            operandRight: number,
            result: result,
        });
        this.currentValue = result;
    }

    multiply(number) {
        const result = this.currentValue * number;
        this.emit("calculationResult", {
            operator: "multiply",
            operandLeft: this.currentValue,
            operandRight: number,
            result: result,
        });
        this.currentValue = result;
    }

    divide(number) {
        const result = this.currentValue / number;
        this.emit("calculationResult", {
            operator: "devide",
            operandLeft: this.currentValue,
            operandRight: number,
            result: result,
        });
        this.currentValue = result;
    }

    exponent(number) {
        const result = this.currentValue ** number;
        this.emit("calculationResult", {
            operator: "exponent",
            operandLeft: this.currentValue,
            operandRight: number,
            result: result,
        });
        this.currentValue = result;
    }
}

module.exports = CalculatorEvent;
