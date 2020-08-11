import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable({
   providedIn: 'root'
})
export class UserService {
   api = environment.HOST.link;
    constructor(
        private http: HttpClient
    ) { }

    options() {
      const headers = new HttpHeaders({
        'Content-Type': 'application/json'
      });
      const header = { headers };
      return header;
    }
   signUp(payload) {
      return this.http.post(this.api + '/onboard/signUp', payload, this.options());
   }
   signIn(payload) {
      return this.http.post(this.api + '/onboard/signIn', payload, this.options());
   }
   getVideos(payload) {
      return this.http.post(this.api + '/listVideos', payload, this.options());
   }
}
