import fs from 'fs/promises';
import path from "path";
import { fileURLToPath } from 'url';

// Use import.meta.url to get the directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class Data {
    constructor(students, courses) {
        this.students = students;
        this.courses = courses;
    }
}

let dataCollection = new Data();

async function initialize() {
    try {
      const studentData = await fs.readFile(path.join(__dirname, '../data/students.json'), 'utf8');
      const students = JSON.parse(studentData);
      // console.dir(students, { depth: null, colors: true });
  
      const courseData = await fs.readFile(path.join(__dirname, '../data/courses.json'), 'utf8');
      const courses = JSON.parse(courseData);
      // console.dir(courses, { depth: null, colors: true });
  
      // console.log(`[initialize] ${students}`);
    dataCollection = new Data(students, courses);
     
    } catch (error) {
      console.error('Error initializing college data:', error.message);
      throw new Error(error.message);
    }
  }

const getAllStudents = () => {
    return new Promise((resolve, reject) => {
        if (dataCollection && dataCollection.students.length > 0) {
            resolve(dataCollection.students);
        } else {
            reject("No results.");
        }
    });
};

const getTAs = () => {
    return new Promise((resolve, reject) => {
        if (dataCollection) {
            const TAs = dataCollection.students.filter(student => student.TA === true);
            if (TAs.length > 0) {
                resolve(TAs);
            } else {
                reject("No results.");
            }
        } else {
            reject("Data not initialized.");
        }
    });
};

const getCourses = () => {
    return new Promise((resolve, reject) => {
        if (dataCollection && dataCollection.courses.length > 0) {
            resolve(dataCollection.courses);
        } else {
            reject("No results returned.");
        }
    });
};

const getStudentsByCourse = (course) => {
    return new Promise((resolve, reject) => {
        if (dataCollection) {
            let selectedStudents = []
            let data = dataCollection.courses;
            console.log(data);
            // console.log(dataCollection)
            for (let item of data)
            if(item.courseId == course){
            selectedStudents.push(item)
            }
            console.log(selectedStudents)          
              if (selectedStudents.length > 0) {
                resolve(selectedStudents);
            } else {
                reject("No results returned.");
            }
        } else {
            reject("Data not initialized.");
        }
    });
};

const getStudentsByNum = (num) => {
    return new Promise((resolve, reject) => {
        if (dataCollection) {
            // const students = dataCollection.students.filter(student => student.studentNum === num);
            let selectedStudents = []
            let data = dataCollection.students;
            console.log(data);
            // console.log(dataCollection)
            for (let item of data)
            if(item.studentNum == num){
            selectedStudents.push(item)
            }
            console.log(selectedStudents)
    
            if (selectedStudents.length > 0) {
                resolve(selectedStudents);
            } else {
                reject("No results returned.");
            }
        } else {
            reject("Data not initialized.");
        }
    });
};

export {
    initialize,
    getAllStudents,
    getTAs,
    getCourses,
    getStudentsByCourse,
    getStudentsByNum
};
