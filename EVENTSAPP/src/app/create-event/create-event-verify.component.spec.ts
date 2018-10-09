import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEventVerifyComponent } from './create-event-verify.component';

describe('CreateEventVerifyComponent', () => {
  let component: CreateEventVerifyComponent;
  let fixture: ComponentFixture<CreateEventVerifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateEventVerifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEventVerifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
