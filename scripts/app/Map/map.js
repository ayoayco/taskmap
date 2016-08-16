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
        timeout: 5000,
        // maximumAge = maximum age for a possible previously-cached position. 0 = must return the current position, not a prior cached position
        maximumAge: 0
    };
    var places = {};
    function setUserLocation(loc) {
        // call getCurrentPosition()
        navigator.geolocation.getCurrentPosition(success, error, options);
        // upon success, do this
        function success(pos) {
            // get longitude and latitude from the position object passed in
            if (loc) {
                userLocation = loc;
            }
            else {
                userLocation = L.latLng(pos.coords.latitude, pos.coords.longitude);
            }
            console.log("User location acquired: " + userLocation);
            map.setView(userLocation, 13);
            // markLocation(userLocation);
            highlightArea(userLocation, 5000); // 5 kilometers radius
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
        setUserLocation(L.latLng(51.505, -0.09));
    }
    var GooglePlacesSearchBox = L.Control.extend({
        onAdd: function () {
            var element = document.createElement("input");
            element.id = "searchBox";
            element.placeholder = "Search Box";
            return element;
        }
    });
    (new GooglePlacesSearchBox).addTo(map);
    var input = document.getElementById("searchBox");
    var searchBox = new google.maps.places.SearchBox(input);
    searchBox.addListener('places_changed', function () {
        var places = searchBox.getPlaces();
        if (places.length == 0) {
            return;
        }
        setUserLocation(L.latLng(places[0].geometry.location.lat(), places[0].geometry.location.lng()));
    });
})(leafletapp || (leafletapp = {}));
