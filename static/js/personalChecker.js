function checkFirstName(firstName, errorMessage) {
    if (/\d/.test(firstName) || firstName.length == 0) {
        console.log("First name is incorrect!");
        errorMessage.innerHTML = "";
        appendErrorImg(errorMessage);
        errorMessage.innerHTML += " Enter a valid first name.";
        document.querySelector("#FirstName").style.borderColor = "red";
        document.querySelector("#personalFirstRow").style.display = "contents";
    }
    else {
        console.log("First name doesn't have numbers!");
        document.querySelector("#FirstName").style.borderColor = "black";
        document.querySelector("#personalFirstRow").style.display = "none";
    }
}

function checkLastName(lastName, errorMessage) {
    if (/\d/.test(lastName) || lastName.length == 0) {
        console.log("Last name has numbers!");
        errorMessage.innerHTML = "";
        appendErrorImg(errorMessage);
        errorMessage.innerHTML += " Enter a valid last name.";
        document.querySelector("#LastName").style.borderColor = "red";
        document.querySelector("#personalFirstRow").style.display = "contents";
    }
    else {
        console.log("Last name is correct!");
        document.querySelector("#LastName").style.borderColor = "black";
        document.querySelector("#personalFirstRow").style.display = "none";
    }
}

function checkPhone(phone, errorMessage) {
    phone = phone.replace(/-/g, "");
    if (/[a-zA-Z]/.test(phone) || phone.length != 10) {
        console.log("Phone has is incorrect!");
        errorMessage.innerHTML = "";
        appendErrorImg(errorMessage);
        errorMessage.innerHTML += " Enter a valid phone number.";
        document.querySelector("#Phone").style.borderColor = "red";
        document.querySelector("#personalFirstRow").style.display = "contents";
    }
    else {
        console.log("Phone is correct!");
        document.querySelector("#Phone").style.borderColor = "black";
        document.querySelector("#personalFirstRow").style.display = "none";
    }
}

function checkEmail(email, errorMessage) {
    if (/^[^\s@]+@[^\s@]+\.[^\s@]{1,}$/.test(email)) {
        console.log("Email is correct!");
        document.querySelector("#Email").style.borderColor = "black";
        document.querySelector("#personalFirstRow").style.display = "none";
    }
    else {
        console.log("Email is incorrect!");
        errorMessage.innerHTML = "";
        appendErrorImg(errorMessage);
        errorMessage.innerHTML += " Enter a valid email address.";
        document.querySelector("#Email").style.borderColor = "red";
        document.querySelector("#personalFirstRow").style.display = "contents";
    }
}

function checkCardNumber(cardNumber, errorMessage) {
    cardNumber = cardNumber.replace(/-/g, "");
    if (/[a-zA-Z]/.test(cardNumber) || cardNumber.length != 16) {
        console.log("Card number is incorrect!");
        errorMessage.innerHTML = "";
        appendErrorImg(errorMessage);
        errorMessage.innerHTML += " Enter a valid card number.";
        document.querySelector("#CardNumber").style.borderColor = "red";
        document.querySelector("#personalFirstRow").style.display = "contents";
    }
    else {
        console.log("Card number is correct!");
        document.querySelector("#CardNumber").style.borderColor = "black";
        document.querySelector("#personalFirstRow").style.display = "none";
    }
}

function checkCVV(cvv, errorMessage) {
    if (/[a-zA-Z]/.test(cvv) || cvv.length != 3) {
        console.log("CVV is incorrect!");
        errorMessage.innerHTML = "";
        appendErrorImg(errorMessage);
        errorMessage.innerHTML += " Enter a valid CVV.";
        document.querySelector("#CVV").style.borderColor = "red";
        document.querySelector("#personalFirstRow").style.display = "contents";
    }
    else {
        console.log("CVV is correct!");
        document.querySelector("#CVV").style.borderColor = "black";
        document.querySelector("#personalFirstRow").style.display = "none";
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

firstName = document.getElementById("FirstName");
lastName = document.getElementById("LastName");
phone = document.getElementById("Phone");
email = document.getElementById("Email");
address = document.getElementById("Address");
cardNumber = document.getElementById("CardNumber");
CVV = document.getElementById("CVV");

errorMessage = document.getElementById("personalErrorMessage");

firstName.addEventListener("blur", function() {
    checkFirstName(firstName.value, errorMessage);
});

lastName.addEventListener("blur", function() {
    checkLastName(lastName.value, errorMessage);
});

phone.addEventListener("blur", function() {
    checkPhone(phone.value, errorMessage);
});

email.addEventListener("blur", function() {
    checkEmail(email.value, errorMessage);
});

cardNumber.addEventListener("blur", function() {
    checkCardNumber(cardNumber.value, errorMessage);
});

CVV.addEventListener("blur", function() {
    checkCVV(CVV.value, errorMessage);
});
