import Course from './modules/course.js'
import Schedule from './modules/schedule.js'


let schedule = new Schedule();
function outputCourse() {
    let courseName = document.getElementById('coursename').value;
    let profName = document.getElementById('profname').value;
    let startTime = document.getElementById('starttime').value;
    let endTime = document.getElementById('endtime').value;
    let daysTaken = document.getElementById('days').value;
    var reg = /^\d{2}:\d{2}$/;
    var capReg = /^[A-Z]+$/;
    if(courseName != "" && profName != "" && reg.test(startTime) && reg.test(endTime) && capReg.test(daysTaken) 
    && convertToMilitaryTime(endTime)>startTime) {
        let currCourse = new Course(courseName, profName, startTime, endTime, daysTaken);
        schedule.addCourse(currCourse);
    } else alert("Please fill out the fields given properly!");
}
function convertToMilitaryTime(time) {
    let militaryTime;
    if(time < "08:00") {
        militaryTime = (parseInt(time)+12)+":00";
    }
    console.log(militaryTime);
    return militaryTime;
}

document.getElementById('submit-button').addEventListener('click', outputCourse, true);