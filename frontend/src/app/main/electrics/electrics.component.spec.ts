import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectricsComponent } from './electrics.component';

describe('ElectricsComponent', () => {
  let component: ElectricsComponent;
  let fixture: ComponentFixture<ElectricsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ElectricsComponent]
    });
    fixture = TestBed.createComponent(ElectricsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
