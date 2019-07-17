function getColor(d) {
    return d > 38 ? '#800026' :
           d > 36  ? '#BD0026' :
           d > 32  ? '#E31A1C' :
           d > 30  ? '#FC4E2A' :
           d > 28   ? '#FD8D3C' :
           d > 26   ? '#FEB24C' :
           d > 24   ? '#FED976' :
                      '#FFEDA0';
}

// for (var i = 0; i < cities.length; i++) {
//     var city = cities[i];
//     L.marker(city.location)
//       .bindPopup("<h1>" + city.name + "</h1> <hr> <h3>Population " + city.population + "</h3>")
//       .addTo(myMap);
//   }

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
    fillOpacity: 0.7,
    weight: 1, // Stroke weight
    color: 'white', // Stroke color
    opacity: 1, // Stroke opacity
    dashArray: '3' // Dash length
    };
}

// L.geoJson(json_var_fm_data_js, {function: function}).addTo(map);
L.geoJson(fuData, {style: style}).addTo(map);



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
