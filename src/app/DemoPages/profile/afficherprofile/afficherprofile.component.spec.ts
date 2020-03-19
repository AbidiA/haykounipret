import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherprofileComponent } from './afficherprofile.component';

describe('AfficherprofileComponent', () => {
  let component: AfficherprofileComponent;
  let fixture: ComponentFixture<AfficherprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfficherprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfficherprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
