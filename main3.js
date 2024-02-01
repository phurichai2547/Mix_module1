// 1. Variables (ตัวแปร)
// ประกาศตัวแปรชื่อ age และกำหนดค่าเป็น 25
let age = 25;

// ประกาศตัวแปรชื่อ name และกำหนดค่าเป็น "John"
let name = "John";

// ประกาศตัวแปรชื่อ isStudent และกำหนดค่าเป็น true
let isStudent = true;


// 2. Data Types (ประเภทข้อมูล)
// Number (จำนวน)
let age1 = 25;

// Float (ทศนิยม)
let height1 = 175.5;

// String (ข้อความ)
let name1 = "John";

// Boolean (ค่าตรรกะ)
let isStudent1 = true;


// 3. Operators (ตัวดำเนินการ)
// Arithmetic Operators (ตัวดำเนินการทางคณิตศาสตร์)
let result = 10 + 5;  // บวก
result = 10 - 5;  // ลบ
result = 10 * 5;  // คูณ
result = 10 / 5;  // หาร

// Comparison Operators (ตัวดำเนินการเปรียบเทียบ)
let isEqual = (10 === 5);  // เท่ากัน (เช็คค่าและประเภทข้อมูล)
let isNotEqual = (10 !== 5);  // ไม่เท่ากัน
let isGreater = (10 > 5);  // มากกว่า
let isLess = (10 < 5);  // น้อยกว่า

// Logical Operators (ตัวดำเนินการตรรกะ)
let logicalAnd = (true && false);  // และ
let logicalOr = (true || false);  // หรือ
let logicalNot = !true;  // ไม่


//4. Expressions (นิพจน์)
// Arithmetic Expression (นิพจน์ทางคณิตศาสตร์)
let result1 = (10 + 5) * 2;

// Boolean Expression (นิพจน์ทางตรรกะ)
let isAdult = age >= 18 && !isStudent;

// 5. Control Structures (โครงสร้างควบคุม)
// Conditional Statements (คำสั่งเงื่อนไข)
if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}

// Loop (วงรอบ)
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// While Loop (วงรอบทำซ้ำแบบ While)
let count = 0;
while (count < 5) {
    console.log(count);
    count++;
}

