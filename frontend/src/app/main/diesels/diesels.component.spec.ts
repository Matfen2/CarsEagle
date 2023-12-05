import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DieselsComponent } from './diesels.component';

describe('DieselsComponent', () => {
  let component: DieselsComponent;
  let fixture: ComponentFixture<DieselsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DieselsComponent]
    });
    fixture = TestBed.createComponent(DieselsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
