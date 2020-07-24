var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var maleAkanNames = {Sunday: "Kwasi", Monday: "Kwadwo", Tuesday: "Kwabena", Wednesday: "Kwaku", Thurday: "Yaw", Friday: "Kofi", Saturday: "Kwame"};
var femaleAkanNames = {Sunday: "Akosua", Monday: "Adwoa", Tuesday: "Abenaa", Wednesday: "Akua", Thurday: "Yaa", Friday: "Afua", Saturday: "Ama"};

function validateForm() {
    var gender = document.getElementsByName("gender");
    var mdate = document.getElementById("day");
    var mmonth = document.getElementById("month");
    var myear = document.getElementById("year");
    var formValid = false;
    var i = 0;

    if (mdate.value == "" || mdate.value == null) {
        document.getElementById("dob").innerHTML = "Day Required";
        document.getElementById("dob").style.color = "red";
        mdate.style.border = "2px solid red";
        return false;
    } else {
        mdate.style.border = "";
        if (!isNaN(mdate.value)) {
            if (mdate.value <= 0 || mdate.value > 31) {
                document.getElementById("dob").innerHTML = "Invalid date";
                document.getElementById("dob").style.color = "red";
                mdate.style.border = "2px solid red";
                return false;
            } else {
                document.getElementById("dob").innerHTML = "";
                document.getElementById("dob").style.color = "";
                mdate.style.border = "2px solid green";
            }
        } else {
            document.getElementById("dob").innerHTML = "Day must be a Number";
            document.getElementById("dob").style.color = "red";
            mdate.style.border = "2px solid red";
            return false;

        }
    }
    if (mmonth.value == "" || mmonth.value == null) {
        document.getElementById("mmonth").innerHTML = "Month Required";
        document.getElementById("mmonth").style.color = "red";
        mmonth.style.border = "2px solid red";
        return false;
    } else {
        if (!isNaN(mmonth.value)) {
            if (mmonth.value <= 0 || mmonth.value > 12) {
                document.getElementById("mmonth").innerHTML = "Invalid Month";
                document.getElementById("mmonth").style.color = "red";
                mmonth.style.border = "2px solid red";
                return false;
            } else {
                document.getElementById("mmonth").innerHTML = "";
                document.getElementById("mmonth").style.color = "";
                mmonth.style.border = "2px solid green";
            }
        } else {
            document.getElementById("mmonth").innerHTML = "Month must be a Number";
            document.getElementById("mmonth").style.color = "red";
            mmonth.style.border = "2px solid red";
            return false;
        }
    }
    if (myear.value == "" || myear.value == null) {

        document.getElementById("myear").innerHTML = "Year Required";
        document.getElementById("myear").style.color = "red";
        myear.style.border = "2px solid red";
        return false;
    } else {
        if (!isNaN(myear.value)) {
            if (myear.value.length != 4) {
                document.getElementById("myear").innerHTML = "Invalid Year";
                document.getElementById("myear").style.color = "red";
                myear.style.border = "2px solid red";
                return false;
            } else {
                document.getElementById("myear").innerHTML = "";
                document.getElementById("myear").style.color = "";
                myear.style.border = "2px solid green";
            }
        } else {
            document.getElementById("myear").innerHTML = "Year must be a Number";
            document.getElementById("myear").style.color = "";
            myear.style.border = "2px solid red";
            return false;
        }
    }
    while (!formValid && i < gender.length) {
        if (gender[i].checked) {
            document.getElementById("legend").style.color = "";
            document.getElementById("legend").innerHTML = "";
            formValid = true;
        }
        i++;
    }
    if (!formValid) {
        document.getElementById("legend").style.color = "";
        return false;
    }
    return formValid;

}
function getUserDetails() {
    var gender = document.getElementsByName("gender");
    var mdate = parseInt(document.getElementById("day").value);
    var mmonth = parseInt(document.getElementById("month").value);
    var myear = parseInt(document.getElementById("year").value);
    var i = 0;
    while (i < gender.length) {
        if (gender[i].checked)

            mgender = gender[i].value;
        i++;
    }
    var userDetailsObj = {
        date: mdate,
        month: mmonth,
        year: myear,
        gender: mgender
    }
    return userDetailsObj;
}
function dayOfWkCal() {
    var userDetailsObj = getUserDetails();
    var day = userDetailsObj.date;
    var month = userDetailsObj.month;
    var year = userDetailsObj.year;
    var a = Math.floor((14 - month) / 12);
    var y = year - a;
    var m = month + 12 * a - 2;
    dayOfWk = (day + y + Math.floor(y / 4) - Math.floor(y / 100) +
        Math.floor(year / 400) + Math.floor((31 * m) / 12)) % 7;
    var myDay = daysOfWeek[dayOfWk];
    return myDay;
}
function getAkanName() {
    var userDetailsObj = getUserDetails();
    var gender = userDetailsObj.gender;
    var dayOfBirth = dayOfWkCal();
    if (gender === "male") {
        for (var akanKey in maleAkanNames) {
            if (maleAkanNames.hasOwnProperty(akanKey)) {
                if (akanKey === dayOfBirth)
                    myAkanName = maleAkanNames[akanKey];
            }
        }
    } else if (gender === "female") {
        for (var akanKey in femaleAkanNames) {
            if (femaleAkanNames.hasOwnProperty(akanKey)) {
                if (akanKey === dayOfBirth)
                    myAkanName = femaleAkanNames[akanKey];
            }
        }

    } else {
        alert("error");
    }
    document.getElementById("results").innerHTML = "You're " + myAkanName + " and born on " + dayOfBirth;
}

function aggregateMyFunctions() {
    var isValid = validateForm();
    if (!isValid) {
        validateForm();
        return false;
    } else {
        getUserDetails();
        dayOfWkCal();
        getAkanName()
        return false;
    }
}

