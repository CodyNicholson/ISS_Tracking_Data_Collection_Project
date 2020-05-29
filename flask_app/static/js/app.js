const initialLat = 0.0;
const initialLon = 0.0;
const maxZoom = 9;
const minZoom = 2;
const initialZoom = 2;

var mymap = L.map('mapid', {
    'worldCopyJump': true, 
    'maxZoom': maxZoom,
    'minZoom': minZoom,
    'zoom': initialZoom,
    'center': [initialLat, initialLon]});

var style_choice_int = 0;
var previousStyle = L.tileLayer(`https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token=${mbk.substring(0, mbk.length - 2)}`, {
    tileSize: 512,
    zoomOffset: -1,
}).addTo(mymap);

function setStyle() {
    const styles = ["satellite-streets-v11", "light-v10", "dark-v10"];    
    var newStyle = L.tileLayer(`https://api.mapbox.com/styles/v1/mapbox/${styles[style_choice_int]}/tiles/{z}/{x}/{y}?access_token=${mbk.substring(0, mbk.length - 2)}`, {
        tileSize: 512,
        zoomOffset: -1,
    }).addTo(mymap);

    // Wait for animation of layer change to complete before removing previous layer
    setTimeout(() => {  
        mymap.removeLayer(previousStyle);
        previousStyle = newStyle;
    }, 1000);
}

function toggleStyle() {
    style_choice_int += 1;
    if (style_choice_int > 2 || style_choice_int < 0) {
        style_choice_int = 0;
    }
    setStyle();
}

var popup = L.popup();
function onMapClick(e) {
    popup.setLatLng(e.latlng)
        .setContent(`<div class="popup" onclick="closeAllPopups()">You clicked the map at:<br>${e.latlng.toString()}</div>`)
        .openOn(mymap);
}
mymap.on('click', onMapClick);

function closeAllPopups() {
    mymap.closePopup();
}

var markers = [];
var viewMarkers = true;
var lines = [];
var viewLines = true;
function getMarkersAndDrawLines() {
    $.getJSON("/data", function(data) {
        data.forEach(row => {
            var iconOptions = {
                iconUrl: '../static/img/bluestar.svg',
                iconSize: [25, 25]
            }
            var customIcon = L.icon(iconOptions);            
            var markerOptions = {
                title: "ISS Location",
                clickable: true,
                draggable: false,
                icon: customIcon
            }
            var marker = L.marker([row.iss_lat, row.iss_lon], markerOptions).addTo(mymap);
            if (row.country_name == "") {
                marker.bindPopup(`<div class="popup" onclick="closeAllPopups()"><b>Lat, Lon:</b> (${row.iss_lat}, ${row.iss_lon})<br>${timeConverter(row.iss_timestamp)}<br><b>Temp:</b> ${row.weather_temp} °F<br><b>Weather:</b> ${row.weather_description}<br><b>Random Number Fact:</b> ${row.num_description}</div>`).openPopup();
            } else {
                marker.bindPopup(`<div class="popup" onclick="closeAllPopups()"><img src="${row.country_flag_url}" alt="Country Flag" width="100%"/><br><b>Lat, Lon:</b> (${row.iss_lat}, ${row.iss_lon})<br>${timeConverter(row.iss_timestamp)}<br><b>Temp:</b> ${row.weather_temp} °F<br><b>Weather:</b> ${row.weather_description}<br><b>Country:</b> ${row.country_name} (${row.country_alpha_code})<br><b>Capital:</b> ${row.country_capital}<br><b>Borders:</b> ${row.country_borders}<br><b>Random Number Fact:</b> ${row.num_description}</div>`).openPopup();
            }
            markers.push(marker);
        });
    
        // Draw line before crossing lon 180 and then new line after crossing lon 180
        var currentLine = [];
        var uniqueLines = [];
        var previous_lon = data[0].iss_lon;
        for (let i = 0; i < data.length; i++) {
            var difference = previous_lon - data[i].iss_lon;
            if (difference < 300) {
                currentLine.push([data[i].iss_lat, data[i].iss_lon])
            } else {
                uniqueLines.push(currentLine);
                currentLine = [];
                currentLine.push([data[i].iss_lat, data[i].iss_lon])
            }
            previous_lon = data[i].iss_lon;
        }
        uniqueLines.push(currentLine);
    
        for (let i = 0; i < uniqueLines.length; i++) {
            lines.push(L.polyline(uniqueLines[i], {color: 'red'}).addTo(mymap));
        }
    });
}

function toggleMarkers() {
    if (viewMarkers) {
        for(var i = 0; i < markers.length; i++){
            mymap.removeLayer(markers[i]);
        }
        viewMarkers = false;
    } else {
        for(var i = 0; i < markers.length; i++){
            markers[i].addTo(mymap);
        }
        viewMarkers = true;
    }
}

function toggleLines() {
    if (viewLines) {
        for(var i = 0; i < lines.length; i++){
            mymap.removeLayer(lines[i]);
        }
        viewLines = false;
    } else {
        for(var i = 0; i < lines.length; i++){
            lines[i].addTo(mymap);
        }
        viewLines = true;
    }
}

getMarkersAndDrawLines();

// TASKS:
// select how many datapoints you would like to view up to 500
// calculate and graph speed of ISS
// calculate most visited, least visited, and not visited countries
// create json file with sample data to be used when database connection fails
// get initial view to center on latest point
// Map country alpha code to country name in bordering countries
// Style data table view and add json button and return home button
// response.setHeader("Set-Cookie", "HttpOnly;Secure;SameSite=Strict");
// draw arrow head and starting point
