import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler, HttpHeaders, HttpParams } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  constructor(private http: HttpClient) {

  }

  get(propertyId: number) {
    const url = `http://localhost:8080/TechnikonWebApp/resources/propertyResource/property/${propertyId}`;
    const username = localStorage.getItem('username');
    const password = localStorage.getItem('password');

    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('crossDomain', 'true')
      .set('Authorization', 'Basic ' + btoa(username + ':' + password));
    return this.http.get(url, { headers: headers })
      .pipe(
        retry(1),
        catchError(error => throwError(() => 'Something is wrong...'))
      );
  }

  getByVat(ownerVat: number) {
    const url = `http://localhost:8080/TechnikonWebApp/resources/propertyResource/properties/ownerVat/${ownerVat}`;
    const username = localStorage.getItem('username');
    const password = localStorage.getItem('password');
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('crossDomain', 'true')
      .set('Authorization', 'Basic ' + btoa(username + ':' + password));
    return this.http.get(url, { headers: headers })
      .pipe(
        retry(1),
        catchError(error => throwError(() => 'Something is wrong...'))
      );
  }

  getByE9(e9: number) {
    const url = `http://localhost:8080/TechnikonWebApp/resources/propertyResource/property/e9/${e9}`;
    const username = localStorage.getItem('username');
    const password = localStorage.getItem('password');
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('crossDomain', 'true')
      .set('Authorization', 'Basic ' + btoa(username + ':' + password));
    return this.http.get(url, { headers: headers })
      .pipe(
        retry(1),
        catchError(error => throwError(() => 'Something is wrong...'))
      );
  }

  getAll() {
    const url = `http://localhost:8080/TechnikonWebApp/resources/propertyResource/properties`;
    const username = localStorage.getItem('username');
    const password = localStorage.getItem('password');
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('crossDomain', 'true')
      .set('Authorization', 'Basic ' + btoa(username + ':' + password));
    return this.http.get(url, { headers: headers })
      .pipe(
        retry(1),
        catchError(error => throwError(() => 'Something is wrong...'))
      );
  }

  post(data: any) {
    const url = 'http://localhost:8080/TechnikonWebApp/resources/propertyResource/property';
    const username = localStorage.getItem('username');
    const password = localStorage.getItem('password');
 const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('crossDomain', 'true')
      .set('Authorization', 'Basic ' + btoa(username + ':' + password));
    return this.http.post(url, JSON.stringify(data), { headers: headers })
      .pipe(
        retry(1),
        catchError(error => throwError(() => 'Something is wrong...'))
      );

  }

  put(propertyId: number, data: any) {
    const url = `http://localhost:8080/TechnikonWebApp/resources/propertyResource/property/${propertyId}`;
    const username = localStorage.getItem('username');
    const password = localStorage.getItem('password');
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('crossDomain', 'true')
      .set('Authorization', 'Basic ' + btoa(username + ':' + password));

    return this.http.put(url, data, { headers: headers })
      .pipe(
        retry(1),
        catchError(error => throwError(() => 'Something is wrong...'))
      );
  }

  delete(id: number) {
    const url = `http://localhost:8080/TechnikonWebApp/resources/propertyResource/property/${id}`;
    const username = localStorage.getItem('username');
    const password = localStorage.getItem('password');
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('crossDomain', 'true')
      .set('Authorization', 'Basic ' + btoa(username + ':' + password));

    return this.http.delete(url, { headers: headers })
      .pipe(
        retry(1),
        catchError(error => throwError(() => 'Something is wrong...'))
      );
  }

}