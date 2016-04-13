module app.controller{
    interface INavController{
        user: app.domain.IUser;
    }
    
    class NavController implements INavController{
        user: app.domain.IUser;
        constructor(private userService: app.common.UserService){
            this.user = userService.getActiveUser();
        }
    }
    
    angular.module("taskmap")
    .controller("NavController", NavController);
}