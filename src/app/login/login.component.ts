import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  listSections = ['', 'GL', 'DMWM', 'DSEN'];
  defaultSection = 'DSEN';

  myCommentaire = 'Rien à signaler...';
  constructor() {}

  ngOnInit(): void {}

  submitForm(f) {
    console.log(f.value);
  }

  randowPwd(f: NgForm) {
    f.setValue({
      exemple: '',
      login: '',
      password: 'randompassword2022',
      section: '',
      myComment: '',
    });
  }

  randowPwdv2(f: NgForm) {
    f.form.patchValue({
      password: 'randompassword2022',
    });
  }
}
