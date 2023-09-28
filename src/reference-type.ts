const names: string[] = ["Max", "Anna"];
const rolls: Array<number> = [1, 2, 3];

rolls.map((roll) => console.log(roll.toString()));

// UNION TYPE
const names2 = ["abul", "kabul", 342, true];
// names2.push(null); err

const user: [number, string] = [232, "haasan"];
//tuple: tuple is special type of array which consists of a set (two element). and used for any type strict case
