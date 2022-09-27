import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnsVerhaalComponent } from './ons-verhaal.component';

describe('OnsVerhaalComponent', () => {
  let component: OnsVerhaalComponent;
  let fixture: ComponentFixture<OnsVerhaalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnsVerhaalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnsVerhaalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
