function updateBusyRooms(startDate, finalDate, rows) {
    for (let i = 1; i < rows.length; i++) {
        let startDateData = new Date(rows[i].cells[1].textContent).getTime();
        let finalDateData = new Date(rows[i].cells[2].textContent).getTime();
        startDate = new Date(startDate).getTime();
        finalDate = new Date(finalDate).getTime();

        let roomNumber = "#Room" + rows[i].cells[3].textContent;

        if ((startDateData <= finalDate && finalDate <= finalDateData) || (startDateData <= startDate && startDate <= finalDateData)) {
            console.log("Input date conflicts with existing date(s).");
            document.querySelector(roomNumber).style.background = "#ffc6c4";
            document.querySelector(roomNumber).style.cursor = "default";
        }
    }
}

//Updates Floor 1
function updateEmptyFloorRooms(rows, cols) {
    for (let i = 1; i < rows.length; i++) {
        for (let j = 0; j < cols; j++) {
            let cellContent = rows[i].cells[j].textContent;
            if (/^\d+$/.test(cellContent)) {
                roomNumber = "#Room" + cellContent
                document.querySelector(roomNumber).style.background = "#90EE90";
                document.querySelector(roomNumber).style.cursor = "pointer";
            }
        }
    }
}

//Updates Floors 2 and 3
function updateEmptyServiceFloorRooms(rows, cols) {
    for (let i = 1; i < rows.length; i++) {
        for (let j = 0; j < cols; j++) {
            if (i != 3 && i != 4) {
                let cellContent = rows[i].cells[j].textContent;
                if (/^\d+$/.test(cellContent)) {
                    roomNumber = "#Room" + cellContent
                    document.querySelector(roomNumber).style.background = "#90EE90";
                    document.querySelector(roomNumber).style.cursor = "pointer";
                }
            }
        }
    }
}

let startDate = document.getElementById("StartDate");
let finalDate = document.getElementById("FinalDate");
let dataTable = document.getElementById("dataTable");
let firstFloorTable = document.getElementById("firstFloorTable");
let secondFloorTable = document.getElementById("secondFloorTable");
let thirdFloorTable = document.getElementById("thirdFloorTable");

let dataRows = dataTable.rows;
let firstRows = firstFloorTable.rows;
let secondRows = secondFloorTable.rows;
let thirdRows = thirdFloorTable.rows;

let datesButton = document.getElementById("submitDates");

datesButton.addEventListener("click", function() {
    event.preventDefault();

    //Updates First Floor Rooms
    updateEmptyFloorRooms(firstRows, 7);
    updateBusyRooms(startDate.value, finalDate.value, dataRows);

    //Updates Second Floor Rooms
    updateEmptyServiceFloorRooms(secondRows, 7);
    updateBusyRooms(startDate.value, finalDate.value, dataRows);

    //Updates Third Floor Rooms
    updateEmptyServiceFloorRooms(thirdRows, 7);
    updateBusyRooms(startDate.value, finalDate.value, dataRows);
});