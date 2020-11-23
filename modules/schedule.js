class Schedule {
    constructor() {
        const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
        function initializeSchedule() {
            let dataTable = document.createElement("table");
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
}
export default Schedule;