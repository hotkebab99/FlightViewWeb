import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VolDetailsGeneralComponent } from './vol-details-general.component';

describe('VolDetailsGeneralComponent', () => {
  let component: VolDetailsGeneralComponent;
  let fixture: ComponentFixture<VolDetailsGeneralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VolDetailsGeneralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VolDetailsGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
