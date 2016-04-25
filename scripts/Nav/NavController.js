var app;
(function (app) {
    var controllers;
    (function (controllers) {
        var NavController = (function () {
            function NavController(userService) {
                this.userService = userService;
                this.user = userService.getActiveUser();
            }
            return NavController;
        })();
        angular.module("taskmap")
            .controller("NavController", NavController);
    })(controllers = app.controllers || (app.controllers = {}));
})(app || (app = {}));
