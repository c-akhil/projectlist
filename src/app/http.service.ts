import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  baseUrl = environment.baseUrl;
  constructor(private httpClient: HttpClient) { }

  get(url) {
    return this.httpClient.get(this.baseUrl + url)
  }
  post(url, body) {
    return this.httpClient.post(this.baseUrl + url, body);
  }
}
