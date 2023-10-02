const { expect } = require("chai");
const sinon = require("sinon");
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
    });

    it("should return 13", () => {
      spy.resetHistory();
      calculator.once("calculationResult", spy);
      calculator.add(3);

      expect(spy.calledOnce).to.be.true;
      expect(spy.args[0][0].result).to.be.eq(13);
    });

    it("should return 14 and 16", () => {
      spy.resetHistory();
      calculator.on("calculationResult", spy);
      calculator.add(1);
      calculator.add(2);

      expect(spy.calledTwice).to.be.true;
      expect(spy.args[0][0].result).to.be.eq(14);
      expect(spy.args[1][0].result).to.be.eq(16);
    });
  });

  describe("Subsctraction", () => {
    const calculator = new Calculator(0);
    it("should return -10", () => {
      spy.resetHistory();
      calculator.once("calculationResult", spy);
      calculator.substract(10);
      expect(spy.calledOnce).to.be.true;
      expect(spy.args[0][0].result).to.be.eq(-10);
    });

    it("should return -13", () => {
      spy.resetHistory();
      calculator.once("calculationResult", spy);
      calculator.substract(3);

      expect(spy.calledOnce).to.be.true;
      expect(spy.args[0][0].result).to.be.eq(-13);
    });

    it("should return -14 and -16", () => {
      spy.resetHistory();
      calculator.on("calculationResult", spy);
      calculator.substract(1);
      calculator.substract(2);

      expect(spy.calledTwice).to.be.true;
      expect(spy.args[0][0].result).to.be.eq(-14);
      expect(spy.args[1][0].result).to.be.eq(-16);
    });
  });

  describe("Multiplication", () => {
    const calculator = new Calculator(1);

    it("should return 2", () => {
      spy.resetHistory();
      calculator.once("calculationResult", spy);
      calculator.multiply(2);

      expect(spy.calledOnce).to.be.true;
      expect(spy.args[0][0].result).to.be.eq(2);
    });

    it("should return 8 and 16", () => {
      spy.resetHistory();
      calculator.on("calculationResult", spy);
      calculator.multiply(4);
      calculator.multiply(2);

      expect(spy.calledTwice).to.be.true;
      expect(spy.args[0][0].result).to.be.eq(8);
      expect(spy.args[1][0].result).to.be.eq(16);
    });
  });

  describe("Division", () => {
    const calculator = new Calculator(80);
    it("should return 20 and 10", () => {
      spy.resetHistory();
      calculator.on("calculationResult", spy);
      calculator.divide(4);
      calculator.divide(2);

      expect(spy.calledTwice).to.be.true;
      expect(spy.args[0][0].result).to.be.eq(20);
      expect(spy.args[1][0].result).to.be.eq(10);
    });
  });

  describe("Exponential", () => {
    const calculator = new Calculator(2);
    it("should return 16 and 256", () => {
      spy.resetHistory();
      calculator.on("calculationResult", spy);
      calculator.exponent(4);
      calculator.exponent(2);

      expect(spy.calledTwice).to.be.true;
      expect(spy.args[0][0].result).to.be.eq(16);
      expect(spy.args[1][0].result).to.be.eq(256);
    });
  });

  describe("Combination", () => {
    const calculator = new Calculator(0);
    it("should return 10, 5, 15, 3.75 and 14.1", () => {
      spy.resetHistory();
      calculator.on("calculationResult", spy);
      calculator.add(10);
      calculator.substract(5);
      calculator.multiply(3);
      calculator.divide(4);
      calculator.exponent(2);
      const formattedResult = spy.args[4][0].result.toFixed(1);

      expect(spy.called).to.be.true;
      expect(spy.args[0][0].result).to.be.eq(10);
      expect(spy.args[1][0].result).to.be.eq(5);
      expect(spy.args[2][0].result).to.be.eq(15);
      expect(spy.args[3][0].result).to.be.eq(3.75);
      expect(parseFloat(formattedResult)).to.be.eq(14.1);
    });
  });
});
