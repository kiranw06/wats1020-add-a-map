/* Begin by adding your on ready handler here, and then create the
   rest of your functions inside the on ready handler.

   (Note that you do not need to manually call Bootstrap functions in
   your Javascript because Bootstrap will automatically recognize your
   HTML structures and invoke the proper JS code accordingly. Be sure
   to reference the Bootstrap documentation.)
*/

                  // TODO: Inside of your on ready handler, invoke the Leaflet.js library
                  // to draw a map in your `#map-container` div.

$(document).ready(function(){
  
 // Create Map 
 var map = L.map('map-container').setView([46.852, -121.760], 13);
  
                  // TODO: Add 2 layers to your map you have visuals. Use the Open Street Maps
                  // tiles served through the MapQuest CDN. Consult this example to set up
                  // the map tiles layers:
  
 //  Map Layers
  
 var satLayer = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'kiranw06.p2k8hgka',
    accessToken: 'pk.eyJ1Ijoia2lyYW53MDYiLCJhIjoiY2lrOG81YTVtMDNobnR6a3d2M2dsNmZqdCJ9.KOOPMMJebBdI7FHCTM78gw'
  }).addTo(map);
  
   var streetLayer = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'kiranw06.p3j32c7b',
    accessToken: 'pk.eyJ1Ijoia2lyYW53MDYiLCJhIjoiY2lrOG81YTVtMDNobnR6a3d2M2dsNmZqdCJ9.KOOPMMJebBdI7FHCTM78gw'
  }).addTo(map);
  
  var mapLayers = {
    "Satellite View": satLayer,
    "Map View": streetLayer,
  }
  
  L.control.layers(mapLayers).addTo(map);
  satLayer.addTo(map);

                      // TODO: Customize that Map to show markers with popups at no fewer than 3
                      // interesting locations. (You'll need to figure out the latitude/longitude for
                      // these locations using a mapping tool such as Google Maps.)

  
  //  Circle Markers
  
  var circleSucess = L.circle([46.852947, -121.760424], 600, {
    color: 'green',
    fillColor: 'green',
    fillOpacity: 0.2
  }).addTo(map);
  circleSucess.bindPopup("<b>Point Sucess <br> 14,164 ft");
  
  var circleRuth = L.circle([46.876381, -121.716182], 300, {
    color: 'green',
    fillColor: 'green',
    fillOpacity: 0.2
  }).addTo(map);
  circleRuth.bindPopup("<b>Mount Ruth<br>8695 ft");
  
   var circleSteamboat = L.circle([46.872034, -121.731693], 300, {
    color: 'green',
    fillColor: 'green',
    fillOpacity: 0.2
  }).addTo(map);
  circleSteamboat.bindPopup("<b>Steamboat Prow<br>9720 ft");
  
  var circleLiberty = L.circle([46.862971, -121.7749], 500, {
    color: 'green',
    fillColor: 'green',
    fillOpacity: 0.2
  }).addTo(map);
  circleLiberty.bindPopup("<b>Liberty Cap<br>14,118 ft ft");
  
  var circleGlacierIsland = L.circle([46.824464, -121.819276], 500, {
    color: 'green',
    fillColor: 'green',
    fillOpacity: 0.2
  }).addTo(map);
  circleGlacierIsland.bindPopup("<b>Glacier Island<br>7695 ft");
  
 
 // Peak Marker 
  var marker = L.marker([46.852, -121.760]).addTo(map);
  marker.bindPopup("<b>Welcome to Mt. Rainier!</b><br>This peak is 4,392 feet high.");
 

});


