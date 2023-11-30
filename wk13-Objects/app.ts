// Primitive types: They are passed by value
let a = 1;
let b = a;
a = 2;
console.log(a)
console.log(b)

const x = 5;
let y = x;
console.log(x === y);
y = 3
console.log(x)


// Passed by reference: When we passed non primitive, we passed the value by reference
let x1 = { n: 5 };
let y1 = x1;
console.log(x1 === y1); //The are both pointing to the same location in the memory
y1 = { n: 5 };
console.log(x1 === y1); //They are now pointing to different location in the memory

// You can mutate an object by changing one of it property value
y1.n = 45;
console.log(y1);


let x2 = { n: 20 };
let y2 = x2;

y2.n = 30;
console.log(x2)
console.log(y2)
console.log(x2 == y2);
y2 = { n: 30 };
console.log(x2 == y2);


// Creating an object
const fName = "Sahrfear";
const x3 = { [fName]: fName }
console.log(x3);


const x4 = { fName }; //Evulate the value from the variable called first name and give me the same result
console.log(x4);


// Object.create: Create an object from another object
const sahr = { firstName: "Sahrfear", lastName: "Macarthy" };
const person = Object.create(sahr); //Object person is created that is inhereting from the object sahr
console.log(person); //Return an enpty object: It has no property

console.log(person.firstName); //will return Sahrfear

person.firstName = "kai";
console.log(person);
console.log(person.firstName);
console.log(sahr);


// Object.assign: Take an object and merge it to another object: It takes two parameters
let asaad = { first: "Asaad", last: "Saad" };
let theo = { first: "Theo" };

let personObj = Object.assign(asaad, theo); //takes theo and add it to the person object
console.log(personObj);
console.log(asaad);
console.log(personObj === asaad); //They are both equal since they both have the same reference


personObj = Object.assign({}, asaad);
let personObj2 = { ...asaad } //the same as Object.assign({},asaad);


console.log(personObj) //Will have the same values that were merge
console.log(asaad === personObj); //return false because the value was merge to a new obejct hence they both point to different location in the memory

console.log(personObj2);
console.log(personObj2 === asaad);

let newO = { ...asaad, ...theo };  //You can also use the spread operator to achieve the same result
console.log(newO);

console.log(" ")
// Object.assign and spread operators can be use to do shallow clonning: Only the first level is copy. the rest is shared
// Shallow Clone
const asaads = {
    name: "Asaad Saad",
    stats: { height: 180, weight: 70 }
};
let obj1 = Object.assign({}, asaads); //shallow clone
let obj2 = { ...asaads }; //shallow clone
obj1.name = 'John';
obj2.name = 'Anne';
console.log(asaads); // { name: 'Asaad Saad', stats: { height: 180, weight: 70 } }
console.log(obj1); // { name: 'John', stats: { height: 180, weight: 70 } }
console.log(obj2); //  { name: 'Anne', stats: { height: 180, weight: 70 } }

console.log(" ");
obj1.stats.height = 150;
obj2.stats.weight = 65;
console.log(asaads); //{ name: 'Asaad Saad', stats:{height: 150, weight: 65 }}
console.log(obj1);  //{ name: 'John', stats: { height: 150, weight: 65 } }
console.log(obj2);  //{ name: 'Anne', stats: { height: 150, weight: 65 } }


// Deep Clone: Clone the object to the deepest level
console.log(" ")
obj1 = JSON.parse(JSON.stringify(asaads));
obj2 = structuredClone(asaads)
obj1.stats.height = 69;
obj2.stats.weight = 20;
console.log(asaads);
console.log(obj1);
console.log(obj2);

// Keys: return an array of all the keys, 
//values: Return an array of all the values 
//enteries: Return an array of keys and values
console.log(" ");
console.log(Object.keys(asaads));
console.log(Object.values(obj1));
console.log(Object.entries(obj2));


// Object.freeze: Prevent and object from being modified
Object.freeze(asaads);
asaads.name = "alves"
console.log(asaads)