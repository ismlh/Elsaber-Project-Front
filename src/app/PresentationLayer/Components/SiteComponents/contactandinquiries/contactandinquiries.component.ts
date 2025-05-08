import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IUserMessage } from '../../../../BL/Models/iuser-message';
import { IUsersMessagesServiceService } from '../../../../Core/Services/IUserMessagesService/iusers-messages-service.service';

@Component({
  selector: 'app-contactandinquiries',
  imports: [CommonModule, FormsModule],
  templateUrl: './contactandinquiries.component.html',
  styleUrl: './contactandinquiries.component.css',
})
export class ContactandinquiriesComponent {
  UserMessage: IUserMessage = {} as IUserMessage;
  constructor(private _userService: IUsersMessagesServiceService) {}

  SendMessage() {
    this._userService.Add(this.UserMessage).subscribe({
      next: (response) => {
        alert(' تم إرسال الرسالة بنجاح سيتم التواصل معاك في اقرب وقت!');
      },
      error: (error) => {
        alert('حدث خطا ما تواصل مع الدعم الفني');
      },
    });
  }
}
