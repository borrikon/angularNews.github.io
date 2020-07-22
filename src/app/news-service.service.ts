import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class NewsServiceService {

  constructor(private http: HttpClient) { }

  response: any;
  all_news: any;

  bbc_all_news = "https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=c4c7c9f272604db29d1236593f1ae5b3";
 

  
  search(){
    return this.http.get(this.bbc_all_news)
  }

  
}
