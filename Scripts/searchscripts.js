src = "https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"
src = "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
src = "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"

// Set up global variable
var result;


function showPosition() {
    // Store the element where the page displays the result
    result = document.getElementById("result");

    // If geolocation is available, try to get the visitor's position
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
        result.innerHTML = "Getting the position information...";
    } else {
        alert("Sorry, your browser does not support HTML5 geolocation.");
    }
};

// Define callback function for successful attempt
function successCallback(position) {
    result.innerHTML = "Your current position is (" + "Latitude: " + position.coords.latitude + ", " + "Longitude: " + position.coords.longitude + ")";
}

// Define callback function for failed attempt
function errorCallback(error) {
    if (error.code == 1) {
        result.innerHTML = "You've decided not to share your position, but it's OK. We won't ask you again.";
    } else if (error.code == 2) {
        result.innerHTML = "The network is down or the positioning service can't be reached.";
    } else if (error.code == 3) {
        result.innerHTML = "The attempt timed out before it could get the location data.";
    } else {
        result.innerHTML = "Geolocation failed due to unknown error.";
    }

}

// changes login button with name of current user
function sayHello() {
    firebase.auth().onAuthStateChanged(function (user) {
        name = user.displayName; //get first and last name
        console.log(name);
        first = name.split(" ")[0]; //get first name only
        console.log(first);
        document.getElementById("loginbtn").innerHTML = first;
    })
}

sayHello();