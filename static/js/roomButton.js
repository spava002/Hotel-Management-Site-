/*Changes the room layout one to the right for each button press*/
function updateFloor(currentFloor, newFloor) {
    if (currentFloor == newFloor) 
        return;
    
    if (newFloor > currentFloor) {
        if (newFloor == 2 && currentFloor == 1) {
            document.querySelector(".firstFloorTable").style.display = "none";
            document.querySelector(".secondFloorTable").style.display = "table"
        }
        else if (newFloor == 3 && currentFloor == 2) {
            document.querySelector(".secondFloorTable").style.display = "none";
            document.querySelector(".thirdFloorTable").style.display = "table";
        }
    }
    else if (newFloor < currentFloor) {
        if (newFloor == 2 && currentFloor == 3) {
            document.querySelector(".thirdFloorTable").style.display = "none";
            document.querySelector(".secondFloorTable").style.display = "table";
        }
        else if (newFloor == 1 && currentFloor == 2) {
            document.querySelector(".secondFloorTable").style.display = "none";
            document.querySelector(".firstFloorTable").style.display = "table";
        }
    }
    console.log("Updated the floor!");
}

let rightButton = document.getElementById("rightButton");
let leftButton = document.getElementById("leftButton");

let currentFloor = 1;
let newFloor = 1;

rightButton.addEventListener("click", function() {
    event.preventDefault();

    console.log("Right has been clicked!");
    if (currentFloor == 3) 
        currentFloor = currentFloor;
    else {
        newFloor += 1;
        console.log("Current floor: " + currentFloor + " New Floor: " + newFloor);
        updateFloor(currentFloor, newFloor);
        currentFloor += 1;
    }
});

leftButton.addEventListener("click", function() {
    event.preventDefault();

    console.log("Left has been clicked!");
    if (currentFloor == 1)
        currentFloor = currentFloor;
    else {
        newFloor -= 1;
        console.log("Current floor: " + currentFloor + " New Floor: " + newFloor);
        updateFloor(currentFloor, newFloor);
        currentFloor -= 1;
    }
});

