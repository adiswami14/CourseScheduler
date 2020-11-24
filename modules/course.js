class Course {
    constructor(name, profName, startdate, enddate, days) {
        this.name = name;
        this.profName = profName;
        this.startdate = startdate;
        this.enddate = enddate;
        this.days = days;
        trimZeros();
        this.output = function() {
            console.log("The course name is "+name+" and it is taught by "+profName+" at "+startdate+" to "+enddate);
        }
        function trimZeros() {
            if(startdate.indexOf(0) === 0) {
                startdate=startdate.substring(1, startdate.length);
            } 
            if(enddate.indexOf(0) === 0) {
                enddate = enddate.substring(1, enddate.length);
            }
        }
    }
}
export default Course;