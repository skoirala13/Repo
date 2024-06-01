/*********************************************************************************
* WEB700 – Assignment 2
* I declare that this assignment is my own work in accordance with Seneca Academic Policy.
* No part of this assignment has been copied manually or electronically from any other source
* (including web sites) or distributed to other students.
*
* Name: Siddhant Koirala  Student ID: 143443232   Date: 6/1/2024
*
********************************************************************************/

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Use import.meta.url to get the directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class Data {
    constructor(students, courses) {
        this.students = students;
        this.courses = courses;
    }

    getAllStudents() {
        return new Promise((resolve, reject) => {
            if (this.students.length === 0) {
                reject("no results returned");
            } else {
                resolve(this.students);
            }
        });
    }

    getTAs() {
        return new Promise((resolve, reject) => {
            let TAs = this.students.filter(student => student.TA);
           
            if (TAs.length === 0) {
                reject("no results returned");
            } else {
                resolve(TAs);
            }
        });
    }

    getCourses() {
        return new Promise((resolve, reject) => {
            if (this.courses.length === 0) {
                reject("no results returned");
            } else {
                resolve(this.courses);
            }
        });
    }
}

let dataCollection = null;

export function initialize() {
    return new Promise((resolve, reject) => {
        fs.readFile(path.join(__dirname, '../data/students.json'), 'utf8', (err, studentData) => {
            if (err) {
                reject("unable to read students.json");
                return;
            }
            let students = JSON.parse(studentData);

            fs.readFile(path.join(__dirname, '../data/courses.json'), 'utf8', (err, courseData) => {
                if (err) {
                    reject("unable to read courses.json");
                    return;
                }
                let courses = JSON.parse(courseData);
                dataCollection = new Data(students, courses);
                resolve();
            });
        });
    });
}

export function getAllStudents() {
    return dataCollection.getAllStudents();
}

export function getTAs() {
    return dataCollection.getTAs();
}

export function getCourses() {
    return dataCollection.getCourses();
}
