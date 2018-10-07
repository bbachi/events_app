import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { BaseService } from './base.service';
import { Login } from '../_models'

@Injectable()
export class LoginService {

    private loginUrl: string = "/eventsApp/api/login";

    constructor(private restService: BaseService){}

    public validateLogin(postData: Login): Observable<any> {
        return this.restService.post(this.loginUrl,postData);
    }

}