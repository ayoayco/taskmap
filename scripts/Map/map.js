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
    function getUserLatLng() {
        var loc;
        var options = {
            // enableHighAccuracy = should the device take extra time or power to return a really accurate result, or should it give you the quick (but less accurate) answer?  
            enableHighAccuracy: false,
            // timeout = how long does the device have, in milliseconds to return a result?
            timeout: 5000,
            // maximumAge = maximum age for a possible previously-cached position. 0 = must return the current position, not a prior cached position
            maximumAge: 0
        };
        // call getCurrentPosition()
        navigator.geolocation.getCurrentPosition(success, error /*, options*/);
        // upon success, do this
        function success(pos) {
            // get longitude and latitude from the position object passed in
            console.log("inside success " + loc.lat + "," + loc.lng);
            return loc = L.latLng(pos.coords.latitude, pos.coords.longitude);
        }
        // upon error, do this
        function error(err) {
            console.log('Error: ' + err + ' :('); // alert the error message
        }
        console.log("inside function " + loc.lat + "," + loc.lng);
        return loc;
    }
    if ('geolocation' in navigator) {
        // geolocation is supported :)
        userLocation = getUserLatLng();
    }
    else {
        // no geolocation :(
        userLocation = L.latLng(51.505, -0.09);
    }
    map.setView([userLocation.lat, userLocation.lng], 13);
    tileLayer.addTo(map);
})(leafletapp || (leafletapp = {}));
