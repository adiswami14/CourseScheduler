class Course {
    constructor(name, profName, date) {
        this.name = name;
        this.profName = profName;
        this.date = date;
        this.output = function() {
            console.log("The course name is "+name+" and it is taught by "+profName+" at "+date);
        }
    }
}
export default Course;