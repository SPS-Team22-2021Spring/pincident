// Copyright 2020 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Adds a random greeting to the page.
 */

const mymap = L.map('mapid').setView([-23.5505, -46.6333], 3)

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  id: 'mapbox/streets-v11',
  tileSize: 512,
  zoomOffset: -1,
  accessToken: 'pk.eyJ1IjoidmFsZW50aW5hc3BzIiwiYSI6ImNrbXFseXo5OTBpaXQycHQ0b2diYWZka2kifQ.Z5CYmHqc3fzrf8z-wxZYrg'
}).addTo(mymap)

const marker = L.marker([-23.5505, -46.633]).addTo(mymap)
marker.bindPopup('<b>Hello world!</b><br>This is where Valentina is from!').openPopup()

//DO A POST REQUEST WITHOUT RELOADING THE PAGE 
//(Kui and valentina check out my form this is how you send the 
//data into the servlets and wait for a json response that contains 
//all the objects as json array objects)
//The putlocations function puts all the points inside the map

$("#filter").submit(function(e){
    e.preventDefault();
    $.ajax({
        url: 'ls',
        type: 'POST',
        data: $("#filter").serialize(),
        success: function(d) {
           console.log(d);
           putLocations(d);
        }
    })
});

function putLocations(data){
    var locations = [];
    for(var i = 0; i< data.length; i++){
        coords = [];
        for (const property in data[i]) {
            if(`${property}` == 'latitude' || `${property}` == 'longitude'){
                coords.push(data[i][property]);
            }
        }
        locations.push(coords);
    }
    for (var i = 0; i < locations.length; i++) {
        var marker1 =  L.marker(locations[i]).addTo(mymap);
        //Here you can add all the info of the reports (later)
    }
}