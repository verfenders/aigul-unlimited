import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskFaqComponent } from './task-faq.component';

describe('TaskFaqComponent', () => {
  let component: TaskFaqComponent;
  let fixture: ComponentFixture<TaskFaqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskFaqComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TaskFaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
