import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IUserMessage } from '../../../../../BL/Models/iuser-message';
import { IUsersMessagesServiceService } from '../../../../../Core/Services/IUserMessagesService/iusers-messages-service.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-message-edit',
  imports: [CommonModule, FormsModule],
  templateUrl: './user-message-edit.component.html',
  styleUrl: './user-message-edit.component.css',
})
export class UserMessageEditComponent implements OnInit {
  userMessageId: number = 0;
  UserMessage: IUserMessage = {} as IUserMessage;
  constructor(
    private _activateRoute: ActivatedRoute,
    private _iuserService: IUsersMessagesServiceService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this._activateRoute.params.subscribe((paramMap) => {
      this.userMessageId = paramMap['id'];
      this.GetById(this.userMessageId);
    });
  }
  GetById(id: number) {
    this._iuserService.GetById(id).subscribe({
      next: (res) => {
        this.UserMessage = res;
      },
      error: (err) => {
        alert('حدث خطا ما تواصل مع الدعم الفني');
      },
    });
  }

  EditUserMessage() {
    this._iuserService.Update(this.UserMessage, this.userMessageId).subscribe({
      next: (res) => {
        alert('تم تعديل الرسالة بنجاح');
        this._router.navigate(['/Dashboard/UsersMessagesIndex']);
      },
      error: (err) => {
        alert('حدث خطا ما تواصل مع الدعم الفني');
      },
    });
  }
}
