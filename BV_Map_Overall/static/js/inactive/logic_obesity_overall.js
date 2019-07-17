function getColor(d) {
  return d > 30 ? 'red' :
  d > 10 ? 'orange' :
  'yellow' ;

}

// Read in data
d3.json("BV_MAP_OVERALL/data/obesity_states_clean.json", function(data) {
  console.log(data);
});

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
// d3.json("../data/obesity_states_clean.json", function(obesityData) {
//     L.obesity(data, {
//       style: function(feature) {
//         return {
//           fillColor: "pink",
//           weight: 1,
//           color: 'black',
//           dashArray: '3'

//         }
//       }
//     })
// });



// function from us-states.js
// function style(feature) {
//     return {
//     fillColor: getColor(feature.adults_obese_percent),
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
// L.geoJson(obesity_data, {style: style}).addTo(map);



