window.onload = function () {
    let pullButton = document.getElementById("pull")
    pullButton.onclick = triggerPull;

    let colorButton = document.getElementById("color")
    colorButton.onclick = color;
};

function triggerPull() {
    let fullname = document.getElementById("fullname").value
    let dateBirth = document.getElementById("dateBirth").value
    let splitNames = getNameAndSurname(fullname)

    dateBirth = new Date(dateBirth)
    let isValid = validate(splitNames, dateBirth)
    if (!isValid) {
        return 0
    }
    let lengthSurname = getLenghtSurname(splitNames['firstSurname'], splitNames['secondSurname'])
    let stringMonth = getStringMonth(dateBirth)
    console.log(stringMonth);
    let age = getAge(dateBirth)
    fillData(
        splitNames['firstSurname'],
        splitNames['secondSurname'],
        splitNames['names'],
        lengthSurname,
        age,
        stringMonth)
}

function fillData(firstSurname, secondSurname, names, lengthSurname, age, stringMonth) {
    let firstSurnameInput = document.getElementById("firstSurname")
    let secondSurnameInput = document.getElementById("secondSurname")
    let nameInput = document.getElementById("name")
    let lengthSurnameInput = document.getElementById("lengthSurname")
    let monthStringInput = document.getElementById("monthString")
    let ageInput = document.getElementById("age")

    firstSurnameInput.value = firstSurname
    secondSurnameInput.value = secondSurname
    nameInput.value = names
    lengthSurnameInput.value = lengthSurname
    monthStringInput.value = stringMonth
    ageInput.value = age
}


function getNameAndSurname(fullname) {
    const nameAndSurname = fullname.split(" ");
    let firstSurname = nameAndSurname[0]
    let secondSurname = nameAndSurname[1]
    let names = nameAndSurname.slice(2, nameAndSurname.length)

    let splitNames = {
        firstSurname: firstSurname,
        secondSurname: secondSurname,
        names: names
    }
    return splitNames
}

function getLenghtSurname(firstSurname, secondSurname) {
    return firstSurname.length + secondSurname.length
}

function getStringMonth(date) {
    const month = date.toLocaleString('es', { month: 'long' });
    return month
}

function getAge(date) {
    let today = new Date();
    let currentYear = today.getFullYear();
    let birthYear = currentYear

    if (!!date.valueOf()) {
        birthYear = date.getFullYear();
    }
    return currentYear - birthYear
}

function validate(fullname, date) {
    console.log(fullname);
    let isValid = true
    if (!!!date.valueOf()) {
        isValid = false
        alert("Ingrese una fecha válida")
    }
    if (!!!fullname['firstSurname']) {
        isValid = false
        alert("Ingrese el apellido paterno")
    }
    if (!!!fullname['secondSurname']) {
        isValid = false
        alert("Ingrese el apellido materno")
    }
    if (fullname['names'].length < 1) {
        isValid = false
        alert("Ingrese los nombres")
    }
    return isValid
}

// boton colorear

function color() {
    let spans = document.querySelectorAll('.input-group-text');
    spans.forEach(function (element) {
        if (element.classList.contains("addon-red")) {
            element.classList.remove('addon-red');
            element.classList.add("addon-blue");
        } else {
            element.classList.remove('addon-blue');
            element.classList.add("addon-red");
        }
    });
}