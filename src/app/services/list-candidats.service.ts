import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Candidat } from '../Models/candidat';

@Injectable({
  providedIn: 'root',
})
export class ListCandidatsService {
  private tabCandidats: Candidat[] = [
    // new Candidat(1, 'nidhal', 'jelassi', 36, 'Enseignant', 'nidhal.jpg'),
    // new Candidat(2, 'bart', 'simpson', 15, 'Ingénieur', 'bart.jpeg'),
    // new Candidat(3, 'homer', 'simpson', 76, 'Secrétaire', 'homer.jpg'),
  ];

  link = 'http://localhost:3000/cv/persons';
  getAllCandidats() {
    return this.tabCandidats;
  }

  getAllCandidatAPI() {
    return this.http.get(this.link);
  }

  constructor(private http: HttpClient) {}

  addCandidat(newC) {
    newC._id = this.tabCandidats[this.tabCandidats.length - 1]._id + 1;
    this.tabCandidats.push(newC);
  }

  addCandidatAPI(newC) {
    // let token = localStorage.getItem('myToken');
    // if (token) {
    //   let headers = new HttpHeaders().set('Authorization', `bearer ${token}`);
    //   return this.http.post(this.link, newC, { headers });
    // }
    return this.http.post(this.link, newC);
  }

  updateCandidat(uCand) {
    let i = this.tabCandidats.indexOf(uCand);
    this.tabCandidats[i] = uCand;
  }

  updateCandidatAPI(uCand) {
    return this.http.put(`${this.link}/${uCand._id}`, uCand);
  }

  getCandidatById(id) {
    return this.tabCandidats.find((c) => c._id == id);
  }

  getCandidatByIdAPI(id) {
    return this.http.get(`${this.link}/${id}`);
  }

  deleteCandidat(cand) {
    let i = this.tabCandidats.indexOf(cand);
    this.tabCandidats.splice(i, 1);
  }
  deleteCandidatAPI(id) {
    return this.http.delete(`${this.link}/${id}`);
  }
}
