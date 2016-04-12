module app.common{
    interface IUserService{
        createUser(username: string, firstname: string, lastname: string): app.domain.IUser;
    }
    
    export class UserService implements IUserService{
        constructor(){
            
        }
        
        createUser(username: string, firstname: string, lastname: string): app.domain.IUser {
            var user = new app.domain.User(username, firstname, lastname);
            return user;
        }
    }
    
    angular.module("common.services")
    .service("userService", UserService);
}