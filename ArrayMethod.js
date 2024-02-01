// map -> สร้างอาร์เรย์ใหม่
const array = [1, 2, 3, 4, 5] 
let second = array.map((el) => el * 2)
console.log(second); // [ 2, 4, 6, 8, 10 ]

// push -> เพิ่มสมาชิกใหม่ไปที่ตำแหน่งสุดท้ายของอาร์เรย์
const animals = ['pigs', 'goats', 'sheep'];
const count = animals.push('cows');
console.log(count);
// Expected output: 4
console.log(animals);
// Expected output: Array ["pigs", "goats", "sheep", "cows"]

// splice() -> เปลี่ยนแปลงสมาชิกในอาร์เรย์โดยการลบหรือเพิ่ม
let array1 = [1, 2, 3, 4, 5]
array1.splice(5) 
console.log(array1);

// concat() -> ผสม (concatenate) อาร์เรย์
let array2 = [1 , 2]
let array3 = [3 , 4]
let newArray = array2.concat(array3)
console.log(newArray);

// includes() -> ตรวจสอบว่าอาร์เรย์มีสมาชิกที่กำหนดหรือไม่, คืนค่า true หรือ false.
let array4 = [1, 2, 3, 4, 5];
let hasThree = array.includes(3); // true
let hasTen = array.includes(10); // false
console.log(hasTen);

// ToUpperCase , ToLowerCase
let sentence = "Phuri Chainikhom"
let uppercaseSentence = sentence.toUpperCase();
console.log(uppercaseSentence); // PHURI CHAINIKHOM

let lowercaseSentence = sentence.toLowerCase();
console.log(lowercaseSentence); // phuri chainikhom