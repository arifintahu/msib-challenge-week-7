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

        it("should return 13", () => {
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
        const calculator = new Calculator(50);
        it("should return 40", () => {
            spy.resetHistory();
            calculator.once("calculationResult", spy);
            calculator.substract(10);

            expect(spy.calledOnce).to.be.true;
            expect(spy.args[0][0].result).to.be.eq(40);
        })

        it("should return 25", () => {
            spy.resetHistory();
            calculator.once("calculationResult", spy);
            calculator.substract(15);

            expect(spy.calledOnce).to.be.true;
            expect(spy.args[0][0].result).to.be.eq(25);
        })

        it("should return 20, 7 and 4", () => {
            spy.resetHistory();
            calculator.on("calculationResult", spy);
            calculator.substract(5);
            calculator.substract(13);
            calculator.substract(3);

            expect(spy.calledThrice).to.be.true;
            expect(spy.args[0][0].result).to.be.eq(20);
            expect(spy.args[1][0].result).to.be.eq(7);
            expect(spy.args[2][0].result).to.be.eq(4);
        })
    })

    describe("Multiplication", () => {
        const calculator = new Calculator(1);
        it("should return 3", () => {
            spy.resetHistory();
            calculator.once("calculationResult", spy);
            calculator.multiply(3);

            expect(spy.calledOnce).to.be.true;
            expect(spy.args[0][0].result).to.be.eq(3);
        })

        it("should return 12", () => {
            spy.resetHistory();
            calculator.once("calculationResult", spy);
            calculator.multiply(4);

            expect(spy.calledOnce).to.be.true;
            expect(spy.args[0][0].result).to.be.eq(12);
        })

        it("should return 24, 72 and 360", () => {
            spy.resetHistory();
            calculator.on("calculationResult", spy);
            calculator.multiply(2);
            calculator.multiply(3);
            calculator.multiply(5);

            expect(spy.calledThrice).to.be.true;
            expect(spy.args[0][0].result).to.be.eq(24);
            expect(spy.args[1][0].result).to.be.eq(72);
            expect(spy.args[2][0].result).to.be.eq(360);
        })
    })

    describe("Division", () => {
        const calculator = new Calculator(1000);
        it("should return 250", () => {
            spy.resetHistory();
            calculator.once("calculationResult", spy);
            calculator.divide(4);

            expect(spy.calledOnce).to.be.true;
            expect(spy.args[0][0].result).to.be.eq(250);
        })

        it("should return 125", () => {
            spy.resetHistory();
            calculator.once("calculationResult", spy);
            calculator.divide(2);

            expect(spy.calledOnce).to.be.true;
            expect(spy.args[0][0].result).to.be.eq(125);
        })

        it("should return 25, 5 and 1", () => {
            spy.resetHistory();
            calculator.on("calculationResult", spy);
            calculator.divide(5);
            calculator.divide(5);
            calculator.divide(5);

            expect(spy.calledThrice).to.be.true;
            expect(spy.args[0][0].result).to.be.eq(25);
            expect(spy.args[1][0].result).to.be.eq(5);
            expect(spy.args[2][0].result).to.be.eq(1);
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

        it("should return 16", () => {
            spy.resetHistory();
            calculator.once("calculationResult", spy);
            calculator.exponent(2);

            expect(spy.calledOnce).to.be.true;
            expect(spy.args[0][0].result).to.be.eq(16);
        })

        it("should return 256, 4096 and 262.144", () => {
            spy.resetHistory();
            calculator.on("calculationResult", spy);
            calculator.exponent(2);
            calculator.exponent(1.5);
            calculator.exponent(1.5);

            expect(spy.calledThrice).to.be.true;
            expect(spy.args[0][0].result).to.be.eq(256);
            expect(spy.args[1][0].result).to.be.eq(4096);
            expect(spy.args[2][0].result).to.be.eq(262144);
        })
    })

    describe("Combination", () => {
        const calculator = new Calculator(0);
        it("should return 7", () => {
            spy.resetHistory();
            calculator.once("calculationResult", spy);
            calculator.add(7);

            expect(spy.calledOnce).to.be.true;
            expect(spy.args[0][0].result).to.be.eq(7);
        })

        it("should return 4", () => {
            spy.resetHistory();
            calculator.once("calculationResult", spy);
            calculator.substract(3);

            expect(spy.calledOnce).to.be.true;
            expect(spy.args[0][0].result).to.be.eq(4);
        })

        it("should return 48", () => {
            spy.resetHistory();
            calculator.once("calculationResult", spy);
            calculator.multiply(12);

            expect(spy.calledOnce).to.be.true;
            expect(spy.args[0][0].result).to.be.eq(48);
        })

        it("should return 32", () => {
            spy.resetHistory();
            calculator.once("calculationResult", spy);
            calculator.divide(1.5);

            expect(spy.calledOnce).to.be.true;
            expect(spy.args[0][0].result).to.be.eq(32);
        })

        it("should return 32.768", () => {
            spy.resetHistory();
            calculator.once("calculationResult", spy);
            calculator.exponent(3);

            expect(spy.calledOnce).to.be.true;
            expect(spy.args[0][0].result).to.be.eq(32768);
        })
    })
})
