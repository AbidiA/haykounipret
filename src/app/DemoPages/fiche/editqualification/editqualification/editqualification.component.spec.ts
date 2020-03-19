import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditqualificationComponent } from './editqualification.component';

describe('EditqualificationComponent', () => {
  let component: EditqualificationComponent;
  let fixture: ComponentFixture<EditqualificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditqualificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditqualificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
