module app.common{
    interface IUserService{
        user: app.domain.IUserModel;
        createUser(username: string, firstname: string, lastname: string, premium: boolean): app.domain.IUser;
        getActiveUser(): app.domain.IUser;
    }
    
    export class UserService implements IUserService{
        user: app.domain.IUserModel;
        
        constructor(){
            
        }
        
        createUser(username: string, firstname: string, lastname: string, premium: boolean): app.domain.IUser {
            this.user = new app.domain.UserClass(username, firstname,lastname,premium);
            return this.user;
        }
        
        getActiveUser(): app.domain.IUser{
            if(this.user) return this.user;
            else return this.createUser("username", "firstname", "lastname", false);
        }
    }
    
    angular.module("common.services")
    .service("userService", UserService);
}