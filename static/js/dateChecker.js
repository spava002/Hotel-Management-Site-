/*Receives date and verifies it is in mm/dd/yyyy format*/
function checkDate(input, error, inputID) {
    let splitDates = input.split("/");
    let month = null;
    let day = null;
    let year = null;
    let errorMessage = null;
    let errorDiv = document.getElementById(error);
    let currentField = null;

    if (inputID == "StartDate")
        currentField = "arrival date";
    else if (inputID == "FinalDate")
        currentField = "departure date";

    console.log("Currently on: " + inputID);

    if (splitDates.length != 3) {
        errorMessage = " Invalid date(s). Please follow the mm/dd/yyyy format.";
    }
    else
    {
        month = parseInt(splitDates[0]);
        day = parseInt(splitDates[1]);
        year = parseInt(splitDates[2]);

        if (month > 12 || month < 1 || isNaN(month))
        {
            errorMessage = " Invalid month for " + currentField + ".";
        }
        switch (month)
        {
            case 1:
            case 3:
            case 5:
            case 7:
            case 8:
            case 10:
            case 12:
                if (day > 31 || day < 1 || isNaN(day))
                {
                    errorMessage = " Invalid day for " + currentField + ".";
                }
                break;
            case 4:
            case 6:
            case 9:
            case 11:
                if (day > 30 || day < 1 || isNaN(day))
                {
                    errorMessage = " Invalid day for " + currentField + ".";
                }
                break;
            case 2:
                if (day > 28 || day < 1 || isNaN(day))
                {
                    errorMessage = " Invalid day for " + currentField + ".";
                }
                break;
            default:
                break;
        }
        if (!isNaN(year))
        {
            if (year >= 2000)
            {
                if (year < 2023 || year > 2025)
                errorMessage = " Invalid year for " + currentField + ".";
            }
            else
            {
                if (year < 23 || year > 25)
                {
                    errorMessage = " Invalid year for " + currentField + ".";
                }
            }
        }
        else
        {
            errorMessage = " Invalid year for " + currentField + ".";   
        }
        
    }

    if (errorMessage == null && inputID == "FinalDate") {
        // check if final date is before start date
        let startDateInput = document.getElementById("StartDate");
        let startDate = startDateInput.value;
        let startDateParts = startDate.split("/");
        let startMonth = parseInt(startDateParts[0]);
        let startDay = parseInt(startDateParts[1]);
        let startYear = parseInt(startDateParts[2]);
        let finalDate = input;
        let finalDateParts = finalDate.split("/");
        let finalMonth = parseInt(finalDateParts[0]);
        let finalDay = parseInt(finalDateParts[1]);
        let finalYear = parseInt(finalDateParts[2]);
        let startDateObj = new Date(startYear, startMonth-1, startDay);
        let finalDateObj = new Date(finalYear, finalMonth-1, finalDay);
        if (finalDateObj < startDateObj) {
            errorMessage = " Departure date must be after arrival date.";
        }
    }

    if (errorMessage != null) {
        console.log("Error message for " + inputID + ": " + errorMessage);
        error.innerHTML = "";
        appendErrorImg(error);
        error.innerHTML += errorMessage;
        document.querySelector('.dates .inputTable tr:first-child').style.display = 'table-row';
        if (inputID == "StartDate")
            document.querySelector("#StartDate").style.borderColor = "red";
        else if (inputID == "FinalDate")
            document.querySelector("#FinalDate").style.borderColor = "red";
    }
    else {
        error.innerHTML = "";
        document.querySelector('.dates .inputTable tr:first-child').style.display = 'none';
        if (inputID == "StartDate")
            document.querySelector("#StartDate").style.borderColor = "black";
        else if (inputID == "FinalDate")
            document.querySelector("#FinalDate").style.borderColor = "black";
    }

}

/*Adds in error image to the message if error detected*/
function appendErrorImg(error) {
    let errorImg = document.createElement("img");
    errorImg.src = "static/images/errorImg.jpg";
    errorImg.height = window.innerHeight * 0.016;
    errorImg.width = window.innerWidth * 0.01;
    error.appendChild(errorImg);
}



let firstInput = document.getElementById("StartDate");
let firstError = document.getElementById("StartDateError");

let secondInput = document.getElementById("FinalDate");
let secondError = document.getElementById("FinalDateError");

function enableSearchButton() {
    let startDateInput = document.getElementById("StartDate");
    let finalDateInput = document.getElementById("FinalDate");
  
    if (startDateInput.style.borderColor === "black" && finalDateInput.style.borderColor === "black") {
      document.getElementById("searchButton").disabled = false;
    } else {
      document.getElementById("searchButton").disabled = true;
    }
  }
  
firstInput.addEventListener("blur", function() {
    checkDate.call(this, firstInput.value, firstError, firstInput.id);
    enableSearchButton();
});

secondInput.addEventListener("blur", function() {
    checkDate.call(this, secondInput.value, secondError, secondInput.id);
    enableSearchButton();
});

/*function checkForm(event) {
    let firstInput = document.getElementById("StartDate");
    let firstError = document.getElementById("StartDateError");
    
    checkDate.call(this, firstInput.value, firstError, firstInput.id);

    let secondInput = document.getElementById("FinalDate");
    let secondError = document.getElementById("FinalDateError");

    checkDate.call(this, secondInput.value, secondError, secondInput.id);

    if (firstError.innerHTML.trim() !== "" || secondError.innerHTML.trim() !== "" || Date.parse(firstInput.value) > Date.parse(secondInput.value)) {
        event.preventDefault();
    }

    console.log("First input value:", firstInput.value);
    console.log("Second input value:", secondInput.value);
}

let submitButton = document.getElementById("submitDates");
submitButton.addEventListener("click", checkForm);
*/