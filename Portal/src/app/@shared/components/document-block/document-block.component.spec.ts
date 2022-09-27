import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentBlockComponent } from './document-block.component';

describe('DocumentBlockComponent', () => {
  let component: DocumentBlockComponent;
  let fixture: ComponentFixture<DocumentBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
