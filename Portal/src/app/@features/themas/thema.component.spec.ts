import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ThemaComponent } from './thema.component';

describe('AboutComponent', () => {
  let component: ThemaComponent;
  let fixture: ComponentFixture<ThemaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
