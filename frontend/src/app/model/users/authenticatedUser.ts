import { Token } from './token';
import { Role } from './role';
export class AuthenticatedUser {
    public id : number;
    public role : Role;
    public username : string;
    public token : Token;

    constructor(id : number, role : Role, username : string, token : Token) {
        this.id = id;
        this.role = role;
        this.username = username;
        this.token = token;
    }
}
