import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NieuwsDetailComponent } from './nieuws-detail.component';

describe('NieuwsDetailComponent', () => {
  let component: NieuwsDetailComponent;
  let fixture: ComponentFixture<NieuwsDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NieuwsDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NieuwsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
