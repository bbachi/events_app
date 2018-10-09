import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEventConfirmComponent } from './create-event-confirm.component';

describe('CreateEventConfirmComponent', () => {
  let component: CreateEventConfirmComponent;
  let fixture: ComponentFixture<CreateEventConfirmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateEventConfirmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEventConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
