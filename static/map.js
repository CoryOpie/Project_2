
// // Store our API endpoint at a variable
// var queryUrl = "/static/countries.geojson"

// var happinessdata =  "/api/v1.0/WHR2021";

// API_KEY = "pk.eyJ1IjoiamVzc2ljYWNvdmV5IiwiYSI6ImNrbXpzNzJ2MDBndmEybm1scmZjemloMjMifQ.R-FBc6ICA2ND1KzQSpz34g"

// //create a function to 
// function getColor (Ladder, geodata) {
//   console.log (Ladder)
//   console.log(geodata)

//   filterdata = geodata.filter(p => p.Country_name == Ladder)

//   //if the geodata country name and the WHR country name do not match color it white
//   if (filterdata.length == 0)
//     return "black"

//   filterdata = filterdata[0]
//   console.log(filterdata)

//   var ladderdata = filterdata["Ladder_score"]

//   if (ladderdata > 7.5 )
//     return "blue"

//   if (ladderdata > 7.0 )
//     return "green"

//   if (ladderdata > 6.5 )
//     return "limegreen"

//   if (ladderdata > 6.0 )
//     return "lime"

//   if (ladderdata > 5.5 )
//     return "yellowgreen"

//   if (ladderdata > 5.0 )
//     return "greenyellow"

//   if (ladderdata > 4.5 )
//     return "gold"

//   if (ladderdata > 4.0 )
//     return "yellow"

//   if (ladderdata > 3.5)
//     return "orange"

//   if (ladderdata > 3.0 )
//     return "darkorange"

//   if (ladderdata > 2.5 )
//     return "orangered"

//   else if (ladderdata <= 2.0)
//     return "red" 
  
// }
// d3.json(happinessdata).then(function(happydata) {
//     console.log(happydata)
 
// d3.json(queryUrl).then(function(data) {
//     console.log(data)

//     var happiness = L.geoJSON(data, {
//         // onEachFeature: onEachFeature,
//         // pointToLayer: function (feature, latlng) {
//         //   return L.circleMarker(latlng);
//         // },
//         style: function(feature) {
//           return {
//             "color": "white",
//             "fillOpacity": 1,
//             "fillColor": getColor(feature.properties.ADMIN, happydata), 
//             "weight": 5,
//             "radius": 5,
//             "opacity": 0.65    
//           }
//         }  
//       })

//     // Define lightmap and darkmap layers
//   var lightmap = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
//     attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
//     tileSize: 512,
//     maxZoom: 18,
//     zoomOffset: -1,
//     id: "mapbox/streets-v11",
//     accessToken: API_KEY
//   });

//   var darkmap = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
//     attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
//     maxZoom: 18,
//     id: "dark-v10",
//     accessToken: API_KEY
//   });

// //      // Define a baseMaps object to hold our base layers
// //   var baseMaps = {
// //     "Street Map": lightmap,
// //     "Dark Map": darkmap
// //   };

// //   var overlayMaps = {
// //     "Happiness": happiness
// //   }

// //       // Create a new map
// //   var myMap = L.map("map", {
// //     center: [
// //       29.4856, -17.539
// //     ],
// //     zoom: 1.85,
// //     layers: [darkmap, happiness]
// //   });

// //   // Create a layer control containing our baseMaps
// //   // Be sure to add an overlay Layer containing the GeoJSON data
// //   L.control.layers(baseMaps, overlayMaps, 
// //     {
// //     collapsed: false
// //   }).addTo(myMap);

// // });
// // })


