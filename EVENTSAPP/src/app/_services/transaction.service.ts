import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { BaseService } from './base.service';
import { Login } from '../_models'

@Injectable()
export class TransactionService {

    private listUrl: string = "/eventsApp/api/transaction/list";

    constructor(private apiService: BaseService){}

    public listTransactions(postData: Login): Observable<any> {
        return this.apiService.post(this.listUrl,postData);
    }

}