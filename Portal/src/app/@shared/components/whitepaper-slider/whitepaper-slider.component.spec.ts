import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhitepaperSliderComponent } from './whitepaper-slider.component';

describe('WhitepaperSliderComponent', () => {
  let component: WhitepaperSliderComponent;
  let fixture: ComponentFixture<WhitepaperSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhitepaperSliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhitepaperSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
