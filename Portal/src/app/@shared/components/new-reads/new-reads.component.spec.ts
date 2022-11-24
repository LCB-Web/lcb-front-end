import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewReadsComponent } from './new-reads.component';

describe('NewReadsComponent', () => {
  let component: NewReadsComponent;
  let fixture: ComponentFixture<NewReadsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewReadsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewReadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
