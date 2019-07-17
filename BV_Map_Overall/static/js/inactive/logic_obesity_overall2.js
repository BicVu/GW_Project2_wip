// function getColor(d) {
//     return d > 1000 ? '#800026' :
//            d > 500  ? '#BD0026' :
//            d > 200  ? '#E31A1C' :
//            d > 100  ? '#FC4E2A' :
//            d > 50   ? '#FD8D3C' :
//            d > 20   ? '#FEB24C' :
//            d > 10   ? '#FED976' :
//                       '#FFEDA0';
// }

// function getColor(d) {
//   return d > 30 ? '#800026' :
//   d > 20 ? '#FC4E2A':
//   d > 10 ? '#FED976' :
//   '#FFEDA0';
// }

function getColor(d) {
  return d > 30 ? 'red' :
  d > 10 ? 'orange' :
  'yellow' ;

}

var obesity = L.obesityValue(obesity_data, {})
var states = L.statesValue(statesData, {})

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

// Grab data
// var geoJson;
// d3.json("obesity_overall_2017.js", function(obesityData) {
//     L.obesity_overall_2017(data, {
//       style: function(feature) {
//         return {

//         }
//       }
//     })
// });



// function from us-states.js
// function style(feature) {
//     return {
//     fillColor: getColor(feature.properties.density),
//     // fillOpacity: 0.5,
//     // fillOpacity: false,
//     };
// }

// function style(obesity_data) {
//   return {
//     fillColor: getColor(obesity_data.Adults_Obese_Percent),
//     fillOpacity: 0.7,
//     weight: 1,
//     color: 'black',
//     dashArray: '3'
//   }
// }

// L.geoJson(json_var_fm_data_js, {function: function}).addTo(map);
L.geoJson(statesData, {style: style}, obesity_data, {style: style}).addTo(map);



