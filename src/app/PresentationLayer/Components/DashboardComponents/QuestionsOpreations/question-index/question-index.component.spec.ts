import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionIndexComponent } from './question-index.component';

describe('QuestionIndexComponent', () => {
  let component: QuestionIndexComponent;
  let fixture: ComponentFixture<QuestionIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuestionIndexComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestionIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
