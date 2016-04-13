module app.domain{
    export interface IUserModel{
        username: string;
        firstName: string;
        lastName: string;
        premium: boolean;
    }
    export class UserClass implements IUserModel{
        constructor(
            public username: string,
            public firstName: string,
            public lastName: string,
            public premium: boolean){
            
        }
    }
}