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

                            if(currHour > 12) {
                                currHour -= 12;
                            }
                            if(currPlusOne > 12) {
                                currPlusOne -= 12;
                            }

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
        console.log("add couse");
        let table = document.getElementById("datatable");
        for(var i =0; i<table.rows.length; i++) {
            for(var j = 0; j< table.rows[i].cells.length; j++) {
                if(i>=1 && j>0) {
                    //alert(course.date);
                    //alert(table.rows[i].cells[0].innerHTML);
                    if(table.rows[i].cells[0].innerHTML == course.date) {
                        table.rows[i].cells[j].innerHTML = course.name+" "+course.profName;
                    }
                }
            }
        }
    }
}
export default Schedule;