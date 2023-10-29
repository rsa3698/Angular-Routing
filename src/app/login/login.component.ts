import { Component, ElementRef, OnInit, ViewChild, inject } from '@angular/core';
import { AuthService } from '../Services/auth.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('username') username: ElementRef;
  @ViewChild('password') password: ElementRef;

  authService : AuthService = inject(AuthService);
  router: Router = inject(Router);
  activeRoute: ActivatedRoute = inject(ActivatedRoute);

  ngOnInit(){
    this.activeRoute.queryParamMap.subscribe((query)=>{
      const logout = Boolean(query.get('logouy'));
      if(logout)
      {
        this.authService.logOut();
        alert('You are now logged out. IsLogged = ' + this.authService.isLogged);
      }
    })
  }

  OnLoginClicked(){

    const username = this.username.nativeElement.value;
    const password = this.password.nativeElement.value;

    const user= this.authService.login(username , password);
    if(user === undefined){
      alert('The login credentials you have entered is not correct.')
    }
    else{
      alert('Welcome ' + user.name + '. You are logged in.');
      this.router.navigate(['\Courses']);
    }
  }
}
