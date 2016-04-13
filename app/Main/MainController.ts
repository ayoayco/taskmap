module app.controllers{    
    interface IMainController{
    }
    
    class MainController implements IMainController{
        constructor(private userService: app.common.UserService){
            this.loadData();
        }
        private loadData(){
            this.userService.createUser("ayoayco", "Ayo", "Ayco", true);
        }
    }
    
    angular.module("taskmap")
    .controller("MainController", MainController);
}