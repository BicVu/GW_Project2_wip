function getColor(d) {
    return d > 1000 ? '#800026' :
           d > 500  ? '#BD0026' :
           d > 200  ? '#E31A1C' :
           d > 100  ? '#FC4E2A' :
           d > 50   ? '#FD8D3C' :
           d > 20   ? '#FEB24C' :
           d > 10   ? '#FED976' :
                      '#FFEDA0';
}

// Set initial map view
var map = L.map("map", {
  center: [37.8, -96],
  zoom: 4
});

// Adding tile layer
L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.light",
  accessToken: API_KEY
}).addTo(map);

// Style object
function style(feature) {
    return {
    fillColor: getColor(feature.properties.density),
    fillOpacity: 0.5,
    weight: 1, // Stroke weight
    color: 'white', // Stroke color
    opacity: 1, // Stroke opacity
    dashArray: '3' // Dash length
    };
}

// L.geoJson(json_var_fm_data_js, {function: function}).addTo(map);
L.geoJson(statesData, {style: style}).addTo(map);



// link to data
// var filepath = "us-states.js"
// d3.json(filepath, function(data) {
//     L.geoJson(statesData, {

//     }).addTo(map);
// });


// function style(feature) {
//     return {
//         fillColor: getColor(feature.properties.density),
//         weight: 2,
//         opacity: 1,
//         color: 'white',
//         dashArray: '3',
//         fillOpacity: 0.7
//     };
// }

// L.geoJson(statesData, {style: style}).addTo(map);