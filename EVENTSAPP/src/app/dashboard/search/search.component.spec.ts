import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core'
import { By } from "@angular/platform-browser";
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { LoginbuttonDirective, SignupbuttonDirective } from '../../_directives'

import { SearchComponent } from './search.component';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ MatAutocompleteModule ],
      declarations: [ SearchComponent, LoginbuttonDirective ],
      schemas: [ NO_ERRORS_SCHEMA ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('hovering over input', () => {
    
    const serachBtn = fixture.debugElement.query(By.css('.searchbtn'));
    
    serachBtn.triggerEventHandler('mouseenter', null); 
    fixture.detectChanges();
    expect(serachBtn.nativeElement.style.backgroundColor).toBe('yellow'); 
  
    serachBtn.triggerEventHandler('mouseleave', null);
    fixture.detectChanges();
    expect(serachBtn.nativeElement.style.backgroundColor).toBe('');
  
  });

});
