import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterCustomSubmissionComponent } from './filter-custom-submission.component';

describe('FilterCustomSubmissionComponent', () => {
  let component: FilterCustomSubmissionComponent;
  let fixture: ComponentFixture<FilterCustomSubmissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilterCustomSubmissionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FilterCustomSubmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
