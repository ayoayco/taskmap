module app.common{
    interface IUserService{
        user: app.domain.IUserModel;
        createUser(username: string, firstname: string, lastname: string, premium: boolean): app.domain.IUserModel;
        getActiveUser(): app.domain.IUserModel;
    }
    
    export class UserService implements IUserService{
        user: app.domain.IUserModel;
        
        constructor(){
            
        }
        
        createUser(username: string, firstname: string, lastname: string, premium: boolean): app.domain.IUserModel {
            this.user = new app.domain.UserClass(username, firstname,lastname,premium);
            return this.user;
        }
        
        getActiveUser(): app.domain.IUserModel{
            if(this.user) return this.user;
            else return this.createUser("username", "firstname", "lastname", false);
        }
    }
    
    angular.module("common.services")
    .service("userService", UserService);
}