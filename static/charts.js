
d3.json("/api/v1.0/WHR2021").then(function(WHRData) {

  console.log(WHRData);

  Ladder_score = WHRData.map(h => h.Ladder_score)
  Generosity = WHRData.map(h => h.Generosity)

  console.log(Ladder_score);
  console.log(Generosity);


  var data = [
    {
      x: Ladder_score,
      y: Generosity,
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