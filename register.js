class CourseManagement {
    // constructor()ให้ทำการสร้างตัวแปรcoursesให้มีค่าเริ่มต้นเป็นempty array []
    constructor() {
        this.courses = [];
    }
    // createCourse(courseId,courseTitle, courseTerm)ให้ทำการสร้างobjectของวิชาตามโครงสร้างข้อมูลที่กำหนดไว้ โดยให้รับพารามิเตอร์ courseId,courseTitle
    //,courseTerm ถ้าผู้ใช้ไม่ส่งชื่อวิชา ให้กำหนดค่า defaultเป็น‘untitled’ และcourseTermเป็น‘2-2565’ สำหรับ registeredStudentsให้กำหนดค่าเริ่มต้น
    // เป็นempty array จากนั้นให้เพิ่ม objectวิชา เข้าไปในcourses ให้ returnขนาด  arrayหลังเพิ่ม
    createCourse(courseId, courseTitle = 'untitled', courseTerm = '2-2565') {
        const newCourses = {
            courseId: courseId,
            courseTitle: courseTitle,
            courseTerm: courseTerm,
            registerStudents: []
        };
        this.courses.push(newCourses);
        return this.courses.length;
    }

    registerCourseWithOneStudent(courseId, studentId) {
        const CourseIndex = this.findCourseIndex(courseId);
        if (courseId === -1) {
            return -1;
        }
        this.courses[CourseIndex].registerStudents.push(studentId);
        return this.courses[CourseIndex].registerStudents.length;
    }
    registerCourseWithStudents(courseId, studentId) {
        const courseIndex = this.findCourseIndex(courseId);
        if (courseIndex === -1) return -1;

        this.courses[courseIndex].registeredStudents.push(...studentId);
        return this.courses[courseIndex].registeredStudents.length;
    }
    findCourseIndex(courseId) {
        for (let i = 0; i < this.courses.length; i++) {
            if (this.courses[i].courseId === courseId) {
                return i;
            }
        }
        return -1;
    }
    removeCourse(courseId) {
        const courseIndex = this.findCourseIndex(courseId);
        if (courseIndex === -1) return -1;

        this.courses.splice(courseIndex, 1);
        return courseId;
    }
    getCourses() {
        return this.courses;
    }
}
const cm = new CourseManagement()
console.log(cm.createCourse('INT201', 'Client Side I', '1-2565'))
console.log(cm.createCourse('INT203'))
console.log(cm.registerCourseWithOneStudent('INT201', 1001))
console.log(cm.registerCourseWithOneStudent('INT203', 1001))
console.log(cm.registerCourseWithOneStudent('INT203', 1002))
console.log(cm.registerCourseWithOneStudent('INT203', 1006))
console.log(cm.registerCourseWithOneStudent('INT202', 1002))
console.log(cm.registerCourseWithStudents('INT201', [1003, 1005]))
console.log(cm.registerCourseWithStudents('INT202', [1003, 1005]))
console.log(cm.removeCourse('INT202'))
console.log(cm.getCourses())
console.log(cm.removeCourse('INT203'))