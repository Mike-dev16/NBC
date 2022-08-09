import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  //appleNewsUrl ='https://newsapi.org/v2/everything?q=apple&from=2022-02-15&to=2022-02-15&sortBy=popularity&apiKey=3d363ac2370e47038b67df44e6d9a415';
  //teslaNewsUrl = 'https://newsapi.org/v2/everything?q=tesla&from=2022-01-20&sortBy=publishedAt&apiKey=3d363ac2370e47038b67df44e6d9a415';
  //businessNewsUrl = 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=3d363ac2370e47038b67df44e6d9a415';
  //techNewsUrl = 'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=3d363ac2370e47038b67df44e6d9a415';
  //wallStreetUrl = 'https://newsapi.org/v2/everything?domains=wsj.com&apiKey=3d363ac2370e47038b67df44e6d9a415';



  constructor(private httpClient: HttpClient) { }

  
  public headlineNews(): Observable<any> {
    return this.httpClient.get("/headline");
  }
  
  public breakingNews(): Observable<any> {
    return this.httpClient.get("/breaking")
  }

  public asideNews(): Observable<any> {
    return this.httpClient.get("/aside");
  }

  public latestNews(): Observable<any> {
    return this.httpClient.get("/latest");
  }

  public thinkNews(): Observable<any> {
    return this.httpClient.get("/think");
  }

  public healthNews(): Observable<any> {
    return this.httpClient.get("/health");
  }

  public scrollNews(): Observable<any> {
    return this.httpClient.get("/scroll");
  }

}