// // var baseMaps = {
// //   "Light Map": lightmap,
// //   "Dark Map": darkmap,
// //   8:12
// // }
// // addTo(myMap);
// // //Set up the legend
// // var legend = L.control({ position: "bottomright" });
// // legend.onAdd = function() {
// //   var div = L.DomUtil.create("div", "info legend");
// //  // var limits = geojson.options.limits;
// //   // var colors = geojson.options.colors;
// //   var limits = [8, 6, 4, 2, 0];
// //   var colors = ["blue", "green", "limegreen", "lime", "yellowgreen", "greenyellos", "gold", "yellow", "orange", "darkorange", "orangered", "red"];
// //   var labels = [];
// //   // Add min & max
// //   var legendInfo = "<h1>Happiness Score</h1>" +
// //     "<div class=\"labels\">" +
// //       "<div class=\"min\">" + limits[0] + "</div>" +
// //       "<div class=\"max\">" + limits[limits.length - 1] + "</div>" +
// //     "</div>";
// //   div.innerHTML = legendInfo;
// //   limits.forEach(function(limit, index) {
// //     labels.push("<li style=\"background-color: " + colors[index] + "\"></li>");
// //   });
// //   div.innerHTML += "<ul>" + labels.join("") + "</ul>";
// //   return div;
// // };
// // // Adding legend to the map
// // legend.addTo(myMap);


//     // function onEachFeature(feature, layer) {
//     //     layer.bindPopup(`${feature.properties.place}<hr>Magnitude: ${feature.properties.mag}<br>Depth: ${feature.geometry.coordinates[2]}`);
//     //   }
    
//     //   function getColor(mag) {
    
//     //     //Use if/else if etc on mag to change colors
//     //     return "blue";
//     //   }

// // d3.json("/api/v1.0/WHR2021").then(function(WHRData) {



// //https://datahub.io/core/geo-countries

// //   // Using the features array sent back in the API data, create a GeoJSON layer and add it to the map
// //   function onEachFeature(feature, layer) {
// //     layer.bindPopup(`${feature.properties.place}<hr>Magnitude: ${feature.properties.mag}<br>Depth: ${feature.geometry.coordinates[2]}`);
// //   }

// //   function getColor(depth) {
// //   //  var getColor = data[1].mag;
// //     //for ( i=0; i< data.length; i++) 
// //         if (depth >= 90.0) {
// //           return "darkgreen";
// //         } 
// //         else if (depth >= 15) {
// //           return "forestgreen"; 
// //         } 
// //         else if (depth >= 9.0) {
// //           return "lawngreen"; 
// //         } 
// //         else if (depth >= 5.0) {
// //           return "lightgreen";        
// //         }
// //         else if (depth >= 2.0) {
// //             return "springgreen"; 
// //         }
// //         else {
// //             return "palegreen"; 
// //         }

// //   }  
        
// //    var earthquakes = L.geoJSON(data.features, {
// //     onEachFeature: onEachFeature,
// //     pointToLayer: function (feature, latlng) {
// //       return L.circleMarker(latlng);
// //     },

// //     style: function(feature) {
// //       return {
// //         "color": "black",
// //         "fillOpacity": 1,
// //         "fillColor": getColor(feature.geometry.coordinates[2]),  //getColor(feature.properties.mag),
// //         "weight": 2,
// //         "radius": feature.properties.mag * 5,
// //         "opacity": 0.65    
// //       }
// //     }  
// //   })
    

// //   // Define streetmap and darkmap layers
// //   var streetmap = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
// //     attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
// //     tileSize: 512,
// //     maxZoom: 18,
// //     zoomOffset: -1,
// //     id: "mapbox/streets-v11",
// //     accessToken: API_KEY
// //   });

// //   var darkmap = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
// //     attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
// //     maxZoom: 18,
// //     id: "dark-v10",
// //     accessToken: API_KEY
// //   });

// //   // Define a baseMaps object to hold our base layers
// //   var baseMaps = {
// //     "Street Map": streetmap,
// //     "Dark Map": darkmap
// //   };

// //   var overlayMaps = {
// //     "Earthquakes": earthquakes
// //   }

// //   // Create a new map
// //   var myMap = L.map("map", {
// //     center: [
// //       37.09, -95.71
// //     ],
// //     zoom: 5,
// //     layers: [darkmap, earthquakes] //default map opens
// //   });

// //   // Create a layer control containing our baseMaps
// //   // Be sure to add an overlay Layer containing the earthquake GeoJSON
// //   L.control.layers(baseMaps, overlayMaps, {
// //     collapsed: false
// //   }).addTo(myMap);

