import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectenBlockComponent } from './projecten-block.component';

describe('ProjectenBlockComponent', () => {
  let component: ProjectenBlockComponent;
  let fixture: ComponentFixture<ProjectenBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectenBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectenBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
