module app.common{
    interface IUserService{
        user: app.domain.IUser;
        createUser(username: string, firstname: string, lastname: string): app.domain.IUser;
        getActiveUser(): app.domain.IUser;
    }
    
    export class UserService implements IUserService{
        user: app.domain.IUser;
        
        constructor(){
            
        }
        
        createUser(username: string, firstname: string, lastname: string): app.domain.IUser {
            this.user = new app.domain.User(username, firstname, lastname);
            return this.user;
        }
        
        getActiveUser(): app.domain.IUser{
            if(this.user) return this.user;
            else return this.createUser("username", "firstname", "lastname");
        }
    }
    
    angular.module("common.services")
    .service("userService", UserService);
}