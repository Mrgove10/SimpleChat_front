import { Injectable } from '@angular/core';
import { IUser } from '../interfaces/IUser'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { from } from 'rxjs';

const optionRequete = {
  headers: new HttpHeaders({ 
    'Access-Control-Allow-Origin':'*',
    'Content-Type': 'text/html;charset=utf-8'
  })
};

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  private serverUrl1 = 'http://127.0.0.1:2345';
  private serverUrl2 = 'http://127.0.0.1:3456';
  private serverUrl3 = 'htpp://127.0.0.1:4567';

  constructor(private http: HttpClient) {

  }

  getUsers(): Array<Observable<IUser[]>> {
    let data = []
    data.push(this.http.get<IUser[]>(`${this.serverUrl1}/users`))
    data.push(this.http.get<IUser[]>(`${this.serverUrl2}/users`))
    data.push(this.http.get<IUser[]>(`${this.serverUrl3}/users`))

    return data
  }
}
