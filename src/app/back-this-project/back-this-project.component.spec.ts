import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackThisProjectComponent } from './back-this-project.component';

describe('BackThisProjectComponent', () => {
  let component: BackThisProjectComponent;
  let fixture: ComponentFixture<BackThisProjectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BackThisProjectComponent]
    });
    fixture = TestBed.createComponent(BackThisProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
