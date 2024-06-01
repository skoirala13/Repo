
import { initialize, getAllStudents, getTAs, getCourses } from './modules/collegeData.js';

initialize()
    .then(() => {

        return getAllStudents();
    })
    .then(students => {
        console.log(`Successfully retrieved ${students.length} students`);

        return getCourses();
    })
    .then(courses => {
        console.log(`Successfully retrieved ${courses.length} courses`);

        return getTAs();
    })
    .then(TAs => {
        console.log(`Successfully retrieved ${TAs.length} TAs`);
    })
    .catch(err => {
        console.log(err);
    })