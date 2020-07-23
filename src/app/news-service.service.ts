import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class NewsServiceService {

  constructor(private http: HttpClient) { }

  id_of_item: string = ''
  collection_of_news: any
  

  getIdOfItem(current){
    this.id_of_item = current
  }

  setCollection(current){
    this.collection_of_news = current
    console.log(this.collection_of_news)
  }
  
  search(pageNumber){
    const bbc_all_news = 'http://newsapi.org/v2/top-headlines?country=us&'+
    'pageSize=10&'+
    `page=${pageNumber}&`+
    'apiKey=c4c7c9f272604db29d1236593f1ae5b3';
    //console.log(this.collection_of_news, 'sdsdsdfsdfsdfsdfsdf')
    return this.http.get(bbc_all_news)
  }

  
}
