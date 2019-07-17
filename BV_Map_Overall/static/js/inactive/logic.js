// set color values

// Retrieve data
var filepath = "../data/Obesity_Overall_2017.csv"
d3.csv(filepath, function(err, obesityData) {
  if (err) throw err;
  obesityData.forEach(function(data) {
    data.States = +data.States;
    data.Adults_Obese_Percent = +data.Adults_Obese_Percent;
    data.Male_Obese_Percent = +data.Male_Obese_Percent;
    data.Female_Obese_Percent = +data.Female_Obese_Percent;
    data.Rank = +data.Rank;
  }).then(function(d){
    console.log(d);
  });
});



// Function for color and tool tip
// function createFeatures(obesityData) {
//   // chloropleth function

//   // Tool tips
//   function onEachFeature(feature, layer) {
//     layer.bindPopup("Tooltip");
//   }

//   // var chloropleth = L.

// };

// Map fucntion
// function createMap(obesity) {
//   var lightMap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
//     // attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
//     maxZoom: 18,
//     id: "mapbox.light",
//     accessToken: "pk.eyJ1IjoiYmljdnUiLCJhIjoiY2p4aGw4NTFmMGVoZDN4bXRydmd0azI0YiJ9.oZGAZ8C3ElbtLkp25yIIaw",
//   });

//   var streetMap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
//     // attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
//     maxZoom: 18,
//     id: "mapbox.light",
//     accessToken: "pk.eyJ1IjoiYmljdnUiLCJhIjoiY2p4aGw4NTFmMGVoZDN4bXRydmd0azI0YiJ9.oZGAZ8C3ElbtLkp25yIIaw",
//   });

//   var baseMaps = {
//     "Light Map": lightMap,
//     "Street Map": streetsMap
//   };

//   // var overlayMaps = {
//   //   Obesity: obesity // Where do these naes come grom
//   // }

//   // Create map object
//   var myMap = L.map("map", {
//     center: [37.09, -95.71], // lat long
//     zoom: 4, // Zoom level: https://docs.mapbox.com/help/glossary/zoom-level
//     layers: [lightMap] //link to layers
//     });
    
//   L.control.layers(baseMaps, overlayMaps, {
//     collapsed: false
//   }).addTo(myMap);
  
//   // CreateLegend();

//   // Add tile layer
// };

  // Link to GeoJSON
  // var APILink = "http://data.beta.nyc//dataset/d6ffa9a4-c598-4b18-8caf-14abde6a5755/resource/74cdcc33-512f-439c-" +
  // "a43e-c09588c4b391/download/60dbe69bcd3640d5bedde86d69ba7666geojsonmedianhouseholdincomecensustract.geojson";

