import { Component } from '@angular/core';
import { Iquestion } from '../../../../../BL/Models/Iquestion';
import { IQuestionService } from '../../../../../Core/Services/IquestionService/iquestion.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-question',
  imports: [CommonModule, FormsModule],
  templateUrl: './add-question.component.html',
  styleUrl: './add-question.component.css',
})
export class AddQuestionComponent {
  Question: Iquestion = {} as Iquestion;

  constructor(
    private _questionService: IQuestionService,
    private _router: Router
  ) {
    // Constructor logic can go here if needed
  }
  addQuestion() {
    this._questionService.addQuestion(this.Question).subscribe({
      next: (response) => {
        alert('تم اضافة السؤال بنجاح');
        this._router.navigate(['/Dashboard/QuestionsIndex']);
      },
      error: (error) => {
        alert('حدث خطا ما تواصل مع الدعم الفني');
      },
    });
  }
}
