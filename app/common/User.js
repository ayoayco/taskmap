var app;
(function (app) {
    var domain;
    (function (domain) {
        var User = (function () {
            function User(username, firstName, lastName) {
                this.username = username;
                this.firstName = firstName;
                this.lastName = lastName;
            }
            return User;
        })();
        domain.User = User;
    })(domain = app.domain || (app.domain = {}));
})(app || (app = {}));
