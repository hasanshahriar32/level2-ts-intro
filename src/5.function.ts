//normal function & array function
// normal function

function add(num1: number, num2: number): number {
  return num1 + num2;
}

add(5, 2);

const addArrow = (num1: number, num2: number): number => {
  return num1 + num2;
};

const arrow = [1, 5, 8];
const newArray = arrow.map((e: number): number => e * e);

console.log(arrow.reduce((acc: number, curr: number): number => acc + curr));

const person: {
  name: string;
  balance: number;
  addBalance(money: number): string;
  // if there is nothing to return, then u can use void
} = {
  name: "mexba",
  balance: 5,
  addBalance(money) {
    return `my new balance is ${this.balance + money}`;
  },
};
console.log(person.addBalance(12));
