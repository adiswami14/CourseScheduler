import Course from './modules/course.js'
import Schedule from './modules/schedule.js'


let schedule = new Schedule();
function outputCourse() {
    let courseName = document.getElementById('coursename').value;
    let profName = document.getElementById('profname').value;
    let startTime = document.getElementById('starttime').value;
    let endTime = document.getElementById('endtime').value;
    var reg = /^\d{2}:\d{2}$/;
    if(courseName != "" && profName != "" && reg.test(startTime) && reg.test(endTime)) {
        let currCourse = new Course(courseName, profName, startTime+" - "+endTime);
        currCourse.output();
        schedule.addCourse(currCourse);
    } else alert("Please fill out the fields given properly!");
}
document.getElementById('submit-button').addEventListener('click', outputCourse, true);