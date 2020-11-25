class Schedule {
    constructor() {
        const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
        let dataTable = document.createElement("table");
        dataTable.id = "datatable";
        function initializeSchedule() {
            createTable(dataTable);
            document.body.appendChild(dataTable);
        }
        function createTable(table) {
            let hourCount =0;
            for(let i =0; i<12;i++) {
                let row = table.insertRow();
                for(let j=0;j<8; j++) {
                    let cell = row.insertCell();
                    let text;
                    if(j>0 && i == 0) {
                        text = document.createTextNode(weekdays[j-1]);
                    } else if(j == 0 && i>0) {
                        if(hourCount<12) {
                            var currHour=hourCount+8;
                            var currPlusOne = hourCount+9;
                            if(currHour>12) currHour-=12;
                            if(currPlusOne>12) currPlusOne-=12;

                            if(hourCount < 12) {
                                text = document.createTextNode(currHour+":00 - "+currPlusOne+":00");
                                hourCount++;
                            }
                        }
                    } else text = document.createTextNode("");
                    cell.appendChild(text);
                }
            }
        }
        initializeSchedule();
    }
    addCourse(course) {
        let table = document.getElementById("datatable");
        let days = this.weekOfDay(course);
        let startRow, endRow;
        for(var i =0; i<table.rows.length; i++) {
            let str = table.rows[i].cells[0].innerHTML;
            let dateStart = str.substring(0,5).trim();
            let dateEnd = str.substring(str.length-5, str.length).trim();
            if(course.startdate === dateStart )  {
                startRow = i;
            }
            if(course.enddate === dateEnd )  {
                endRow = i;
            }
        }
        for(let k = 0;k<days.length;k++) {
            let j = days[k];
            for(let i = startRow; i<=endRow;i++) {
                table.rows[i].cells[j].innerHTML = "Course Name: "+course.name+"<br>Professor: "+course.profName;
            }
        }
    }
    weekOfDay(course) {
        var days = [];
        var str = course.days;
        if(str.includes("M")) {
            days.push(1);
        }
        if(str.includes("T")) {
            days.push(2);
        }
        if(str.includes("W")) {
            days.push(3);
        }
        if(str.includes("R")) {
            days.push(4);
        }
        if(str.includes("F")) {
            days.push(5);
        }
        if(str.includes("S")) {
            days.push(6);
        }
        if(str.includes("U")) {
            days.push(7);
        }
        return days;
    }
}
export default Schedule;