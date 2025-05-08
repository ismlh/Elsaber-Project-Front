import { Component, OnInit } from '@angular/core';
import { Iquestion } from '../../../../../BL/Models/Iquestion';
import { IQuestionService } from '../../../../../Core/Services/IquestionService/iquestion.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-question-index',
  imports: [RouterLink],
  templateUrl: './question-index.component.html',
  styleUrl: './question-index.component.css',
})
export class QuestionIndexComponent implements OnInit {
  Questions: Iquestion[] = [] as Iquestion[];

  constructor(
    private _questionService: IQuestionService,
    private _router: Router
  ) {
    // Constructor logic can go here if needed
  }

  ngOnInit(): void {
    this.getAllQuestions();
  }

  getAllQuestions() {
    this._questionService.getAllQuestions().subscribe({
      next: (response) => {
        this.Questions = response;
      },
      error: (error) => {
        alert('حدث خطا ما تواصل مع الدعم الفني');
      },
    });
  }
  EditQuestion(id: number) {
    this._router.navigate(['/Dashboard/EditQuestion', id]);
  }
  DeleteQuestion(id: number) {
    this._questionService.deleteQuestion(id).subscribe({
      next: (response) => {
        alert('تم حذف السؤال بنجاح' + response.question);
        this.getAllQuestions();
      },
      error: (error) => {
        alert('حدث خطا ما تواصل مع الدعم الفني');
      },
    });
  }
}
