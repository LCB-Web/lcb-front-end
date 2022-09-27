import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NieuwsBlockComponent } from './nieuws-block.component';

describe('NieuwsBlockComponent', () => {
  let component: NieuwsBlockComponent;
  let fixture: ComponentFixture<NieuwsBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NieuwsBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NieuwsBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
