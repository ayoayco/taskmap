module app.controllers{
    
    interface IUserController{
        user: app.domain.IUser;
    }
    
    class UserController implements IUserController{
        user: app.domain.IUser;
        constructor(private userService: app.common.UserService){
            this.user = userService.createUser("ayoayco", "Ayo", "Ayco");
        }
    }
    
    angular.module("taskmap")
    .controller("UserController", UserController);
}