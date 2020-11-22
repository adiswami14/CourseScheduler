import Course from './modules/course.js'
import Schedule from './modules/schedule.js'

let currCourse = new Course("CS126", "Woodley", new Date());
currCourse.output();
let schedule = new Schedule();