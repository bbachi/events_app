import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CamelcasePipe, NOwhiteSpacePipe, ToLowerCasePipe } from '../_pipes'
import { convertToParamMap, ParamMap, Params, ActivatedRoute, Router } from '@angular/router';
import { ReplaySubject, of } from 'rxjs';
import { Store } from '@ngrx/store';

import { LoginComponent } from './login.component';
import { store } from '@angular/core/src/render3/instructions';

const routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl']);
const storeSpy = jasmine.createSpyObj('Store', ['dispatch','select']);

export class ActivatedRouteStub {
  // Use a ReplaySubject to share previous values with subscribers
  // and pump new values into the `paramMap` observable
  private subject = new ReplaySubject<ParamMap>();

  constructor(initialParams?: Params) {
    this.setParamMap(initialParams);
  }

  /** The mock paramMap observable */
  readonly paramMap = this.subject.asObservable();

  /** Set the paramMap observables's next value */
  setParamMap(params?: Params) {
    this.subject.next(convertToParamMap(params));
  };
}

fdescribe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let store: Store<any>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule
      ],
      declarations: [ LoginComponent, CamelcasePipe ],
      schemas: [ NO_ERRORS_SCHEMA ],
      providers: [
        { provide:ActivatedRoute, useValue: ActivatedRouteStub },
        { provide: Router, useValue: routerSpy },
        { provide: Store, useValue: storeSpy },
        ToLowerCasePipe,
        NOwhiteSpacePipe
      ]
    })
    .compileComponents();

    store = TestBed.get(Store);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should sanitize username', () => {
    
    let result = component.sanitizeUserName("US ER");

    expect(result).toBe("user");
  });

  it('should login', () => {
    
    storeSpy.select.and.returnValue( of(true) );
    component.loginModel.userName = "user";

    component.login();

    expect(store.select).toHaveBeenCalled();
  });

});
