console.log("main.js online")

navigator.geolocation.getCurrentPosition(output, error);

function output(position) {
    console.log(position);
}

function error(error) {
    console.log(error);
}