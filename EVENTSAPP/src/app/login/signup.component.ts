import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as fromRoot from '../app-state/reducers';
import * as loggedInActions from '../app-state/actions/user'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, 
    private store: Store<fromRoot.State>) { }

  signupForm = new FormGroup({
    userName: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required)
  });

  ngOnInit() {
  }

  onSignup() {
      console.log(this.signupForm.value)
      if(this.signupForm.valid){
         this.store.dispatch(new loggedInActions.SignupUser({user:this.signupForm.value}));
      }
      
  }

}
