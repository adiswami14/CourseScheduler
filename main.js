import Course from './modules/course.js'
import Schedule from './modules/schedule.js'

function outputCourse() {
    let courseName = document.getElementById('coursename').value;
    let profName = document.getElementById('profname').value;
    let currCourse = new Course(courseName, profName, new Date());
    currCourse.output();
}
document.getElementById('submit-button').addEventListener('click', outputCourse, true);
let schedule = new Schedule();