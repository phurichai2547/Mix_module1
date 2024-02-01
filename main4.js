// Practice 01 -> สร้างตัวแปร height และ weight และคำนวณดัชนีมวลกาย (BMI) โดยใช้สูตร BMI = weight / (height/100)^2
function calculateBMI(height, weight) {
    let BMI = weight / Math.pow(height / 100, 2);
    return BMI;
}
let height = 174;
let weight = 70;

let BMIResult = calculateBMI(height, weight);
console.log(BMIResult);

// Practice 02 -> เขียนโปรแกรมที่รับคะแนนสอบ (score) จากผู้ใช้ และแสดงผลว่าผู้ใช้ได้เกรดอะไร (A, B, C, D, F) โดยใช้เกณฑ์ดังนี้:
A: 80 - 100
B: 70 - 79
C: 60 - 69
D: 50 - 59
F: 0 - 49

function calculateGrade(score) {
    if (score >= 80 && score <= 100) {
        return 'A';
    } else if (score >= 70 && score <= 79) {
        return 'B';
    } else if (score >= 60 && score <= 69) {
        return 'C';
    } else if (score >= 50 && score <= 59) {
        return 'D';
    } else if (score >= 0 && score <= 49) {
        return 'F';
    } else {
        return 'ไม่สามารถกำหนดเกรดได้';
    }
}

let score = 56;
let grade = calculateGrade(score);

console.log(`คะแนนสอบ: ${score}`);
console.log(`เกรดที่ได้: ${grade}`);

