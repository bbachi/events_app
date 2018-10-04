import { catchError, map, startWith, switchMap } from 'rxjs/operators';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Injectable } from "@angular/core";
import { Observable, of as observableOf } from 'rxjs';
import { LoginService } from '../../_services';
import * as loggedInActions from '../actions/loggedinuser';

@Injectable()
export class LoginEffects {

  constructor(private action$: Actions, private loginService: LoginService) { }


  @Effect()
  validateLoginEffects$ = this.action$.pipe(
    ofType<loggedInActions.ValidateLogin>(
      loggedInActions.ActionTypes.VALIDATE_LOGIN
    ),
    startWith(new loggedInActions.ValidateLogin({})),
    switchMap(action => 
        this.loginService.validateLogin(action.payload).pipe(
          map(data => new loggedInActions.ValidateLoginSuccess(data)),
          catchError(error =>
            observableOf(new loggedInActions.ValidateLoginFailure({ error }))
          )
        )
    )
  )
}