import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ILoginDto } from '../../../../BL/Models/ilogin';
import { ILoginService } from '../../../../Core/Services/ILogin/ilogin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginObj: ILoginDto = {} as ILoginDto;

  constructor(private _iloginService: ILoginService, private _router: Router) {}
  Login() {
    this._iloginService.Login(this.loginObj).subscribe({
      next: (res) => {
        sessionStorage.setItem('IsAuthenticated', JSON.stringify(res));
        if (res.isToken == true)
          this._router.navigate(['/Dashboard/CompanyIndex']);
        else alert(res.token);
      },
      error: () => {
        alert('حدث خطا ما تواصل مع الدعم الفني');
      },
    });
  }
}
