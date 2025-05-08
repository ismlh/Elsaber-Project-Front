import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IQuestionService } from '../../../../../Core/Services/IquestionService/iquestion.service';
import { Iquestion } from '../../../../../BL/Models/Iquestion';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-question',
  imports: [CommonModule, FormsModule],
  templateUrl: './edit-question.component.html',
  styleUrl: './edit-question.component.css',
})
export class EditQuestionComponent implements OnInit {
  QusetionToUpdate: Iquestion = {} as Iquestion;
  questionId: number = 0;
  constructor(
    private _activateRoute: ActivatedRoute,
    private _questionService: IQuestionService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this._activateRoute.params.subscribe((params) => {
      this.questionId = params['id'];
      this.getQuestionById(this.questionId);
    });
  }
  getQuestionById(id: number) {
    this._questionService.getQuestionById(id).subscribe({
      next: (response) => {
        this.QusetionToUpdate = response;
      },
      error: (err) => {
        alert('  حدث خطا في جلب السؤال تواصل مع الدعم الفني');
      },
    });
  }
  EditQuestion() {
    this._questionService
      .updateQuestion(this.QusetionToUpdate, this.questionId)
      .subscribe({
        next: (response) => {
          alert('تم تعديل السؤال بنجاح');
          this._router.navigate(['/Dashboard/QuestionsIndex']);
        },
        error: (err) => {
          alert('  حدث خطا في تعديل السؤال تواصل مع العم الفني ');
          console.log(err);
        },
      });
  }
}
