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
                this.userService.createUser("ayoayco", "Ayo", "Ayco");
            };
            return MainController;
        })();
        angular.module("taskmap")
            .controller("MainController", MainController);
    })(controllers = app.controllers || (app.controllers = {}));
})(app || (app = {}));
