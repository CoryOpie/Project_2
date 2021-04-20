d3.json("/api/v1.0/Correlation").then(function(CorrData){
  console.log(CorrData);

  var data = [
  {
    z: [[1.0, 0.7996180164900025, 0.7653012432368554, 0.7923204043338905, 0.619505363689766, 0.010428804598273883, 0.43135766390674996, 0.5157218545878531], [0.7996180164900025, 1.0, 0.7886483373402697, 0.8599051155145977, 0.44798084580856573, -0.20152141797322556, 0.33571146668763807, 0.0010642490735393395], [0.7653012432368554, 0.7886483373402697, 1.0, 0.7250848832510157, 0.4840563830848691, -0.11685618533243557, 0.20357508902618351, 0.046582772501521326], [0.7923204043338905, 0.8599051155145977, 0.7250848832510157, 1.0, 0.4842452406705684, -0.16494401477549728, 0.3542014055879155, 0.05018184731307821], [0.619505363689766, 0.44798084580856573, 0.4840563830848691, 0.4842452406705684, 1.0, 0.16158820078847036, 0.41287654956551023, 0.12472330436630259], [0.010428804598273883, -0.20152141797322556, -0.11685618533243557, -0.16494401477549728, 0.16158820078847036, 1.0, 0.15946097751780483, 0.0402504169799939], [0.43135766390674996, 0.33571146668763807, 0.20357508902618351, 0.3542014055879155, 0.41287654956551023, 0.15946097751780483, 1.0, 0.037517270856322296], [0.5157218545878531, 0.0010642490735393395, 0.046582772501521326, 0.05018184731307821, 0.12472330436630259, 0.0402504169799939, 0.037517270856322296, 1.0]],
    // z: [[CorrData[0], CorrData[1]], CorrData[3], CorrData[4], [CorrData[5], CorrData[6]], CorrData[7]],
    x: ["Happiness Score",	"GDP per Capita",	"Social Support",	"Healthy Life Expectancy",	"Freedom to make life choices",	"Generosity",	"Perception of Corruption",	"Dystopia + Residual Score"],
    y: ["Happiness Score",	"GDP per Capita",	"Social Support",	"Healthy Life Expectancy",	"Freedom to make life choices",	"Generosity",	"Perception of Corruption",	"Dystopia + Residual Score"],
    type: 'heatmap'
  }
];
var layout = {
  autosize: false,
  width: 600,
  height: 600,
  yaxis: {
    tickvals: [0,1, 2, 3, 4, 5, 6, 7],
    tickmode: 'array',
    automargin: true,
    titlefont: { size:30 },
  },
  xaxis: {
    tickvals: [0,1, 2, 3, 4, 5, 6, 7],
    tickmode: 'array',
    automargin: true,
    titlefont: { size:30 },
  },
  paper_bgcolor: '#7f7f7f',
  plot_bgcolor: '#c7c7c7'
};
Plotly.newPlot('myDiv', data, layout);



// var xValues = ["Happiness Score",	"GDP per Capita",	"Social Support",	"Healthy Life Expectancy",	"Freedom to make life choices",	"Generosity",	"Perception of Corruption",	"Dystopia + Residual Score"];

// var yValues = ["Happiness Score",	"GDP per Capita",	"Social Support",	"Healthy Life Expectancy",	"Freedom to make life choices",	"Generosity",	"Perception of Corruption",	"Dystopia + Residual Score"];

// var zValues = [
//   [[1.0, 0.7996180164900025, 0.7653012432368554, 0.7923204043338905, 0.619505363689766, 0.010428804598273883, 0.43135766390674996, 0.5157218545878531], [0.7996180164900025, 1.0, 0.7886483373402697, 0.8599051155145977, 0.44798084580856573, -0.20152141797322556, 0.33571146668763807, 0.0010642490735393395],
//    [0.7653012432368554, 0.7886483373402697, 1.0, 0.7250848832510157, 0.4840563830848691, -0.11685618533243557, 0.20357508902618351, 0.046582772501521326], [0.7923204043338905, 0.8599051155145977, 0.7250848832510157, 1.0, 0.4842452406705684, -0.16494401477549728, 0.3542014055879155, 0.05018184731307821], [0.619505363689766, 0.44798084580856573, 0.4840563830848691, 0.4842452406705684, 1.0, 0.16158820078847036, 0.41287654956551023, 0.12472330436630259],
//    [0.010428804598273883, -0.20152141797322556, -0.11685618533243557, -0.16494401477549728, 0.16158820078847036, 1.0, 0.15946097751780483, 0.0402504169799939], [0.43135766390674996, 0.33571146668763807, 0.20357508902618351, 0.3542014055879155, 0.41287654956551023, 0.15946097751780483, 1.0, 0.037517270856322296],
//    [0.5157218545878531, 0.0010642490735393395, 0.046582772501521326, 0.05018184731307821, 0.12472330436630259, 0.0402504169799939, 0.037517270856322296, 1.0]],
// ];

// var colorscaleValue = [
//   [0, '#3D9970'],
//   [1, '#001f3f']
// ];

// var data = [{
//   x: xValues,
//   y: yValues,
//   z: zValues,
//   type: 'heatmap',
//   colorscale: colorscaleValue,
//   showscale: false
// }];

// var layout = {
//   title: 'Happiness Score Correlation Matrix',
//   annotations: [],
//   xaxis: {
//     ticks: '',
//     side: 'top'
//   },
//   yaxis: {
//     ticks: '',
//     ticksuffix: ' ',
//     width: 700,
//     height: 700,
//     autosize: false
//   }
// };

// for ( var i = 0; i < yValues.length; i++ ) {
//   for ( var j = 0; j < xValues.length; j++ ) {
//     var currentValue = zValues[i][j];
//     if (currentValue != 0.0) {
//       var textColor = 'white';
//     }else{
//       var textColor = 'black';
//     }
//     var result = {
//       xref: 'x1',
//       yref: 'y1',
//       x: xValues[j],
//       y: yValues[i],
//       text: zValues[i][j],
//       font: {
//         family: 'Arial',
//         size: 12,
//         color: 'rgb(50, 171, 96)'
//       },
//       showarrow: false,
//       font: {
//         color: textColor
//       }
//     };
//     layout.annotations.push(result);
//   }
// }

// Plotly.newPlot('myDiv', data, layout);


});








