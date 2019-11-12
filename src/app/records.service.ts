import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import Response from './Response';

@Injectable({
  providedIn: 'root'
})
export class RecordsService {
  baseUri = 'http://localhost:8081/';

  uri = this.baseUri + 'records';

  constructor(private http: HttpClient) { }

  login(loginPayload) : Observable<Response> {
    return this.http.post<Response>(this.baseUri + 'token/generate-token', loginPayload);
  }

  addRecord(engWord, rusWord, glossary) {
    const obj = {
      engWord,
      rusWord,
      glossary
    };
    this.http.post(this.uri, obj)
        .subscribe(res => console.log(res, 'Done'));
  }

  getRecords() {
    let headers = {
      "headers" : {
        'Cache-Control':  'no-cache, no-store, must-revalidate, post-check=0, pre-check=0'
      }
    };
    return this.http.get(this.uri, headers);
  }

  editRecord(id) {
    return this.http.get(`${this.uri}/${id}`);
  }

  updateRecord(engWord, rusWord, glossary, id) {
    const obj = {
      engWord,
      rusWord,
      glossary
    };
    this.http.put(`${this.uri}/${id}`, obj)
      .subscribe(res => console.log('Done'));
  }

  deleteRecord(url) {
    return this.http.delete(url);
  }

}
