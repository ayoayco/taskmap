module app.controllers{    
    interface IMainController{
        title: string;
        version: string;
        beta: boolean;
    }
    
    class MainController implements IMainController{
        title: string;
        version: string;
        beta: boolean;
        constructor(private userService: app.common.UserService){
            this.loadData();
        }
        private loadData(){
            this.userService.createUser("ayoayco", "Ayo", "Ayco", true);
            this.title = "App";
            this.version = "1.0.0";
            this.beta = true;
        }
    }
    
    angular.module("taskmap")
    .controller("MainController", MainController);
}