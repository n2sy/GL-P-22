import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  link = 'http://localhost:3000/auth/login';
  constructor(private http: HttpClient) {}

  seConnecter(identifiants) {
    return this.http.post(this.link, identifiants);
  }

  seDeconnecter() {
    localStorage.removeItem('myToken');
  }

  estConnecte() {
    let token = localStorage.getItem('myToken');
    if (token) return true;
    else return false;
  }
}
