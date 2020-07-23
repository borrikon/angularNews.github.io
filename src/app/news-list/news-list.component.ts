import { Component, OnInit } from '@angular/core';
import { NewsServiceService } from '../news-service.service';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {

  constructor(private news: NewsServiceService) { }

  searchStr: string = ''
  result: any;
  newsArray: any;
  toRender() {return this.news.collection_of_news}

  ngOnInit(): void {
    this.news.search(1)
    .subscribe((res)=>{
      this.result = res
      this.newsArray = this.result.articles
      this.news.collection_of_news = this.newsArray
    })
  }

}