d3.json("/api/v1.0/WHR2021").then(function(WHRData) {

  console.log(WHRData);

  Ladder_score = WHRData.map(h => h.Ladder_score)
  Country_name = WHRData.map(h => h.Country_name)
  Explained_by_Log_GDP_per_capita = WHRData.map(h => h.Explained_by_Log_GDP_per_capita)
  Explained_by_Social_support = WHRData.map(h => h.Explained_by_Social_support)
  Explained_by_Healthy_life_expectancy = WHRData.map(h => h.Explained_by_Healthy_life_expectancy)
  Explained_by_Freedom_to_make_life_choices= WHRData.map(h => h.Explained_by_Freedom_to_make_life_choices)
  Explained_by_Generosity = WHRData.map(h => h.Explained_by_Generosity)
  Explained_by_Perceptions_of_corruption = WHRData.map(h => h.Explained_by_Perceptions_of_corruption)
  Dystopia_residual = WHRData.map(h => h.Dystopia_residual)
  Residual_X = WHRData.map(h => h.Residual_X)
  // label = WHRData.map(h.)

  console.log(Ladder_score);
  console.log(Country_name);
  console.log(Explained_by_Log_GDP_per_capita);
  console.log(Explained_by_Social_support);
  console.log(Explained_by_Healthy_life_expectancy);
  console.log(Explained_by_Freedom_to_make_life_choices);
  console.log(Explained_by_Generosity);
  console.log(Explained_by_Perceptions_of_corruption);
  console.log(Dystopia_residual);
  console.log(Residual_X);

  combinedArray= WHRData.map(Object.values)
  console.log(combinedArray);
    $(document).ready(function() {
      $('#example').DataTable( {
          data: combinedArray,
          columns: [
              { title: "Country" },
              { title: "Dystopia + Residual Score" },
              { title: "Freedom to make life choices" },
              { title: "Generosity" },
              { title: "Healthy Life Expectancy" },
              { title: "GDP per Capita" },
              { title: "Perception of Corruption" },
              { title: "Social Support" },
              { title: "Actual Life Expectancy Age" },
              { title: "Happiness Score" },
              { title: "Region" }
          ]
      } );
  } );

  // var trace1 = {
  //   x: [Ladder_score[0],Ladder_score[1],Ladder_score[2],Ladder_score[3],Ladder_score[4]],
  //   y: [Country_name[0],Country_name[1],Country_name[2],Country_name[3],Country_name[4]],
  //   name: 'LadderScore',
  //   orientation: 'h',
  //   marker: {
  //     color: 'rgba(55,128,191,0.6)',
  //     width: 1
  //   },
  //   type: 'bar'
  // };
  
  var trace2 = {
    x: [Explained_by_Log_GDP_per_capita[0],Explained_by_Log_GDP_per_capita[1],Explained_by_Log_GDP_per_capita[2],Explained_by_Log_GDP_per_capita[3],Explained_by_Log_GDP_per_capita[4]],
    y: [Country_name[0],Country_name[1],Country_name[2],Country_name[3],Country_name[4]],
    name: 'Log_GDP_per_capita',
    orientation: 'h',
    type: 'bar',
    marker: {
      color: 'rgba(255,153,51,0.6)',
      width: 1
    }
  };
  var trace3 = {
      x: [Dystopia_residual[0],Dystopia_residual[1],Dystopia_residual[2],Dystopia_residual[3],Dystopia_residual[4]],
      y: [Country_name[0],Country_name[1],Country_name[2],Country_name[3],Country_name[4]],
      name: 'Dystopia_Residual',
      orientation: 'h',
      type: 'bar',
      marker: {
        color: 'rgba(255,0,0,0.6)',
        width: 1
      }

    
  };
  var trace4 = {
    x: [Explained_by_Social_support[0],Explained_by_Social_support[1],Explained_by_Social_support[2],Explained_by_Social_support[3],Explained_by_Social_support[4]],
    y: [Country_name[0],Country_name[1],Country_name[2],Country_name[3],Country_name[4]],
    name: 'Social_support',
    orientation: 'h',
    type: 'bar',
    marker: {
      color: 'rgba(0,0,255,0.6)',
      width: 1
    }

  
};
var trace5 = {
  x: [Explained_by_Healthy_life_expectancy[0],Explained_by_Healthy_life_expectancy[1],Explained_by_Healthy_life_expectancy[2],Explained_by_Healthy_life_expectancy[3],Explained_by_Healthy_life_expectancy[4]],
  y: [Country_name[0],Country_name[1],Country_name[2],Country_name[3],Country_name[4]],
  name: 'Healthy_life_expectancy',
  orientation: 'h',
  type: 'bar',
  marker: {
    color: 'rgba(60,179,113,0.6)',
    width: 1
  }


};
var trace6 = {
  x: [Explained_by_Freedom_to_make_life_choices[0],Explained_by_Freedom_to_make_life_choices[1],Explained_by_Freedom_to_make_life_choices[2],Explained_by_Freedom_to_make_life_choices[3],Explained_by_Freedom_to_make_life_choices[4]],
  y: [Country_name[0],Country_name[1],Country_name[2],Country_name[3],Country_name[4]],
  name: 'Freedom_to_make_life_choices',
  orientation: 'h',
  type: 'bar',
  marker: {
    color: 'rgba(238,130,238,0.6)',
    width: 1
  }


};
var trace7 = {
  x: [Explained_by_Generosity[0],Explained_by_Generosity[1],Explained_by_Generosity[2],Explained_by_Generosity[3],Explained_by_Generosity[4]],
  y: [Country_name[0],Country_name[1],Country_name[2],Country_name[3],Country_name[4]],
  name: 'Generosity',
  orientation: 'h',
  type: 'bar',
  marker: {
    color: 'rgba(255,165,0,0.6)',
    width: 1
  }


};
var trace8 = {
  x: [Explained_by_Perceptions_of_corruption[0],Explained_by_Perceptions_of_corruption[1],Explained_by_Perceptions_of_corruption[2],Explained_by_Perceptions_of_corruption[3],Explained_by_Perceptions_of_corruption[4]],
  y: [Country_name[0],Country_name[1],Country_name[2],Country_name[3],Country_name[4]],
  name: 'Perceptions_of_corruption',
  orientation: 'h',
  type: 'bar',
  marker: {
    color: 'rgba(106,90,205,0.6)',
    width: 1
  }


};
var trace9 = {
  x: [Residual_X [0],Residual_X [1],Residual_X [2],Residual_X [3],Residual_X [4]],
  y: [Country_name[0],Country_name[1],Country_name[2],Country_name[3],Country_name[4]],
  name: 'Residual_X ',
  orientation: 'h',
  type: 'bar',
  marker: {
    color: 'rgba(60, 250, 250,0.6)',
    width: 1
  }


};
  
  var data = [trace2,trace3,trace4,trace5,trace6,trace7,trace8,trace9];
  
  var layout = {
    title: 'Colored Bar Chart',
    barmode: 'stack'
  };
  
  Plotly.newPlot('top5', data, layout);

  // var data = [{
  //   values: [19, 26, 55],
  //   labels: ['Residential', 'Non-Residential', 'Utility'],
  //   type: 'pie'
  // }];

  // var layout = {
  //   height: 400,
  //   width: 500
  // };

  // Plotly.newPlot('chart2', data, layout);


  // Plotly.d3.csv(
  //   "https://raw.githubusercontent.com/albertyw/avenews/master/old/data/average-latitude-longitude-countries.csv",
  //   function(err, rows) {
  //     function unpack(rows, key) {
  //       return rows.map(function(row) {
  //         return row[key];
  //       });
  //     }
  
  // var data = [
  //   {
  //     type: "scattermapbox",
  //     // text: unpack(rows, "Country"),
  //     text: unpack(rows,"ISO 3166 Country Code"),
  //     lon: unpack(rows, "Longitude"),
  //     lat: unpack(rows, "Latitude"),
  //     marker: { color: "red", size: 8 }
  //   }
  // ];
  
  // var layout = {
  //   dragmode: "zoom",
  //   mapbox: { style: "open-street-map", center: { lat: 38, lon: -90 }, zoom: 0 },
  //   margin: { r: 0, t: 0, b: 0, l: 0 }
  // };
  
  // Plotly.newPlot("chart2", data, layout);
  //   }
  // );

//   var us = Object.values(data.us);
// var uk = Object.values(data.uk);
// var canada = Object.values(data.canada);

// Create an array of music provider labels
// var labels = Object.keys(data.us);

// // Display the default plot
// function init() {
//   var data = [{
//     values: [Ladder_score[0],Country_name[0],Explained_by_Healthy_life_expectancy[0],Explained_by_Freedom_to_make_life_choices[0],Explained_by_Generosity[0],Explained_by_Perceptions_of_corruption[0],Dystopia_residual[0],Residual_X[0]],
//     labels: ['Log_GDP_per_capita','Social_support','Healthy_life_expectancy','Freedom_to_make_life_choices','Generosity','Perceptions_of_corruption','Dystopia_residual','Residual_X'],
//     domain: {column: 0},
//     name: 'Happines Score',
//     hoverinfo: 'label+percent+name',
//     hole: .5,
//     type: 'pie'
  
//   }];
  
//   var layout = {
//     annotations: [
//       {
//         font: {
//           size: 20
//         },
//         showarrow: false,
//         text: Ladder_score[0],
//         x: 0.17,
//         y: 0.5
//       }
//     ],
//     height: 400,
//     width: 600,
//     showlegend: false,
//     grid: {rows: 1, columns: 2}
//   };
  
//   Plotly.newPlot('chart22', data, layout);
// }
// init();


})
// init();
