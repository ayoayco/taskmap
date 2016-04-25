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
