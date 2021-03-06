import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdministrationService {
  private url = 'https://api.klymbr.com/';
  public get token() { return this.cookieService.get('token'); }

  constructor(private http: HttpClient, private cookieService: CookieService) { }

  getAllUsers(): Observable<any> {
    return this.http.get(this.url + 'users/',
      { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': `bearer ${this.token}` }) });
  }
}
