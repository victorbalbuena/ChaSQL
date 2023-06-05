import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Structure} from "../../_core/_models/structure";

@Injectable({
  providedIn: 'root'
})
export class OpenaiService {

  constructor(
    private http: HttpClient
  ) { }

  // I have a Node with Express backend consuming the Openai API
  getSQLResponse(petition: Structure):Observable<Structure> {
    return this.http.post<Structure>(
      'https://chatsqlbackend.onrender.com/completions',
      petition,
      {
        headers: this.getHeaders()
      }
    )
  }

  private getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8'
    })
  }

}
