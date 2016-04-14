module app.controller{
    interface INavController{
        user: app.domain.IUserModel;
    }
    
    class NavController implements INavController{
        user: app.domain.IUserModel;
        constructor(private userService: app.common.UserService){
            this.user = userService.getActiveUser();
        }
    }
    
    angular.module("taskmap")
    .controller("NavController", NavController);
}