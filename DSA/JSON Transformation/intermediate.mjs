//1. Calculate average grades for each course

import { universityData } from "./university-data.mjs";

// Grade distribution:
// A: 90 and above
// B: 80 - 89
// C: 70 - 79
// D: 60 - 69
// F: Below 60

// OUTPUT: [
//     {
//       courseId,
//       courseName
//       totalStudents"
//       averages": {
//         "assignments",
//         "midterm",
//         "final",
//         "overall"
//       },
//       "gradeDistribution": {
//         "A": 1,
//         "B": 0,
//         "C": 0,
//         "D": 0,
//         "F": 0
//       }
//     },
//     {
//       "courseId",
//       "courseName",
//       "totalStudents",
//       "averages": {
//         "assignments",
//         "midterm",
//         "final",
//         "overall"
//       },
//       "gradeDistribution": {
//         "A": 0,
//         "B": 1,
//         "C": 1,
//         "D": 0,
//         "F": 0
//       }
//     }
//   ]


const getAvgGrade = (data) => {
    const result = [];

    for (let i = 0; i < data.departments.length; i++) {
        for (let j = 0; j < data.departments[i].courses.length; j++) {
            const currentCourse = data.departments[i].courses[j];
            let totalAssignments = 0, totalMidterm = 0, totalFinal = 0, totalOverall = 0, count = 0;
            let totalAssignmentsAvg = 0, totalMidtermAvg = 0, totalFinalAvg = 0;
            let gradeObj = {
                A: 0,
                B: 0,
                C: 0,
                D: 0,
                E: 0
            }

            for (let k = 0; k < data.departments[i].courses[j].students.length; k++) {
                count++;

                let currentStudentData = data.departments[i].courses[j].students[k];

                let grades = currentStudentData.grades;

                let singleAssignmentAvg = grades.assignments.reduce((acc, cur) => acc + cur, 0) / grades.assignments.length;
                totalAssignments += singleAssignmentAvg;

                let singleMidterm = grades.midterm;
                totalMidterm += singleMidterm;

                let singleFinal = grades.final;
                totalFinal += singleFinal;

                let singleOverall = (singleAssignmentAvg * 0.4 + singleMidterm * 0.3 + singleFinal * 0.3);

                let grade = getGrade(singleOverall);
                gradeObj[grade]+=1

            }
            totalAssignmentsAvg = totalAssignments / count;
            totalMidtermAvg = totalMidterm / count;
            totalFinalAvg = totalFinal / count;

            totalOverall = (totalAssignmentsAvg * 0.4 + totalMidtermAvg * 0.3 + totalFinalAvg * 0.3);

            result.push({
                courseId: currentCourse.courseId, 
                courseName: currentCourse.title, 
                totalStudents: currentCourse.students.length, 
                averages: {
                    assignments: totalAssignmentsAvg,
                    midterm: totalMidtermAvg,
                    final: totalFinalAvg,
                    overall: totalOverall
                },
                gradeDistribution: gradeObj
            })
        }
    }

    return result;
}

const getGrade = (marks) => {
    if( marks >= 90){
        return "A"
    } else if(marks >= 80){
        return "B"
    } else if(marks >= 70){
        return "C"
    } else if(marks >= 60){
        return "D"
    } else{
        return "E"
    }
}

console.log(getAvgGrade(universityData));
// getAvgGrade(universityData)
