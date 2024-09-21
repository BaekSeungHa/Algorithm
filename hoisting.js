// TDZ
console.log(temp); // ReferenceError: Cannot access 'temp' before initialization
// TDZ
let temp = 0;

{
  // TDZ
  console.log(temp); // ReferenceError: Cannot access 'temp' before initialization
  // TDZ
  let temp = 5;
}
