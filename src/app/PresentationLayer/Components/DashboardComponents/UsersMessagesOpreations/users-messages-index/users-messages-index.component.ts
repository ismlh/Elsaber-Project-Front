import { Component, OnInit } from '@angular/core';
import { IUserMessage } from '../../../../../BL/Models/iuser-message';
import { IUsersMessagesServiceService } from '../../../../../Core/Services/IUserMessagesService/iusers-messages-service.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-users-messages-index',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './users-messages-index.component.html',
  styleUrl: './users-messages-index.component.css',
})
export class UsersMessagesIndexComponent implements OnInit {
  UserMessages: IUserMessage[] = [] as IUserMessage[];
  constructor(private _iuserMessages: IUsersMessagesServiceService) {}

  ngOnInit(): void {
    this.GetAll();
  }
  GetAll() {
    this._iuserMessages.GetAll().subscribe({
      next: (res) => {
        this.UserMessages = res;
      },
      error: () => {
        alert('حدث خطا ما تواصل مع الدعم الفني');
      },
    });
  }

  DeleteMessage(id: number) {
    this._iuserMessages.Delete(id).subscribe({
      next: (res) => {
        alert(res.fName + ' تم حذفه');
        this.GetAll();
      },
      error: (err) => {
        console.log(err);
        alert('حدث خطا ما تواصل مع الدعم الفني');
      },
    });
  }
}
