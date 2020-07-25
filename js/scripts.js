

function formFn() {
    var gender = document.getElementsByName("gender");
    var mdate = document.getElementById("day");
    var mmonth = document.getElementById("month");
    var myear = document.getElementById("year");
    var formValid = false;
    var i = 0;

    if (mdate.value == "" || mdate.value == null) {
        // alert("Please Input date");
        document.getElementById("dob").innerHTML = "Day Required";
        document.getElementById("dob");
        return false;
    } else {
        if (!isNaN(mdate.value)) {
            if (mdate.value <= 0 || mdate.value > 31) {
                document.getElementById("dob").innerHTML = "Invalid date";
                document.getElementById("dob");
                return false;
            } else {
                document.getElementById("dob").innerHTML = "valid";
                document.getElementById("dob");
            }
        } else {
            document.getElementById("dob").innerHTML = "Day must be a Number";
            document.getElementById("dob");
            return false;

        }
    }
    if (mmonth.value == "" || mmonth.value == null) {



        document.getElementById("mmonth").innerHTML = "Month Required";
        document.getElementById("mmonth");
        return false;
    } else {
        if (!isNaN(mmonth.value)) {
            if (mmonth.value <= 0 || mmonth.value > 12) {
                document.getElementById("mmonth").innerHTML = "Invalid Month";
                document.getElementById("mmonth");
                return false;
            } else {
                document.getElementById("mmonth").innerHTML = "valid";
                document.getElementById("mmonth");
            }
        } else {
            document.getElementById("mmonth").innerHTML = "Month must be a Number";
            document.getElementById("mmonth");
            return false;
        }
    }
    if (myear.value == "" || myear.value == null) {

        document.getElementById("myear").innerHTML = "Year Required";
        document.getElementById("myear");
        return false;
    } else {
        if (!isNaN(myear.value)) {
            if (myear.value.length != 4) {
                document.getElementById("myear").innerHTML = "Invalid Year";
                document.getElementById("myear");
                return false;
            } else {
                document.getElementById("myear").innerHTML = "valid";
                document.getElementById("myear");
            }
        } else {
            document.getElementById("myear").innerHTML = "Year must be a Number";
            document.getElementById("myear");
            return false;
        }
    }
    while (!formValid && i < gender.length) {
        if (gender[i].checked) {
            // mgender = gender[i].value;
            document.getElementById("legend");
            document.getElementById("legend").innerHTML = "valid";
            formValid = true;
        }
        i++;
    }
    if (!formValid) {
        document.getElementById("legend");
        return false;
    }
    return formValid;
}

//functions to get user details
function getUserDetails() {
    var gender = document.getElementsByName("gender");
    var mdate = parseInt(document.getElementById("day").value);
    var mmonth = parseInt(document.getElementById("month").value);
    var myear = parseInt(document.getElementById("year").value);
    // var mdate = 12;
    // var mmonth = 12;
    // var myear = 2012;
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
//Arrays
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var akanM = {Sunday: "Kwasi", Monday: "Kwadwo", Tuesday: "Kwabena", Wednesday: "Kwaku", Thurday: "Yaw", Friday: "Kofi", Saturday: "Kwame"};
var akanF = {Sunday: "Akosua", Monday: "Adwoa", Tuesday: "Abenaa", Wednesday: "Akua", Thurday: "Yaa", Friday: "Afua", Saturday: "Ama"};

// function to get the day of the week
function dayOfWkCal() {
    var userDetailsObj = getUserDetails();
    var day = userDetailsObj.date;
    var month = userDetailsObj.month;
    var year = userDetailsObj.year;

    // alert("dd "+day+" mm "+month +" yyyy "+year);

    var a = Math.floor((14 - month) / 12);
    var y = year - a;
    var m = month + 12 * a - 2;
    dayOfWk = (day + y + Math.floor(y / 4) - Math.floor(y / 100) +
        Math.floor(year / 400) + Math.floor((31 * m) / 12)) % 7;

    var myDay = days[dayOfWk];
    // alert(myDay);
    return myDay;

}
// function to get Akan Names
function getAkanName() {
    var userDetailsObj = getUserDetails();
    var gender = userDetailsObj.gender;
    
    var dayOfBirth = dayOfWkCal();
  

    if (gender === "male") {
        for (var akanKey in akanM) {
            if (akanM.hasOwnProperty(akanKey)) {
                if (akanKey === dayOfBirth)
                    myAkanName = akanM[akanKey];
            }
        }
    } else if (gender === "female") {
        for (var akanKey in akanF) {
            if (akanF.hasOwnProperty(akanKey)) {
                if (akanKey === dayOfBirth)
                    myAkanName = akanF[akanKey];
            }
        }

    } else {
        alert("error");
    }

    // alert(myAkanName)

    document.getElementById("results").innerHTML = "You were born on " + dayOfBirth + " and your Akan name is " + myAkanName;
    




}

function overallFn() {
    var isValid = formFn();

    if (!isValid) {
        formFn();
        return false;
    } else {
        getUserDetails();
        dayOfWkCal();
        getAkanName()
        return false;
    }
}

