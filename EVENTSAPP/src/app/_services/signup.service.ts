import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { BaseService } from './base.service';
import { Login } from '../_models'

@Injectable()
export class SignupService {

    private signupUrl: string = "/eventsApp/api/signup";

    constructor(private restService: BaseService){}

    public signupUser(postData: Login): Observable<any> {
        return this.restService.post(this.signupUrl,postData);
    }

}