const students = [
    {
        name: 'Sophia',
        attendance: [true, true, false, true, true],
        testScores: [88, 92, 85, 78, 90]
    },
    {
        name: 'Mason',
        attendance: [true, true, true, true, false],
        testScores: [70, 82, 88, 75, 62]
    },
    {
        name: 'Isabella',
        attendance: [true, false, false, true, true],
        testScores: [68, 71, 70, 60, 78]
    },
    {
        name: 'Liam',
        attendance: [true, true, true, true, true],
        testScores: [90, 87, 92, 88, 95]
    },
    {
        name: 'Olivia',
        attendance: [true, true, true, true, false],
        testScores: [72, 78, 75, 80, 62]
    }
]
function getAttendanceRate(student) {
    const pass = student.attendance.filter((el) => el === true, 0).length;
    const percentage = pass / student.attendance.length * 100;
    return percentage;
}
console.log(getAttendanceRate(students[0]));

function getAvgScore(student) {
    const totalScore = student.testScores.reduce((total, el) => total + el, 0);
    const avgScore = totalScore / student.testScores.length;
    return avgScore
}
console.log(getAvgScore(students[0]));

function underPerformStudent(students) {
    const transform = students.map((el) => {
        return {
            name: el.name,
            avgScore: getAvgScore(el),
            attendanceRate: getAttendanceRate(el),
        }
    }
    )
    const ikkew = transform.filter((el) =>
        el.avgScore < 80 && el.attendanceRate < 70)
    return ikkew;
}
console.log(underPerformStudent(students));
