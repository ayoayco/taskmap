var app;
(function (app) {
    var common;
    (function (common) {
        var UserService = (function () {
            function UserService() {
            }
            UserService.prototype.createUser = function (username, firstname, lastname) {
                var user = new app.domain.User(username, firstname, lastname);
                return user;
            };
            return UserService;
        })();
        common.UserService = UserService;
        angular.module("common.services")
            .service("userService", UserService);
    })(common = app.common || (app.common = {}));
})(app || (app = {}));
