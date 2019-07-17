// Circle markers for fast food restaurants data

// var filepath = "../../data/FastFoodData.json"

d3.json("FastFoodData.json", function(data){
    createFeatures(data);
  });



var lightMap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
// attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.light", // style of map. https://docs.mapbox.com/vector-tiles/reference/mapbox-streets-v8/
  accessToken: API_KEY
});

var myMap = L.map("map", {
  center: [37.09, -95.71], // lat long
  zoom: 4, // Zoom level: https://docs.mapbox.com/help/glossary/zoom-level
  layers: [lightMap] //link to layers
}).addTo(myMap);