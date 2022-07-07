import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  listSections = ['', 'GL', 'DMWM', 'DSEN'];
  defaultSection = 'DSEN';

  myCommentaire = 'Rien à signaler...';

  showError = false;

  constructor(
    private http: HttpClient,
    private loginSer: LoginService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // this.http.get('https://jsonplacjnjjjeholder.typicode.com/users').subscribe({
    //   next: (response: any[]) => {
    //     console.log(response);
    //     response.map((c) => {
    //       console.log(c['name']);
    //     });
    //   },
    //   error: (err) => {
    //     console.log(err);
    //   },
    //   complete: () => {
    //     console.log('Flux terminé !');
    //   },
    // });
  }

  submitForm(f) {
    console.log(f.value);
    this.loginSer.seConnecter(f.value).subscribe({
      next: (response) => {
        console.log(response);
        localStorage.setItem('myToken', response['token']);
        this.router.navigateByUrl('/cv');
      },
      error: (err) => {
        console.log(err);
        this.showError = true;
        f.reset();
      },
    });
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
