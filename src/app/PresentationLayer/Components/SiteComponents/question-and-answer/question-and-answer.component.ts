import { Component, OnInit } from '@angular/core';
import { Iquestion } from '../../../../BL/Models/Iquestion';
import { IQuestionService } from '../../../../Core/Services/IquestionService/iquestion.service';

@Component({
  selector: 'app-question-and-answer',
  imports: [],
  templateUrl: './question-and-answer.component.html',
  styleUrl: './question-and-answer.component.css',
})
export class QuestionAndAnswerComponent implements OnInit {
  Questions: Iquestion[] = [] as Iquestion[];
  answerId: number = 0;
  constructor(private _questionService: IQuestionService) {}

  ngOnInit(): void {
    this.GetQuestions();
  }

  GetQuestions() {
    this._questionService.getAllQuestions().subscribe({
      next: (data) => {
        this.Questions = data;
      },
      error: (error) => {
        alert('حدث خطا ما تواصل مع الدعم الفني');
      },
    });
  }
}
