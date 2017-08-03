import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuerpoCameraComponent } from './cuerpo-camera.component';

describe('CuerpoCameraComponent', () => {
  let component: CuerpoCameraComponent;
  let fixture: ComponentFixture<CuerpoCameraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuerpoCameraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuerpoCameraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
