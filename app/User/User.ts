module app.domain{
    export interface IUser{
        username: string;
        firstName: string;
        lastName: string;
    }
    export class User implements IUser{
        constructor(public username: string,
        public firstName: string,
        public lastName: string){
            
        }
    }
}