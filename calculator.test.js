const Calculator = require('./Calculator');

describe('calculator', () => {
  test('should add two numbers', () => {
    expect(Calculator.add(6, 6)).toBe(12);
    expect(Calculator.add(15, 10)).toBe(25);
  });

  test('should subract two numbers', () => {
    expect(Calculator.subtract(2, 3)).toBe(-1);
    expect(Calculator.subtract(7, 1)).toBe(6);
  });

  test('should multiply two numbers', () => {
      expect(Calculator.multiply(5, 3)).toBe(15);
      expect(Calculator.multiply(4, 1)).toBe(4);
    });

  test('should divide two numbers', () => {
      expect(Calculator.divide(20, 5)).toBe(4);
      expect(Calculator.divide(5, 1)).toBe(5);
      });
});