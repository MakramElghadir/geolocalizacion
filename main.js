console.log("main.js online")

const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
}

function createMap(lat,lon) {
    var map = L.map('map').setView([54.318491431377986, -1.8431805567556865], 500);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([lat,lon]).addTo(map)
        .bindPopup('Eres doxeados lol.')
        .openPopup();
        L.marker([37.17249226705837, -3.59876212653383]).addTo(map)
        .bindPopup('El mejor kebab de la ciudad.')
        .openPopup();
        L.marker([37.16912122638434, -3.5993583205045763]).addTo(map)
        .bindPopup('universidad.')
        .openPopup();

        var circle = L.circle([54.318491431377986, -1.8431805567556865], {
            color: 'red',
            fillColor: '#f03',
            fillOpacity: 0.5,
            radius: 2000
        }).addTo(map);
        circle.bindPopup("Giant. Nuke. DESTROY ENTIRE WORLD *boom*");
}

function output(position) {
    console.log(position);
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const accuracy = position.coords.accuracy;
    const time = position.timestamp;

    const p = document.createElement("p")
    p.innerHTML = `Latitude: ${lat} <br> Longitude: ${lon} <br> Accuracy: ${accuracy} <br> Time : ${time} <br>`;
    document.body.appendChild(p);
    createMap(lat,lon);
    
}

function error(error) {
    console.log(error);
}

navigator.geolocation.getCurrentPosition(output, error, options);

