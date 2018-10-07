import { Injectable, EventEmitter, Output, OnInit } from '@angular/core';
import { Http, Response, Headers, RequestOptions, ResponseContentType } from '@angular/http';
import { environment } from '../../environments/environment';
import { Observable, Subject, of } from 'rxjs';
import { map, retry, catchError } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import * as fromRoot from '../app-state/reducers';

@Injectable()
export class BaseService implements OnInit {

    private rootUrl = environment.contextRoot+environment.apiRoot;
    private isTestEnvironemnt: boolean = false;
    loggedInUser: any;
    bpDtlsList: any;

    constructor(private http: Http, private store: Store<fromRoot.State>) {
    
    }

    post(url: string, inData: any): Observable<any> {
    
    let headers = new Headers({'Content-Type' : 'application/json'});
    let options = new RequestOptions({headers: headers});
        
    return this.http.post(this.rootUrl+url, JSON.stringify(inData), options).pipe(
        retry(3), // Retry up to 3 times before failing
        map((response: Response) => <any> response.json()),
        catchError(err => of([]))
    );
        
    }

    get(url: string):  Observable<any> {
        let headers = new Headers({'Content-Type' : 'application/json'});
        let options = new RequestOptions({headers: headers});

        return this.http.get(this.rootUrl+url, options).pipe(
            retry(3), // Retry up to 3 times before failing
            map((response: Response) => <any> response.json()),
            catchError(err => of([]))
        );
    }

    
    private handleError(error: Response) {
        console.log('ERROR::STATUS:::::' + error.status);
        console.log('ERROR::STATUS TEXT:::::' + error.statusText);
        if(error.status == 504 || error.status == 502 || error.status == 503){
            return of("");
        }else{
            return of(JSON.stringify(error) || 'Server error');
        }
    }

    ngOnInit(){}

}