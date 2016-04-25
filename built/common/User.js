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
