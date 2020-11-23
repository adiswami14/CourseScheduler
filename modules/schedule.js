class Schedule {
    constructor() {
        const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
        function initializeSchedule() {
            let dataTable = document.createElement("table");
            createTable(dataTable);
            document.body.appendChild(dataTable);
        }
        function createTable(table) {
            for(let i =0; i<12;i++) {
                let row = table.insertRow();
                for(let j=0;j<8; j++) {
                    let cell = row.insertCell();
                    let text;
                    if(j>0 && i == 0) {
                        text = document.createTextNode(weekdays[j-1]);
                    } else if(j == 0 && i>0) {
                        text = document.createTextNode("Time");
                    } else text = document.createTextNode("");
                    cell.appendChild(text);
                }
            }
        }
        initializeSchedule();
    }
}
export default Schedule;