function datepopCounterOuter() {
  var count = 0;
  return function datepopCounterInner() {
    count++;
    return count;
  };
}

const counter1 = datepopCounterOuter();
const counter2 = datepopCounterOuter();

console.log(counter1());
console.log(counter1());
console.log(counter2());
console.log(counter2());
