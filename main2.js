// Practice-01 
// Create a program that performs the following operations on an array of integers
// Find the sum of all elements in the array
// Calculate the average of the elements
// Identify and print the largest and smallest elements in the array

let nums = [1, 2, 3, 4, 5]
// sum
const sum = nums.reduce((sum, nums) => sum + nums, 0)
console.log(sum);
// average
const avr = sum / nums.length
console.log(avr);
// max
console.log(Math.max(...nums));
// min
console.log(Math.min(...nums));

// Practice-02
// Write a program that swap the values of two variables without using a temporary variable. The program should take two input values ,
// swap their contents, and then print the updated values 
function swap (a,b) {
    a = a + b
    b = a - b
    a = a - b
    return [a,b]
}
console.log(swap(1,2));

// sort  แบบ ascending น้อยไปมาก
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
months.sort((a,b)=> {
    const monthOrder = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return monthOrder.indexOf(a) - monthOrder.indexOf(b);
});
console.log(months);

// sort แบบ descending มากไปน้อย
const months1 = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
months1.sort((a,b) => {
    const monthsOrder = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return monthsOrder.indexOf(b) - monthsOrder.indexOf(a);
});
console.log(months1);

// filter การกรองชื่อโดยต้องการแค่บางคน
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
const targetName = ["John" , "Olivia" , "david"]
const filterPeople = people.filter(person => targetName.includes(person.name))
console.log(filterPeople);

// 
