import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject } from "rxjs";
import { takeUntil } from 'rxjs/operators'
import * as fromRoot from '../../app-state/reducers';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  isLoggedIn: boolean = false;
  destroy$: Subject<boolean> = new Subject<boolean>();
  constructor(private store: Store<fromRoot.State>) { }

  ngOnInit() {

    /*this.store.select(fromRoot.getLoggedInUser)
    .pipe(
       takeUntil(this.destroy$),
     )
     .subscribe(data => {
       console.log("in header!")
       console.log(data)
       console.log("in header!")
       this.isLoggedIn = data
      })
      */
  }

  ngOnDestroy(){
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

}
