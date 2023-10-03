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
            calculator.add(10);

            expect(spy.calledOnce).to.be.true;
            expect(spy.args[0][0].result).to.be.eq(10);
        })

        it("should return 8", () => {
            spy.resetHistory();
            calculator.once("calculationResult", spy);
            calculator.add(3);

            expect(spy.calledOnce).to.be.true;
            expect(spy.args[0][0].result).to.be.eq(13);
        })

        it("should return 14 and 16", () => {
            spy.resetHistory();
            calculator.on("calculationResult", spy);
            calculator.add(1);
            calculator.add(2);

            expect(spy.calledTwice).to.be.true;
            expect(spy.args[0][0].result).to.be.eq(14);
            expect(spy.args[1][0].result).to.be.eq(16);
        })
    })

    describe("Subsctraction", () => {
        const calculator = new Calculator(20);
        it("should return 15", () => {
            spy.resetHistory();
            calculator.once("calculationResult", spy);
            calculator.substract(5);

            expect(spy.calledOnce).to.be.true;
            expect(spy.args[0][0].result).to.be.eq(15);
        })

        it("should return 13", () => {
            spy.resetHistory();
            calculator.once("calculationResult", spy);
            calculator.substract(2);

            expect(spy.calledOnce).to.be.true;
            expect(spy.args[0][0].result).to.be.eq(13);
        })

        it("should return 10 and 5", () => {
            spy.resetHistory();
            calculator.on("calculationResult", spy);
            calculator.substract(3);
            calculator.substract(5);

            expect(spy.calledTwice).to.be.true;
            expect(spy.args[0][0].result).to.be.eq(10);
            expect(spy.args[1][0].result).to.be.eq(5);
        })
    })

    describe("Multiplication", () => {
        const calculator = new Calculator(5);
        it("should return 25", () => {
            spy.resetHistory();
            calculator.once("calculationResult", spy);
            calculator.multiply(5);

            expect(spy.calledOnce).to.be.true;
            expect(spy.args[0][0].result).to.be.eq(25);
        })

        it("should return 100", () => {
            spy.resetHistory();
            calculator.once("calculationResult", spy);
            calculator.multiply(4);

            expect(spy.calledOnce).to.be.true;
            expect(spy.args[0][0].result).to.be.eq(100);
        })

        it("should return 200 and 1000", () => {
            spy.resetHistory();
            calculator.on("calculationResult", spy);
            calculator.multiply(2);
            calculator.multiply(5);

            expect(spy.calledTwice).to.be.true;
            expect(spy.args[0][0].result).to.be.eq(200);
            expect(spy.args[1][0].result).to.be.eq(1000);
        })
    })

    describe("Division", () => {
        const calculator = new Calculator(1500);
        it("should return 750", () => {
            spy.resetHistory();
            calculator.once("calculationResult", spy);
            calculator.divide(2);

            expect(spy.calledOnce).to.be.true;
            expect(spy.args[0][0].result).to.be.eq(750);
        })

        it("should return 250", () => {
            spy.resetHistory();
            calculator.once("calculationResult", spy);
            calculator.divide(3);

            expect(spy.calledOnce).to.be.true;
            expect(spy.args[0][0].result).to.be.eq(250);
        })

        it("should return 50 and 10", () => {
            spy.resetHistory();
            calculator.on("calculationResult", spy);
            calculator.divide(5);
            calculator.divide(5);

            expect(spy.calledTwice).to.be.true;
            expect(spy.args[0][0].result).to.be.eq(50);
            expect(spy.args[1][0].result).to.be.eq(10);
        })
    })

    describe("Exponential", () => {
        const calculator = new Calculator(2);
        it("should return 4", () => {
            spy.resetHistory();
            calculator.once("calculationResult", spy);
            calculator.exponent(2);

            expect(spy.calledOnce).to.be.true;
            expect(spy.args[0][0].result).to.be.eq(4);
        })

        const calculator2 = new Calculator(5)
        it("should return 25", () => {
            spy.resetHistory();
            calculator2.once("calculationResult", spy);
            calculator2.exponent(2);

            expect(spy.calledOnce).to.be.true;
            expect(spy.args[0][0].result).to.be.eq(25);
        })

        const calculator3 = new Calculator(10)
        it("should return 100 and 10000", () => {
            spy.resetHistory();
            calculator3.on("calculationResult", spy);
            calculator3.exponent(2);
            calculator3.exponent(2);

            expect(spy.calledTwice).to.be.true;
            expect(spy.args[0][0].result).to.be.eq(100);
            expect(spy.args[1][0].result).to.be.eq(10000);
        })
    })

    describe("Combination", () => {
        const calculator = new Calculator();
        it("Should return 10000", () => {
            spy.resetHistory();
            calculator.once("calculationResult", spy);
            calculator.add(10000)
            expect(spy.calledOnce).to.be.true;
            expect(spy.args[0][0].result).to.be.eq(10000);
        })

        it("Should return 8000", () => {
            spy.resetHistory();
            calculator.once("calculationResult", spy);
            calculator.substract(2000);
            expect(spy.calledOnce).to.be.true;
            expect(spy.args[0][0].result).to.be.eq(8000);
        })

        it("Should return 16000", () => {
            spy.resetHistory();
            calculator.once("calculationResult", spy);
            calculator.multiply(2);
            expect(spy.calledOnce).to.be.true;
            expect(spy.args[0][0].result).to.be.eq(16000);
        })

        it("Should return 16", () => {
            spy.resetHistory();
            calculator.once("calculationResult", spy);
            calculator.divide(1000);
            expect(spy.calledOnce).to.be.true;
            expect(spy.args[0][0].result).to.be.eq(16);
        })

        it("Should return 256", () => {
            spy.resetHistory();
            calculator.once("calculationResult", spy);
            calculator.exponent(2);
            expect(spy.calledOnce).to.be.true;
            expect(spy.args[0][0].result).to.be.eq(256);
        })
    })
})
