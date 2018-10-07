import { Component, OnInit, OnDestroy  } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from "rxjs";
import { takeUntil } from 'rxjs/operators'
import { Login } from '../_models'
import { Store } from '@ngrx/store';
import * as fromRoot from '../app-state/reducers';
import * as loggedInActions from '../app-state/actions/loggedinuser'
import { ToLowerCasePipe, NOwhiteSpacePipe } from '../_pipes'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit, OnDestroy {

  loginModel: Login;
  errorMessage: string;
  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private route: ActivatedRoute, private router: Router, 
    private store: Store<fromRoot.State>, private toLowerCase: ToLowerCasePipe, 
    private noWhiteSpace: NOwhiteSpacePipe) {
      this.loginModel = new Login();
  }

  ngOnInit() {}

  login() {
     console.log("login clicked!!");
     this.store.dispatch(new loggedInActions.ValidateLogin({userName:this.sanitizeUserName(this.loginModel.userName),password:this.loginModel.password}));
     this.store.select(fromRoot.validateLogin)
     .pipe(
        takeUntil(this.destroy$),
      )
      .subscribe(data => this.redirectUser(data))
  }

  sanitizeUserName(userName: string){
     let username = this.noWhiteSpace.transform(userName);
     return this.toLowerCase.transform(username);
  }

  redirectUser(resp: any) {
      console.log(resp);
      if(resp.isLoadingSuccess && resp.loggedInUser){
        this.errorMessage = undefined;
        this.router.navigate(['./dashboard']);
      }else{
         console.log("user credentials not valid!!");
         this.errorMessage = "user credentials are not valid."
      }
  }

  ngOnDestroy(){
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

}
