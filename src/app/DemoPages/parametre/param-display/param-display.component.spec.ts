import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParamDisplayComponent } from './param-display.component';

describe('ParamDisplayComponent', () => {
  let component: ParamDisplayComponent;
  let fixture: ComponentFixture<ParamDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParamDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParamDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
