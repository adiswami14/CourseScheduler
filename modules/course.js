class Course {
    constructor(name, profName, startdate, enddate, days) {
        this.name = name;
        this.profName = profName;
        this.startdate = startdate;
        this.enddate = enddate;
        this.days = days;
        this.output = function() {
            console.log("The course name is "+name+" and it is taught by "+profName+" at "+startdate+" to "+enddate);
        }
    }
}
export default Course;