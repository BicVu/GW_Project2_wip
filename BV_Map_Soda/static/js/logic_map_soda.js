// Indigo gradient
function getColor(d) {
    return d > 1.2 ? '#283593' :
           d > 1.1  ? '#303f9f' :
           d > 1.0  ? '#3949ab' :
           d > 0.9  ? '#3f51b5' :
           d > 0.8   ? '#5c6bc0' :
           d > 0.7   ? '#7986cb' :
           d > 0.6   ? '#c5cae9' :
                      '#e8eaf6';
}

// Set initial map view
var map = L.map("map", {
  center: [37.8, -96],
  zoom: 4
});

// Adding tile layer
L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Data from USDA 2010. Bic Vu  ",
  maxZoom: 18,
  id: "mapbox.light",
  accessToken: API_KEY
}).addTo(map);

// Draw static polygons with chloropleth
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

// Highlight upon hover
function highlightFeature(e) {
  var layer = e.target;

  layer.setStyle({
      weight: 4,
      color: '#fff',
      dashArray: '',
      fillOpacity: 0.7
  });

  if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
      layer.bringToFront();
  }

  info.update(layer.feature.properties);
}

function resetHighlight(e) {
  geojson.resetStyle(e.target);
  info.update();
}

function zoomToFeature(e) {
  map.fitBounds(e.target.getBounds());
}

function onEachFeature(feature, layer) {
  layer.on({
      mouseover: highlightFeature,
      mouseout: resetHighlight,
      click: zoomToFeature
  });
}

// Adding controls to map
var info = L.control();

info.onAdd = function (map) {
    this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
    this.update();
    return this._div;
};

// method that we will use to update the control based on feature properties passed
info.update = function (props) {
    this._div.innerHTML = '<h4>Cost of Milk to Soda</h4>' +  (props ?
        '<b>' + props.name + '</b><br />Price of milk = ' + props.density*100 + '% price of soda'
        : 'Hover over a state');
};

info.addTo(map);

var legend = L.control({position: 'bottomright'});

legend.onAdd = function (map) {

  var div = L.DomUtil.create('div', 'info legend'),
      grades = [0.6, 0.7, 0.8, 0.9, 1.0, 1.1, 1.2],
      labels = [];

  // loop through our density intervals and generate a label with a colored square for each interval

  for (var i = 0; i < grades.length; i++) {
      div.innerHTML +=
          '<i style="background:' + getColor(grades[i] + 1) + '"></i> ' +
          grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
  }

  return div;
};

legend.addTo(map);


// Add layer to map
var geojson;

geojson = L.geoJson(sodaMilkData, {
  style: style,
  onEachFeature: onEachFeature
}).addTo(map);

