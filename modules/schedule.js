class Schedule {
    constructor() {
        function initializeSchedule() {
            let dataTable = document.createElement("table");
            dataTable.innerHTML = "table";
            document.body.appendChild(dataTable);
            console.log("Schedule initialized!");
        }
        initializeSchedule();
    }
}
export default Schedule;