const stringLength = require('./stringLength');

test('strings char', () => {
  expect(stringLength("have fun")).toBe(8);
});
test('strings error', () => {
  expect(stringLength("should be more than 1")).toBeGreaterThan(1);
  expect(stringLength("less<10")).toBeLessThan(10);
  
});