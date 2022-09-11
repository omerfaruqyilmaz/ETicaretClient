import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpClientService {
  constructor(private httpClient: HttpClient, @Inject("baseUrl") private baseUrl: string) { }
  
  // basedUrl = "https://localhost:7002/api/products" REDDEDİLDİ!:d

  // private url(requestParameter: Partial<RequestParameters>): string {
  //   let responseUrl = `${requestParameter.baseUrl ? requestParameter.baseUrl : this.baseUrl}/
  //   ${requestParameter.controller}${requestParameter.action ? `/${requestParameter.action}` : ""}`;
  //   console.log("Base : " + responseUrl)
  //   return responseUrl;
  // }

  private url(RequestParameters: RequestParameters): string {
    return `${
      RequestParameters.baseUrl ? RequestParameters.baseUrl : this.baseUrl
    }/${RequestParameters.controller}${
      RequestParameters.action ? `/${RequestParameters.action}` : ''
    }`;
  }

  get<T>(requestParameter: Partial<RequestParameters>, id?: string): Observable<T> {
    let url: string = "";
    if (requestParameter.fullEndPoint){
      url = requestParameter.fullEndPoint;
    }
    else
      url = `${this.url(requestParameter)}${id ? `/${id}` :""}${requestParameter.queryString ? `?${requestParameter.queryString}` : ""}`;
    return this.httpClient.get<T>(url, { headers: requestParameter.headers });
  }
  
  post<T>(requestParameter: Partial<RequestParameters>, body: Partial<T>): Observable<T> {
    let url: string = "";
    if (requestParameter.fullEndPoint)
      url = requestParameter.fullEndPoint;
    else
      url = `${this.url(requestParameter)}${requestParameter.queryString ? `?${requestParameter.queryString}` : ""}`

    return this.httpClient.post<T>(url, body, { headers: requestParameter.headers });
  }

  put<T>(requestParameter: Partial<RequestParameters>, body: Partial<T>): Observable<T> {
    let url: string = "";
    if (requestParameter.fullEndPoint)
      url = requestParameter.fullEndPoint;
    else
      url = `${this.url(requestParameter)}${requestParameter.queryString ? `?${requestParameter.queryString}` : ""}`;

    return this.httpClient.put<T>(url, body, { headers: requestParameter.headers });
  }

  delete<T>(requestParameter: Partial<RequestParameters>, id: string): Observable<T> {
    let url: string = "";
    if (requestParameter.fullEndPoint)
      url = requestParameter.fullEndPoint;
    else
      url = `${this.url(requestParameter)}/${id}${requestParameter.queryString ? `?${requestParameter.queryString}` : ""}`;

    return this.httpClient.delete<T>(url, { headers: requestParameter.headers });
  }
}


export class RequestParameters {
  controller?: string;
  action?: string;
  queryString?: string;

  headers?: HttpHeaders;
  baseUrl?: string;
  fullEndPoint?: string;
}