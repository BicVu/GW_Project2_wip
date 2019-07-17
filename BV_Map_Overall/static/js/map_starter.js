// define colors if there are breaking points
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

// Query data
// var queryURL = "us-states.js";

// Perform a GET request to the query URL
d3.json("us-states.js", function(data) {
    // Once we get a response, send the data.features object to the createFeatures function
    createFeatures(data.features);
  });

  function createFeatures(statesData) {
    // Define a function we want to run once for each feature in the features array
    // Give each feature a popup describing the place and time of the earthquake
    function onEachFeature(feature, layer) {
        // Data for tooltip. Navigate through dict.
        layer.bindPopup(features.properties.name
            + features.properties.density);
      }

    // Create a GeoJSON layer containing the features array on the earthquakeData object
    var states = L.geoJSON(statesData, {
    onEachFeature: onEachFeature
    });

    // Connect features to createMap function
    createMap(states);
  }

function createMap(states) {
  // Define map layers
  var darkmap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    id: "mapbox.dark",
    accessToken: API_KEY
  });

  // Base map layers from Mapbox
  var baseMaps = {
  "Dark Map": darkmap
  };

  // Overlay map layer with data
  var overlayMaps = {
    States: states
  };

  // WHY IS THIS AFTER THE TILES?
  // Create map layer
  var myMap = L.map("map", {
    center: [
      37.09, -95.71
    ],
    zoom: 5,
    layers: [darkmap, states]
  });
  
  // Add layer to map
  L.control.layers(baseMaps, overlayMaps, {
    collapsed: false
  }).addTo(myMap);
}