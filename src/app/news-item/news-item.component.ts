import { Component, OnInit, Input } from '@angular/core';
import { NewsServiceService } from '../news-service.service';

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.css']
})
export class NewsItemComponent implements OnInit {
  

  @Input() item
  
  
  constructor(private news: NewsServiceService) { }

  ngOnInit(): void {
  }

  getItemUrl(url){
    this.news.getIdOfItem(url)
  }
}
