// set color values
function getColor(d) {
  return d > 30 ? 'red' :
  d > 10 ? 'orange' :
  'yellow' ;
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


// filepath = "../data/Obesity_Overall_2017.csv"
d3.csv(filepath, function(data){
  // create an array of the features array from JSONs
  createFeatures(data.features);
  // console.log(data);
});

// Style object
function style(obesity_data) {
  return {
  fillColor: getColor(obesity_data.coords),
  fillOpacity: 0.5,
  weight: 1, // Stroke weight
  color: 'white', // Stroke color
  opacity: 1, // Stroke opacity
  dashArray: '3' // Dash length
  };
}

L.geoJson(obesity_data, {style: style}).addTo(map);