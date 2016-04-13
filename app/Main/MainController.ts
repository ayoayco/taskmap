module app.controllers{    
    interface IMainController{
    }
    
    class MainController implements IMainController{
        constructor(private userService: app.common.UserService){
            this.loadData();
        }
        private loadData(){
            this.userService.createUser("ayoayco", "Ayo", "Ayco");
        }
    }
    
    angular.module("taskmap")
    .controller("MainController", MainController);
}