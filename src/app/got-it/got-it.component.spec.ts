import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GotItComponent } from './got-it.component';

describe('GotItComponent', () => {
  let component: GotItComponent;
  let fixture: ComponentFixture<GotItComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GotItComponent]
    });
    fixture = TestBed.createComponent(GotItComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
