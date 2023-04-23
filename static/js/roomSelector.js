//Room selector for Floor 1
for (let i = 101; i <= 120; i++) {
    let roomNum = document.getElementById("Room" + i);
    let roomNumValue = roomNum.textContent;

    roomNum.addEventListener("click", function() {
        roomColor = document.querySelector("#Room" + roomNumValue).style.background;
        if (roomColor == "rgb(255, 198, 196)") {
            console.log("This room can't be accessed.");
        }
        else {
            document.querySelector(".personalTable table").style.display = "table";
            document.querySelector(".submitButton").style.display = "block";
            document.querySelector("#ChosenRoomText").style.display = "contents";
            document.querySelector("#ChosenRoomNumber").style.display = "inline";
            let chosenRoomNumber = document.getElementById("ChosenRoomNumber");
            chosenRoomNumber.value = roomNumValue;
        }
    });
  }

//Room selector for Floor 2
for (let i = 201; i <= 210; i++) {
    let roomNum = document.getElementById("Room" + i);
    let roomNumValue = roomNum.textContent;

    roomNum.addEventListener("click", function() {
        roomColor = document.querySelector("#Room" + roomNumValue).style.background;
        if (roomColor == "rgb(255, 198, 196)") {
            console.log("This room can't be accessed.");
        }
        else {
            document.querySelector(".personalTable table").style.display = "table";
            document.querySelector(".submitButton").style.display = "block";
            document.querySelector("#ChosenRoomText").style.display = "contents";
            document.querySelector("#ChosenRoomNumber").style.display = "inline";
            let chosenRoomNumber = document.getElementById("ChosenRoomNumber");
            chosenRoomNumber.value = roomNumValue;
        }
    });
  }

//Room selector for Floor 3
for (let i = 301; i <= 310; i++) {
    let roomNum = document.getElementById("Room" + i);
    let roomNumValue = roomNum.textContent;

    roomNum.addEventListener("click", function() {
        roomColor = document.querySelector("#Room" + roomNumValue).style.background;
        if (roomColor == "rgb(255, 198, 196)") {
            console.log("This room can't be accessed.");
        }
        else {
            document.querySelector(".personalTable table").style.display = "table";
            document.querySelector(".submitButton").style.display = "block";
            document.querySelector("#ChosenRoomText").style.display = "contents";
            document.querySelector("#ChosenRoomNumber").style.display = "inline";
            let chosenRoomNumber = document.getElementById("ChosenRoomNumber");
            chosenRoomNumber.value = roomNumValue;
        }
    });
  }