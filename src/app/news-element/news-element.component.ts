import { Component, OnInit } from '@angular/core';
import { NewsServiceService } from '../news-service.service';

@Component({
  selector: 'app-news-element',
  templateUrl: './news-element.component.html',
  styleUrls: ['./news-element.component.css']
})
export class NewsElementComponent implements OnInit {

  constructor(private news: NewsServiceService) { }

  result: any;
  newsArray: any;

  currentItem: any;
  
  ngOnInit(): void {
    if(this.news.collection_of_news){
    this.currentItem = this.news.collection_of_news.filter(item => {
      return item.url.includes(this.news.id_of_item)
        })[0]
      }
    }
    
  
}