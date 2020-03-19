import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProspetComponent } from './prospet.component';

describe('ProspetComponent', () => {
  let component: ProspetComponent;
  let fixture: ComponentFixture<ProspetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProspetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProspetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
