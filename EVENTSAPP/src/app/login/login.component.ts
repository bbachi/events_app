import { Component, OnInit, OnDestroy  } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from "rxjs";
import { takeUntil } from 'rxjs/operators'
import { Login } from '../_models'
import { Store } from '@ngrx/store';
import * as fromRoot from '../app-state/reducers';
import * as loggedInActions from '../app-state/actions/loggedinuser'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit, OnDestroy {

  loginModel: Login;
  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private route: ActivatedRoute, private router: Router, private store: Store<fromRoot.State>) {
      this.loginModel = new Login();
  }

  ngOnInit() {}

  login() {
     console.log("login clicked!!");
     this.store.dispatch(new loggedInActions.ValidateLogin(this.loginModel));

     this.store.select(fromRoot.validateLogin)
     .pipe(
        takeUntil(this.destroy$),
      )
      .subscribe(data => this.redirectUser(data))
  }

  redirectUser(resp: any) {
      if(resp.isLoadingSuccess){
        this.router.navigate(['./dashboard']);
      }else{
         console.log("user credentials not valid!!");
      }
  }

  ngOnDestroy(){
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

}
