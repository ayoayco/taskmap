var app;
(function (app_1) {
    var app = angular.module('taskmap', ["common.services"]);
})(app || (app = {}));
var leafletapp;
(function (leafletapp) {
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
        fillOpacity: 0.4
    }).addTo(map);
    var polygon = L.polygon([
        [51.509, -0.08],
        [51.503, -0.06],
        [51.51, -0.047]
    ], {
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
})(leafletapp || (leafletapp = {}));
var app;
(function (app) {
    var controllers;
    (function (controllers) {
        var MainController = (function () {
            function MainController(userService) {
                this.userService = userService;
                this.loadData();
            }
            MainController.prototype.loadData = function () {
                this.userService.createUser("ayoayco", "Ayo", "Ayco", true);
                this.title = "App";
                this.version = "1.0.0";
                this.beta = true;
            };
            return MainController;
        })();
        angular.module("taskmap")
            .controller("MainController", MainController);
    })(controllers = app.controllers || (app.controllers = {}));
})(app || (app = {}));
var app;
(function (app) {
    var controller;
    (function (controller) {
        var NavController = (function () {
            function NavController(userService) {
                this.userService = userService;
                this.user = userService.getActiveUser();
            }
            return NavController;
        })();
        angular.module("taskmap")
            .controller("NavController", NavController);
    })(controller = app.controller || (app.controller = {}));
})(app || (app = {}));
var app;
(function (app) {
    var domain;
    (function (domain) {
        var UserClass = (function () {
            function UserClass(username, firstName, lastName, premium) {
                this.username = username;
                this.firstName = firstName;
                this.lastName = lastName;
                this.premium = premium;
            }
            return UserClass;
        })();
        domain.UserClass = UserClass;
    })(domain = app.domain || (app.domain = {}));
})(app || (app = {}));
var app;
(function (app) {
    var common;
    (function (common) {
        var UserService = (function () {
            function UserService() {
            }
            UserService.prototype.createUser = function (username, firstname, lastname, premium) {
                this.user = new app.domain.UserClass(username, firstname, lastname, premium);
                return this.user;
            };
            UserService.prototype.getActiveUser = function () {
                if (this.user)
                    return this.user;
                else
                    return this.createUser("username", "firstname", "lastname", false);
            };
            return UserService;
        })();
        common.UserService = UserService;
        angular.module("common.services")
            .service("userService", UserService);
    })(common = app.common || (app.common = {}));
})(app || (app = {}));
var app;
(function (app) {
    var common;
    (function (common) {
        angular.module("common.services", []);
    })(common = app.common || (app.common = {}));
})(app || (app = {}));
