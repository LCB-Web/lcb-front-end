import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemaBlockComponent } from './thema-block.component';

describe('ThemaBlockComponent', () => {
  let component: ThemaBlockComponent;
  let fixture: ComponentFixture<ThemaBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThemaBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemaBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
