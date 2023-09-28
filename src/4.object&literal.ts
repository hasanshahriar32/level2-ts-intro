const user3: {
  company: "phero"; // literal type
  name: string | 32;
  age: number;
  isMarried: boolean;
  wife?: string;
  //   wife?: string;
  // :? is optional chaining
  // which means string | undefined
} = {
  company: "phero",
  name: "manju",
  age: 50,
  isMarried: true,
  wife: "biwi",
};

console.log(user3);

console.log(user3.wife?.concat("lol"));
console.log(user3.wife?.slice(0, 3));

// to stop rewriting to a value.. use readonly before the key

const user4: {
  company: "phero"; // literal type
  name: string | 32;
  readonly age: number;
  isMarried: boolean;
  wife?: string;
  //   wife?: string;
  // :? is optional chaining
  // which means string | undefined
} = {
  company: "phero",
  name: "manju",
  age: 50,
  isMarried: true,
  wife: "biwi",
};

// user4.age = 345; //error because it is readonly
