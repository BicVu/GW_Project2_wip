// Create a map object
var myMap = L.map("map", {
  center: [40.4, -80.0],
  zoom: 10
});

L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets-basic",
  accessToken: API_KEY
}).addTo(myMap);





// Loop through the cities array and create one marker for each city object
for (var i = 0; i < fastfoodData.length; i++) {
  L.circle([fastfoodData[i].Lat,fastfoodData[i].Lon], {
    fillOpacity: 0.75,
    color: false,
    fillColor: "purple",
    radius: 446
  }).bindPopup("<h1>" + fastfoodData[i].Name + "</h1> <hr> <h3>Category: " + fastfoodData[i].Category + "</h3>").addTo(myMap);
}
