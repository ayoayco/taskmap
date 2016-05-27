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
