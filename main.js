import Course from './modules/course.js'
import Schedule from './modules/schedule.js'


let schedule = new Schedule();
function outputCourse() {
    let courseName = document.getElementById('coursename').value;
    let profName = document.getElementById('profname').value;
    let startTime = document.getElementById('starttime').value;
    let endTime = document.getElementById('endtime').value;
    let daysTaken = document.getElementById('days').value;
    var reg = /^\d{1,2}:\d{2}$/;
    var capReg = /^[A-Z]+$/;
    var courseReg = /[A-Z]{2,}\d{3}$/; 
    if(courseReg.test(courseName) && profName != "" && reg.test(startTime) && reg.test(endTime) && capReg.test(daysTaken) 
    && convertToMilitaryTime(addZeros(endTime))>addZeros(startTime)) {
        let currCourse = new Course(courseName, profName, startTime, endTime, daysTaken);
        schedule.addCourse(currCourse);
    } else alert("Please fill out the fields given properly!");
}
function convertToMilitaryTime(time) {
    let militaryTime;
    if(time < "8:00") {
        militaryTime = (parseInt(time)+12)+":00";
    } else return time;
    return militaryTime;
}
function addZeros(time) {
    let str = time.substring(0,2);
    if(str.charAt(1) === ':') {
        time = "0"+time;
    }
    return time;
}

document.getElementById('submit-button').addEventListener('click', outputCourse, true);