module map{
        
    var map = L.map('map').setView([51.505, -0.09], 13);

    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        attribution: '2016 &copy; Ayo Ayco. All Rights Reserved.',
        maxZoom: 18,
        id: 'ayoayco.njl702a2',
        accessToken: 'pk.eyJ1IjoiYXlvYXljbyIsImEiOiI1YzVic1JvIn0.AnH_wYkYOKMJGmrgGT-A8g'
    }).addTo(map);



    var marker = L.marker([51.5, -0.09]).addTo(map);

    var circle = L.circle([51.508, -0.11], 500, {
        color: 'red',
        fillColor: 'red',
        fillOpacity: 0.4,
    }).addTo(map);

    var polygon = L.polygon([
        [51.509, -0.08],
        [51.503, -0.06],
        [51.51, -0.047]
    ],{
        color: 'blue',
        fillColor: 'red',
        opacity: 0
    }).addTo(map);

    marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
    circle.bindPopup("I am a circle.");
    polygon.bindPopup("I am a polygon.");

    var popup = L.popup()
        .setLatLng([51.5, -0.19])
        .setContent("I am a standalone popup.")
        .openOn(map);

    function onMapClick(e) {
        //alert("You clicked the map at " + e.latlng);
        L.marker(e.latlng).addTo(map).bindPopup("hello world!");
    }

    map.on('click', onMapClick);

}