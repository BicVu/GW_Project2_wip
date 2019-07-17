// Reading in JSON
d3.json("/data/obesity_states_clean")
    .then(function(error, data) {
    console.log(data[0]);
  });