// //   // Set up the legend
// //   var legend = L.control({ position: "bottomright" });
// //   legend.onAdd = function() {
// //     var div = L.DomUtil.create("div", "info legend");
// //    // var limits = geojson.options.limits;
// //     // var colors = geojson.options.colors;
// //     var limits = [90, 15, 9, 5, 2, -10];
// //     var colors = ["darkgreen", "forestgreen", "lawngreen", "lightgreen", "springgreen", "palegreen"];
// //     var labels = [];

// //     // Add min & max
// //     var legendInfo = "<h1>Earthquake Depth</h1>" +
// //       "<div class=\"labels\">" +
// //         "<div class=\"min\">" + limits[0] + "</div>" +
// //         "<div class=\"max\">" + limits[limits.length - 1] + "</div>" +
// //       "</div>";

// //     div.innerHTML = legendInfo;

// //     limits.forEach(function(limit, index) {
// //       labels.push("<li style=\"background-color: " + colors[index] + "\"></li>");
// //     });

// //     div.innerHTML += "<ul>" + labels.join("") + "</ul>";
// //     return div;
// //   };

// //   // Adding legend to the map
// // //   legend.addTo(myMap);
// })
// })


// Store our API endpoint at a variable
var queryUrl = "/static/countries.geojson"

var happinessdata =  "/api/v1.0/WHR2021";

API_KEY = "pk.eyJ1IjoiamVzc2ljYWNvdmV5IiwiYSI6ImNrbXpzNzJ2MDBndmEybm1scmZjemloMjMifQ.R-FBc6ICA2ND1KzQSpz34g"

//create a function to 
function getColor (Ladder, geodata) {
  console.log (Ladder)
  console.log(geodata)

  filterdata = geodata.filter(p => p.Country_name == Ladder)

  //if the geodata country name and the WHR country name do not match color it white
  if (filterdata.length == 0)
    return "black"

  filterdata = filterdata[0]
  console.log(filterdata)

  var ladderdata = filterdata["Ladder_score"]

  if (ladderdata > 7.5 )
    return "blue"

  if (ladderdata > 7.0 )
    return "green"

  if (ladderdata > 6.5 )
    return "limegreen"

  if (ladderdata > 6.0 )
    return "lime"

  if (ladderdata > 5.5 )
    return "yellowgreen"

  if (ladderdata > 5.0 )
    return "greenyellow"

  if (ladderdata > 4.5 )
    return "gold"

  if (ladderdata > 4.0 )
    return "yellow"

  if (ladderdata > 3.5)
    return "orange"

  if (ladderdata > 3.0 )
    return "darkorange"

  if (ladderdata > 2.5 )
    return "orangered"

  else if (ladderdata <= 2.5)
    return "red" 
}
d3.json(happinessdata).then(function(happydata) {
    console.log(happydata)
 
d3.json(queryUrl).then(function(data) {
    console.log(data)

    var happiness = L.geoJSON(data, {
        // onEachFeature: onEachFeature,
        // pointToLayer: function (feature, latlng) {
        //   return L.circleMarker(latlng);
        // },
        style: function(feature) {
          return {
            "color": "white",
            "fillOpacity": 1,
            "fillColor": getColor(feature.properties.ADMIN, happydata), 
            "weight": 5,
            "radius": 5,
            "opacity": 0.65    
          }
        }  
      })

    // Define lightmap and darkmap layers
  var lightmap = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
    tileSize: 512,
    maxZoom: 18,
    zoomOffset: -1,
    id: "mapbox/streets-v11",
    accessToken: API_KEY
  });

  var darkmap = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    id: "dark-v10",
    accessToken: API_KEY
  });

     // Define a baseMaps object to hold our base layers
  var baseMaps = {
    "Street Map": lightmap,
    "Dark Map": darkmap
  };

  var overlayMaps = {
    "Happiness": happiness
  }

      // Create a new map
  var myMap = L.map("map", {
    center: [
      29.4856, -17.539
    ],
    zoom: 1.85,
    layers: [darkmap, happiness]
  });

  // Create a layer control containing our baseMaps
  // Be sure to add an overlay Layer containing the GeoJSON data
  L.control.layers(baseMaps, overlayMaps, 
    {
    collapsed: false
  }).addTo(myMap);

});
//   // Set up the legend
//   var legend = L.control({ position: "bottomright" });
//   legend.onAdd = function() {
//     var div = L.DomUtil.create("div", "info legend");
//    // var limits = geojson.options.limits;
//     // var colors = geojson.options.colors;
//     var limits = [8,6,4,2,0];
//     var colors = ["ble", "green", "limegreen", "lime", ",yellowgreen" "greenyellow", "gold", "yellow", "orange", "darkorange", "orangered", "red"];
//     var labels = [];

