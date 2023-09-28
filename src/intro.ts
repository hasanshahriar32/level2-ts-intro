const string = "Hello World!";
console.log(string);
console.log("lol");
let course: string = "Typescript"; // Type annotation
console.log(course);
const isCool: boolean = true;
const age: number = 56;
const eyeColor: string = "brown";
const pets: string[] = ["cat", "dog", "pig"];
const pets2: Array<string> = ["lion", "dragon", "lizard"];
// Tuple
const basket: [string, number] = ["basketball", 10];
// Enum
enum Size {
  Small = 1,
  Medium = 2,
  Large = 3,
}
const sizeName: string = Size[2];
console.log(sizeName); // Displays 'Medium' as its value is 2 above

// Any - !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// Void
let sing = (): void => {
  console.log("lala");
};
const roll = (): void => {
  console.log("rolling");
};

const isAdmin: boolean = true;
const isStudent: boolean = false;

// course = 43; // Error

// primitives
// string
// number
// boolean
// null
// undefined

course = "React";
course = "React Native";

let course2 = "React";
// course2 = 43; // Error78

let courses: string;
courses = "React";
// courses = "React Native";
console.log(courses);
