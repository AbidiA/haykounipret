import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditsimComponent } from './editsim.component';

describe('EditsimComponent', () => {
  let component: EditsimComponent;
  let fixture: ComponentFixture<EditsimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditsimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditsimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
