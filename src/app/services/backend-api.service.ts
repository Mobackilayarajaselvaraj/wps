import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpRequest, HttpEvent, HttpHeaders } from '@angular/common/http';

@Injectable()
export class BackendApiService {
  private baseUrl = 'http://13.235.99.192:8081';

  constructor(private http: HttpClient ) {}

  public getCognitiveTestUsers() {
    const headers = new HttpHeaders(
      { 'application-key': '0847eb02-7fd8-4e69-bda0-db7e3a454b1b' },
    );
    const options = {
      headers,
    };
    const url = this.baseUrl + '/getCognitiveTestUsers';
    const req = new HttpRequest('GET', url, '', options);
    return this.http.request(req);
  }


  public getCognitiveTestResult(data) {
    const headers = new HttpHeaders(
      { 'application-key': '0847eb02-7fd8-4e69-bda0-db7e3a454b1b'}, 
    );
    const options = {
      headers,
      responseType: 'text' as 'json'
    };
    const url = this.baseUrl + '/getCognitiveTestResult';
    const req = new HttpRequest('POST', url, data, options);
    return this.http.request(req);
  }
}
