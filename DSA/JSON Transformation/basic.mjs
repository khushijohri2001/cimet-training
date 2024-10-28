//1. Extract all student names and their GPAs (calculated from grades)

// Calculate GPA based on assignments (40%), midterm (30%), and final (30%)

// GPA = (assignment weightage + midterm weightage + final weightage) / 20

// OUTPUT: [{name, id, gpa}, {name, id, gpa}...]




//2. Create a list of all courses with their schedules

// OUTPUT: [ 
//     {courseId, title, credits, schedule: {days: [], time, room} }, 
//     {courseId, title, credits, schedule: {days: [], time, room} },...
// ]

//3. Generate a faculty directory with contact inOUTPUTion

// OUTPUT: [ 
//     {departmentName, departmentId, faculty: {name, id, email, qualifications: [], researchAreas: []} }, 
//     {departmentName, departmentId, faculty: {name, id, email, qualifications: [], researchAreas: []} }..., 
// ]

import { universityData } from "./university-data.mjs";

const calculateGPA = (data) => {
    const result = [];

    for (let i = 0; i < data.departments.length; i++) {
        for (let j = 0; j < data.departments[i].courses.length; j++) {
            for (let k = 0; k < data.departments[i].courses[j].students.length; k++) {
                let currentStudentData = data.departments[i].courses[j].students[k];

                let id = currentStudentData.studentId;
                let name = currentStudentData.name;

                let grades = currentStudentData.grades;

                let assignmentAvg = grades.assignments.reduce((acc, cur) => acc + cur, 0) / grades.assignments.length
                let assignmentsWeightage = assignmentAvg * 0.4;

                let midtermWeightage = grades.midterm * 0.3;
                let finalWeightage = grades.final * 0.3;

                let gpa = ((assignmentsWeightage + midtermWeightage + finalWeightage) / 20).toFixed(2);

                result.push({ id: id, name: name, gpa: gpa })
            }

        }
    }

    return result
}


const getSchedule = (data) => {
    const result = [];
    
    for (let i = 0; i < data.departments.length; i++) {
        for (let j = 0; j < data.departments[i].courses.length; j++) {
            const currentCourse = data.departments[i].courses[j];

            result.push({courseId: currentCourse.courseId, title: currentCourse.title, credits: currentCourse.credits, schedule: currentCourse.schedule})
        }
    }

    return result;
}

const getFacultyData = (data) => {
    const result = [];
    
    for (let i = 0; i < data.departments.length; i++) {
            const currentDepartment= data.departments[i];
            const currentFaculty = data.departments[i].head;

            // departmentName, departmentId, faculty: {name, id, email, qualifications: [], researchAreas: []}


            result.push({departmentName: currentDepartment.name, departmentId: currentDepartment.id, faculty: {name: currentFaculty.name, id: currentFaculty.id, email: currentFaculty.email, qualifications: currentFaculty.qualifications, researchAreas: currentFaculty.researchAreas }})
        }

    return result;
}

console.log(getFacultyData(universityData));
// getFacultyData(universityData)