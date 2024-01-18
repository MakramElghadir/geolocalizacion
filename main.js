console.log("main.js online")

const knowYourPosition = navigator.geolocation.getCurrentPosition(output, error);

function output(position) {
    console.log(position);
}

function error(error) {
    console.log(error);
}