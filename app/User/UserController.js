var app;
(function (app) {
    var controllers;
    (function (controllers) {
        var UserController = (function () {
            function UserController(userService) {
                this.userService = userService;
                this.user = userService.createUser("ayoayco", "Ayo", "Ayco");
            }
            return UserController;
        })();
        angular.module("taskmap")
            .controller("UserController", UserController);
    })(controllers = app.controllers || (app.controllers = {}));
})(app || (app = {}));