//     // Add min & max
//     var legendInfo = "<h1>Score</h1>" +
//       "<div class=\"labels\">" +
//         "<div class=\"min\">" + limits[0] + "</div>" +
//         "<div class=\"max\">" + limits[limits.length - 1] + "</div>" +
//       "</div>";

//     div.innerHTML = legendInfo;

//     limits.forEach(function(limit, index) {
//       labels.push("<li style=\"background-color: " + colors[index] + "\"></li>");
//     });

//     div.innerHTML += "<ul>" + labels.join("") + "</ul>";
//     return div;
//   };

//   // Adding legend to the map
//   legend.addTo(myMap);

//  });

})

    // function onEachFeature(feature, layer) {
    //     layer.bindPopup(`${feature.properties.place}<hr>Magnitude: ${feature.properties.mag}<br>Depth: ${feature.geometry.coordinates[2]}`);
    //   }
    
    //   function getColor(mag) {
    
    //     //Use if/else if etc on mag to change colors
    //     return "blue";
    //   }

// d3.json("/api/v1.0/WHR2021").then(function(WHRData) {



//https://datahub.io/core/geo-countries

//   // Using the features array sent back in the API data, create a GeoJSON layer and add it to the map
//   function onEachFeature(feature, layer) {
//     layer.bindPopup(`${feature.properties.place}<hr>Magnitude: ${feature.properties.mag}<br>Depth: ${feature.geometry.coordinates[2]}`);
//   }

//   function getColor(depth) {
//   //  var getColor = data[1].mag;
//     //for ( i=0; i< data.length; i++) 
//         if (depth >= 90.0) {
//           return "darkgreen";
//         } 
//         else if (depth >= 15) {
//           return "forestgreen"; 
//         } 
//         else if (depth >= 9.0) {
//           return "lawngreen"; 
//         } 
//         else if (depth >= 5.0) {
//           return "lightgreen";        
//         }
//         else if (depth >= 2.0) {
//             return "springgreen"; 
//         }
//         else {
//             return "palegreen"; 
//         }

//   }  
        
//    var earthquakes = L.geoJSON(data.features, {
//     onEachFeature: onEachFeature,
//     pointToLayer: function (feature, latlng) {
//       return L.circleMarker(latlng);
//     },

//     style: function(feature) {
//       return {
//         "color": "black",
//         "fillOpacity": 1,
//         "fillColor": getColor(feature.geometry.coordinates[2]),  //getColor(feature.properties.mag),
//         "weight": 2,
//         "radius": feature.properties.mag * 5,
//         "opacity": 0.65    
//       }
//     }  
//   })
    

//   // Define streetmap and darkmap layers
//   var streetmap = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
//     attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
//     tileSize: 512,
//     maxZoom: 18,
//     zoomOffset: -1,
//     id: "mapbox/streets-v11",
//     accessToken: API_KEY
//   });

//   var darkmap = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
//     attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
//     maxZoom: 18,
//     id: "dark-v10",
//     accessToken: API_KEY
//   });

//   // Define a baseMaps object to hold our base layers
//   var baseMaps = {
//     "Street Map": streetmap,
//     "Dark Map": darkmap
//   };

//   var overlayMaps = {
//     "Earthquakes": earthquakes
//   }

//   // Create a new map
//   var myMap = L.map("map", {
//     center: [
//       37.09, -95.71
//     ],
//     zoom: 5,
//     layers: [darkmap, earthquakes] //default map opens
//   });

//   // Create a layer control containing our baseMaps
//   // Be sure to add an overlay Layer containing the earthquake GeoJSON
//   L.control.layers(baseMaps, overlayMaps, {
//     collapsed: false
//   }).addTo(myMap);

