import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Sites } from 'src/app/Sites';


@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  url = 'http://localhost:3000/Sites';
  constructor(private http: HttpClient) {
  }

  getSiteList() {
    return this.http.get<Sites[]>(this.url);
  }

  createSite(payload) {
    return this.http.post<Sites[]>(this.url, payload);
  }

}
