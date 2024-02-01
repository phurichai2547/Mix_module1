// 1
let numbers = [34, 1, 58, 8, 21, 5, 13, 3, 89, 7];
const number = numbers.find((Element) => Element == 1);
console.log(number);

// 2
let numString = "1234";
let num = "Number"
console.log(num);

// 3
let a = 5, b = 10;
let nums = [a, b]
console.log(a);
console.log(b);

// 4
let value1 = [1, 2, 3];
let value2 = [];
let value3;
console.log(Array.isArray(value1) && value1.length < 0);
console.log(Array.isArray(value2) && value2.length === 0);
console.log(Array.isArray(value3) && value3.length < 0);

// 5
let mixedArray = [42, "hello", { name: "Joe", surname: "Doe" }, true, 56, false, { name: "John", surname: "Smith" }, { name: "Joy", surname: "Stein" }];
mixedArray.forEach(Element => {
    if (typeof Element === 'object' && Element !== null) {
    }
    const { name, surname } = Element;
    console.log(`Name: ${name}, Surname: ${surname}`);
});


// 6
let x = 10;
let y = "20";
let result = x + y;
console.log(result); // 1020
console.log(typeof result); // string

// 7
let person = {
    name: "ikkew",
    age: 20,
    isStudent: true
};
// 7.1
person.hobbies = ["football", "television", "Music"]
// 7.2
person.age = 30
// 7.3
delete person.isStudent

// 9
const peopleObj1 = { name: "John", surname: "Doe" }
const peopleObj2 = { name: "Sarah", surname: "Wilson" }
const peopleObj3 = { name: "David", surname: "Brown" }

if (peopleObj1.name.toLowerCase() === peopleObj2.name.toLowerCase() && peopleObj1.name.toLowerCase() === peopleObj3.name.toLowerCase()); {
    console.log(peopleObj2);
}


// 10
let people = [
    { name: "John", surname: "Doe" },
    { name: "olivia", surname: "Smith" },
    { name: "john", surname: "Johnson" },
    { name: "Sarah", surname: "Wilson" },
    { name: "David", surname: "Brown" },
    { name: "Emily", surname: "Davis" },
    { name: "David", surname: "Miller" },
    { name: "Olivia", surname: "Taylor" },
    { name: "david", surname: "Anderson" }, { name: "Sophia", surname: "Clark" }
];
const targetName = ["John", "Olivia", "david"];
const filterPeople = people.filter(person => targetName.includes(person.name))
console.log(filterPeople);

// 12
// Insert your code here
function uniqueElements(arrayValue) {
    return Array.from(new Set(arrayValue));
}
let number1 = [1, 1, 3, 8, 21, 8, 13, 3, 8, 7];
number1 = uniqueElements(number1);

console.log(number1); // [1, 3, 8, 21, 13, 7]

// 13
let number2 = [1, 1, 3, 8, 21, 8, 13, 3, 8, 7];
const reversed = number2.reverse();
console.log(reversed);

// 14
const users = [
    {id: 1, name: 'John', age: 28},
    {id: 2, name: 'Jane', age: 32},
    {id: 3, name: 'Dave', age: 24},
];
users.forEach(({id, name, age}) => {
    console.log(`ID: ${id}, Name: ${name}, Age: ${age}`);
});

// 15.
const numbers1 = [1,2,3,4,5];
const [first, second, last] = numbers1;
console.log(numbers1);

// 16.
function multiplicationTable(number){
    const table = [];
    for (let i; i <= 12; i++) {
        const result = number * i;
        table.push(`${number} * ${i} = ${result}`)
    }
    return table;
}
console.log(multiplicationTable(2));

