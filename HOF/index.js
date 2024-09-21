function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function memoize(func) {}

const adder = memoize(add);
const subtractor = memoize(subtract);

adder(1, 3);
adder(1, 3);

subtractor(1, 3);
