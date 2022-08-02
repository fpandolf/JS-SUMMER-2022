const Members = require("./Members");
const MyStringFunctions = require("./MyStringFunctions");
const Students = require("./Students");

const courseDetails = [
    {
        courseName : 'Automation',
        price : 1000,
        length : 6
    },
    {
        courseName : 'QA',
        price : 2000,
        length : 8
    },
    {
        courseName : 'Mobile',
        price : 3000,
        length : 12
    }
]

class Teachers extends Members {

    static #idValue = 0;

    #teacher = {
        tId : 0,
        tCourseDetails : {
            courseName : '',
            coursePrice : 0,
            courseLength : 0
        },
        tSalary : 0
    };

    /**
     * 
     * age >= 21
     * 
     * teacherCourseName should be Automation, QA or Mobile
     * 
     */
     constructor(teacherName, teacherAge, teacherCountry, teacherCourse, startingSalary) {
        super();
        if (this.#isCourseNameValid(teacherCourse)) {
            const courseData = this.#isCourseNameValid(teacherCourse);
            this.member.name = MyStringFunctions.toTitleCase(teacherName);
            this.member.age = teacherAge;
            this.member.location = teacherCountry.toUpperCase();
            this.#teacher.tCourseDetails.courseName = courseData.courseName;
            this.#teacher.tCourseDetails.coursePrice = courseData.price;
            this.#teacher.tCourseDetails.courseLength = courseData.length;
            this.#teacher.tSalary = startingSalary
            this.#teacher.tId = ++Teachers.#idValue;
            console.log(`\nThank you working for us.\nYour id value is ${this.#teacher.tId}\n`);
        } else {
            console.log("\nPlease check your information and submit again.");
        }
    }

    showMyDetails() {
        console.log(`\nFaculty details:\nId: ${this.#teacher.tId}`);
        super.showMyDetails();
        console.log(`Course name: ${this.#teacher.tCourseDetails.courseName}\nSalary: $${this.#teacher.tSalary}\n`);
    }

    changeTeachingCourse(newCourseName) {
        if (this.#isCourseNameValid(newCourseName)) {
            const courseData = this.#isCourseNameValid(newCourseName);
            this.#teacher.tCourseDetails.courseName = courseData.courseName;
            this.#teacher.tCourseDetails.coursePrice = courseData.price;
            this.#teacher.tCourseDetails.courseLength = courseData.length;
        } console.log( `Updated course name: ${this.#teacher.tCourseDetails.courseName}`);
    }

    #isCourseNameValid(checkForCourse) {
        return courseDetails.find(course => course.courseName.toLowerCase().localeCompare(checkForCourse.toLowerCase()) === 0);
    }

    /**
     * addGrade
     * 
     * input: studentId, grade
     * 
     * if studentId is valid and studentGrade is ''
     *      update student.sGrade = grade (always store grade in Uppercase)
     *      print -> grade is successfully added to student id -> id
     * if studentGrade is NOT ''
     *      then print -> remove grade from the student
     * if studentId is invalid
     *      then print -> Invalid student id  
     * 
     */
    addGrade(studentId, studentGrade) {
        let thisStudent = Students.isStudentIdValid(studentId);

        if (thisStudent && thisStudent.sGrade === '') {
            thisStudent.sGrade === studentGrade;
            console.log(`Grade is successfully added to student id -> ${studentId}`);
        } else if (thisStudent) {
            console.log('Remove grade from the student');
        } else {
            console.log('Invalid student id');
        }
    }

    /**
     * removeGrade
     * 
     * input: studentId
     * 
     * if studentId is valid and studentGrade is NOT ''
     *      update student.sGrade = ''
     *      print -> grade is successfully removed from student id -> id
     * if studentGrade is ''
     *      then print -> Student has no grade
     * if studentId is invalid
     *      then print -> Invalid student id
     * 
     */
     removeGrade(studentId) {
        let thisStudent = Students.isStudentIdValid(studentId);

        if (thisStudent && thisStudent.sGrade !== '') {
            thisStudent.sGrade = '';
            console.log(`\nGrade is successfully removed from student id -> ${studentId}`);
        } else if (thisStudent) {
            console.log('\nStudent has no grade');
        } else {
            console.log('\nInvalid student id');
        }
    }



}
module.exports = Teachers;