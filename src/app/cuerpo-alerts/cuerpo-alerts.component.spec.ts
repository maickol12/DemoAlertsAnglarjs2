import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuerpoAlertsComponent } from './cuerpo-alerts.component';

describe('CuerpoAlertsComponent', () => {
  let component: CuerpoAlertsComponent;
  let fixture: ComponentFixture<CuerpoAlertsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuerpoAlertsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuerpoAlertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
