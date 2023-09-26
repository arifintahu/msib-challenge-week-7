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

        it("should return 13", () =>{
            spy.resetHistory();
            calculator.once("calculationResult", spy);
            calculator.add(3);

            expect(spy.calledOnce).to.be.true;
            expect(spy.args[0][0].result).to.be.eq(13);
        })

        it("should return 14 and 16", () =>{
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
    })

    describe("Multiplication", () => {
    })

    describe("Division", () => {
    })

    describe("Exponential", () => {
    })

    describe("Combination", () => {
    })
})
