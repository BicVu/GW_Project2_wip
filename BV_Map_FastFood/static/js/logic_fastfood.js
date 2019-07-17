function getColor(mag){
  switch(parseInt(mag)){
      case 0: return '#b7f34d';
      case 1: return '#e1f34d';
      case 2: return '#f3db4d';
      case 3: return '#f3ba4d';
      case 4: return '#f0a76b';
      default: return '#f06b6b';
  }
}

// Query time options
// var filepath = "../../data/FastFoodData.json";

// GET data
d3.json("FastFoodData.json", function(data){
  createFeatures(data);
});

// Define map functions
// function createFeatures(fastfoodData) {

//   function pointToLayer(feature, latlng) {
//     return L.circleMarker(latlng, {
//       fillOpacity: 0.75,
//       color: "white",
//       stroke: true,
//       weight: 1,
//       fillColor: "orange"
//       // fillColor: getColor(feature.properties.mag),
//       // radius: feature.properties.mag * 3
//   });
//   }
//   function onEachFeature(feature, layer) {
//     // Append nested keys to get to the info
//     // layer.bindPopup("<h3>" + "Name" + Name + "</h3>"
//     // + "<hr><p>" + Category + "</p>"
//     // );
//   }
//   // GeoJSON layer for features
//   var locations = L.geoJSON(fastfoodData, {
//     onEachFeature: onEachFeature,
//     pointToLayer: pointToLayer
//   });
//   createMap(locations);
// }

function createMap(maps) {
  // Define map style layers
  var lightMap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  // attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    id: "mapbox.light", // style of map. https://docs.mapbox.com/vector-tiles/reference/mapbox-streets-v8/
    accessToken: API_KEY
  });

  var baseMaps = {
    "Light Map": lightMap,
  };

  // var overlayMaps = {
  //   Earthquakes: earthquakes
  // };

  // Create map object
  var myMap = L.map("map", {
    center: [37.09, -95.71], // lat long
    zoom: 4, // Zoom level: https://docs.mapbox.com/help/glossary/zoom-level
    layers: [lightMap] //link to layers
});

  // Create layer control
  L.control.layers(baseMaps, {
    collapsed: false
  }).addTo(myMap);

  // CreateLegend();

  // function CreateLegend(){
  //     var legend = L.control({position: "bottomright"});
  //     legend.onAdd = function(){
  //         var div = L.DomUtil.create("div","info legend");
  //         var labels = ["0-1","1-2","2-3","3-4","4-5","5+"];
  //         var legends = [];
  
  //         for(var i=0;i<labels.length;i++){
  //             legends.push("<li style=\"list-style-type:none;\"><div style=\"background-color: " + getColor(i) + "\">&nbsp;</div> " + 
  //             "<div>" + labels[i] + "</div></li>");}
  //             div.innerHTML += "<ul class='legend'>" + legends.join("") + "</ul>";
  //             return div;
  //         };
  
  //         legend.addTo(myMap);
      
  // }

}

