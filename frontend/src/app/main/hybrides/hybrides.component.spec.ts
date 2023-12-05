import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HybridesComponent } from './hybrides.component';

describe('HybridesComponent', () => {
  let component: HybridesComponent;
  let fixture: ComponentFixture<HybridesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HybridesComponent]
    });
    fixture = TestBed.createComponent(HybridesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
