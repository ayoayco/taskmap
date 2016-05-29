var leafletapp;
(function (leafletapp) {
    var map = L.map('map');
    var userLocation;
    var tileLayer = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        attribution: '2016 &copy; Ayo Ayco. All Rights Reserved.',
        maxZoom: 18,
        id: 'ayoayco.njl702a2',
        accessToken: 'pk.eyJ1IjoiYXlvYXljbyIsImEiOiI1YzVic1JvIn0.AnH_wYkYOKMJGmrgGT-A8g'
    });
    var options = {
        // enableHighAccuracy = should the device take extra time or power to return a really accurate result, or should it give you the quick (but less accurate) answer?  
        enableHighAccuracy: true,
        // timeout = how long does the device have, in milliseconds to return a result?
        timeout: 10000,
        // maximumAge = maximum age for a possible previously-cached position. 0 = must return the current position, not a prior cached position
        maximumAge: 0
    };
    function setUserLocation() {
        // call getCurrentPosition()
        navigator.geolocation.getCurrentPosition(success, error, options);
        // upon success, do this
        function success(pos) {
            // get longitude and latitude from the position object passed in
            userLocation = L.latLng(pos.coords.latitude, pos.coords.longitude);
            console.log("User location acquired: " + userLocation);
            map.setView(userLocation, 13);
            // markLocation(userLocation);
            highlightArea(userLocation, 6500);
            tileLayer.addTo(map);
        }
        // upon error, do this
        function error(err) {
            console.log('Error: ' + err + ' :('); // alert the error message
        }
    }
    function markLocation(loc) {
        L.marker(loc).addTo(map);
    }
    function highlightArea(loc, rad) {
        L.circle(loc, rad, {
            color: 'red',
            fillColor: 'red',
            fillOpacity: 0.2
        }).addTo(map);
    }
    if ('geolocation' in navigator) {
        setUserLocation();
    }
    else {
        userLocation = L.latLng(51.505, -0.09);
        console.log("Failed to acquire User location.");
        // markLocation(userLocation);
        highlightArea(userLocation, 6500);
        map.setView(userLocation, 13);
        tileLayer.addTo(map);
    }
})(leafletapp || (leafletapp = {}));
