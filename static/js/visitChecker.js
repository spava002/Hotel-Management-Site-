function checkReservationNumber(reservationNumber, errorMessage) {
    let error = false;

    if (reservationNumber.length != 6) {
        error = true;
        console.log("Size is incorrect!")
    }
    else {
        let reservationLetters = reservationNumber.substring(0, 3);
        let reservationDigits = reservationNumber.substring(3, 6);

        console.log(reservationLetters);
        console.log(reservationDigits);

        for (let i = 0; i < reservationLetters.length; i++) {
            if (!(/[a-zA-Z]/.test(reservationLetters[i]))) {
                error = true;
                break;
            }
        }

        for (let i = 0; i < reservationDigits.length; i++) {
            if (!(/\d/.test(reservationDigits[i]))) {
                error = true;
                break;
            }
        }
    }

    if (error) {
        console.log("Reservation number is incorrect!");
        errorMessage.innerHTML = "";
        appendErrorImg(errorMessage);
        errorMessage.innerHTML += " Enter a valid reservation number.";
        document.querySelector("#ReservationNumber").style.borderColor = "red";
        document.querySelector("#visitFirstRow").style.display = "contents";
    }
    else {
        console.log("Reservation number is correct!");
        document.querySelector("#ReservationNumber").style.borderColor = "black";
        document.querySelector("#visitFirstRow").style.display = "none";
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

let reservationNumber = document.getElementById("ReservationNumber");

visitErrorMessage = document.getElementById("visitErrorMessage");

reservationNumber.addEventListener("blur", function() {
    checkReservationNumber(reservationNumber.value, visitErrorMessage);
});