import { Injectable, inject } from "@angular/core";
import { UserService } from "./user.service";

@Injectable({
    providedIn:'root'
})

export class AuthService {
    isLogged: boolean = false;
    userService : UserService = inject(UserService)

    login(username : string , password : string){

        let user = this.userService.users.find((u)=> (u.username === username && u.password === password));
        user === undefined ? this.isLogged = false : this.isLogged = true;
        return user;
    }

    logOut(){
        this.isLogged = false;
    }

    IsAuthenticated(){
        return this.isLogged;
    }
}