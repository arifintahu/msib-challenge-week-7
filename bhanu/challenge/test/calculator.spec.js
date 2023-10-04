const { expect } = require("chai");
const sinon = require("sinon")
const Calculator = require("../src/calculator");

const spy = sinon.spy();

describe("Challenge: Calculator Event Driven", () => {
    describe("Addition", () => {
        const calculator = new Calculator(0);
        it("should return 10", () => {
            spy.resetHistory();
            calculator.once("calculationResult", spy);
            // currentValue -> 0
            calculator.add(10);

            expect(spy.calledOnce).to.be.true;
            expect(spy.args[0][0].result).to.be.eq(10);
        })

        it("should return 13", () => {
            spy.resetHistory();
            calculator.once("calculationResult", spy);
            // currentValue -> 10
            calculator.add(3);

            expect(spy.calledOnce).to.be.true;
            expect(spy.args[0][0].result).to.be.eq(13);
        })

        it("should return 14 and 16", () => {
            spy.resetHistory();
            calculator.on("calculationResult", spy);
            // currentValue -> 13
            calculator.add(1);
            // currentValue -> 14
            calculator.add(2);
            // currentValue -> 16

            expect(spy.calledTwice).to.be.true;
            expect(spy.args[0][0].result).to.be.eq(14);
            expect(spy.args[1][0].result).to.be.eq(16);
        })
    })

    describe("Subsctraction", () => {
        const calculator = new Calculator(35);
        it("should return 30", () => {
            spy.resetHistory();
            calculator.once("calculationResult", spy);
            // currentValue -> 35
            calculator.substract(5);

            expect(spy.calledOnce).to.be.true;
            expect(spy.args[0][0].result).to.be.eq(30);
        })

        it("should return 24", () => {
            spy.resetHistory();
            calculator.once("calculationResult", spy);
            // currentValue -> 30
            calculator.substract(6);

            expect(spy.calledOnce).to.be.true;
            expect(spy.args[0][0].result).to.be.eq(24);
        })

        it("should return 14 and 2", () => {
            spy.resetHistory();
            calculator.on("calculationResult", spy);
            // currentValue -> 24
            calculator.substract(7);
            // currentValue -> 17
            calculator.substract(15);
            // currentValue -> 2

            expect(spy.calledTwice).to.be.true;
            expect(spy.args[0][0].result).to.be.eq(17);
            expect(spy.args[1][0].result).to.be.eq(2);
        })
    })

    describe("Multiplication", () => {
        const calculator = new Calculator(1);
        it("should return 3", () => {
            spy.resetHistory();
            calculator.once("calculationResult", spy);
            // currentValue -> 1
            calculator.multiply(3);

            expect(spy.calledOnce).to.be.true;
            expect(spy.args[0][0].result).to.be.eq(3);
        })

        it("should return 18", () => {
            spy.resetHistory();
            calculator.once("calculationResult", spy);
            // currentValue -> 3
            calculator.multiply(6);

            expect(spy.calledOnce).to.be.true;
            expect(spy.args[0][0].result).to.be.eq(18);
        })

        it("should return 36 and 180", () => {
            spy.resetHistory();
            calculator.on("calculationResult", spy);
            // currentValue -> 18
            calculator.multiply(2);
            // currentValue -> 36
            calculator.multiply(5);
            // currentValue -> 180

            expect(spy.calledTwice).to.be.true;
            expect(spy.args[0][0].result).to.be.eq(36);
            expect(spy.args[1][0].result).to.be.eq(180);
        })
    })

    describe("Division", () => {
        const calculator = new Calculator(54);
        it("should return 18", () => {
            spy.resetHistory();
            calculator.once("calculationResult", spy);
            // currentValue -> 54
            calculator.divide(3);

            expect(spy.calledOnce).to.be.true;
            expect(spy.args[0][0].result).to.be.eq(18);
        })

        it("should return 9", () => {
            spy.resetHistory();
            calculator.once("calculationResult", spy);
            // currentValue -> 18
            calculator.divide(2);

            expect(spy.calledOnce).to.be.true;
            expect(spy.args[0][0].result).to.be.eq(9);
        })

        it("should return 3 and 1", () => {
            spy.resetHistory();
            calculator.on("calculationResult", spy);
            // currentValue -> 9
            calculator.divide(3);
            // currentValue -> 3
            calculator.divide(3);
            // currentValue -> 1

            expect(spy.calledTwice).to.be.true;
            expect(spy.args[0][0].result).to.be.eq(3);
            expect(spy.args[1][0].result).to.be.eq(1);
        })
    })

    describe("Exponential", () => {
        const calculator = new Calculator(2);
        it("should return 4", () => {
            spy.resetHistory();
            calculator.once("calculationResult", spy);
            // currentValue -> 2
            calculator.exponent(2);

            expect(spy.calledOnce).to.be.true;
            expect(spy.args[0][0].result).to.be.eq(4);
        })

        it("should return 64", () => {
            spy.resetHistory();
            calculator.once("calculationResult", spy);
            // currentValue -> 4
            calculator.exponent(3);

            expect(spy.calledOnce).to.be.true;
            expect(spy.args[0][0].result).to.be.eq(64);
        })

        it("should return 4096 and 16.777.216", () => {
            spy.resetHistory();
            calculator.on("calculationResult", spy);
            // currentValue -> 64
            calculator.exponent(2);
            // currentValue -> 4.096
            calculator.exponent(2);
            // currentValue -> 16.777.216

            expect(spy.calledTwice).to.be.true;
            expect(spy.args[0][0].result).to.be.eq(4096);
            expect(spy.args[1][0].result).to.be.eq(16777216);
        })
    })

    describe("Combination", () => {
        const calculator = new Calculator(2);
        it("should return 38", () => {
            // currentValue -> 0
            spy.resetHistory();
            calculator.on("calculationResult", spy);
            calculator.add(4);
            // currentValue -> 6
            calculator.exponent(2);
            // currentValue -> 36
            calculator.substract(17);
            // currentValue -> 19
            calculator.multiply(4);
            // currentValue -> 76
            calculator.divide(2);

            expect(spy.called).to.be.true;
            expect(spy.args[0][0].result).to.be.eq(6);
            expect(spy.args[1][0].result).to.be.eq(36);
            expect(spy.args[2][0].result).to.be.eq(19);
            expect(spy.args[3][0].result).to.be.eq(76);
            expect(spy.args[4][0].result).to.be.eq(38);
        })
    })
})
