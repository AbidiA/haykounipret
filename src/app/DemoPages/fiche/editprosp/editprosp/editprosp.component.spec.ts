import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditprospComponent } from './editprosp.component';

describe('EditprospComponent', () => {
  let component: EditprospComponent;
  let fixture: ComponentFixture<EditprospComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditprospComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditprospComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
