
d3.json("/api/v1.0/hairdata").then(function(hairData) {

  console.log(hairData);

  rock_band = hairData.map(h => h.rockband)
  num_hits = hairData.map(h => h.num_hits)

  console.log(rock_band);
  console.log(num_hits);


  var data = [
    {
      x: rock_band,
      y: num_hits,
      type: 'bar'
    }
  ];

  Plotly.newPlot('chart1', data);

  var data = [{
    values: [19, 26, 55],
    labels: ['Residential', 'Non-Residential', 'Utility'],
    type: 'pie'
  }];

  var layout = {
    height: 400,
    width: 500
  };

  Plotly.newPlot('chart2', data, layout);

})