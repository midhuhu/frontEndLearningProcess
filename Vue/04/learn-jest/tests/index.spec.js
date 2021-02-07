const add = require("../add");

test("1+1等于2", () => {
  const result = add(1, 1);
  expect(result).toBe(2);
});
