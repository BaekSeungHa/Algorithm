console.log(this);

function square(number) {
  console.log(this);
  return number * number;
}

square(2);

const person = {
  name: "lee",
  getName() {
    console.log(this);
    return this.name;
  },
};

console.log(person.getName());

function Person(name) {
  this.name = name;
  console.log(this);
}

const me = new Person("Baek");
