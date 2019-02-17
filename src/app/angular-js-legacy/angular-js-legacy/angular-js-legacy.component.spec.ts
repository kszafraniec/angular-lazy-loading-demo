import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularJsLegacyComponent } from './angular-js-legacy.component';

describe('AngularJsLegacyComponent', () => {
  let component: AngularJsLegacyComponent;
  let fixture: ComponentFixture<AngularJsLegacyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularJsLegacyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularJsLegacyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
