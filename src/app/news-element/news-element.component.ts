import { Component, OnInit } from '@angular/core';
import { NewsServiceService } from '../news-service.service';

@Component({
  selector: 'app-news-element',
  templateUrl: './news-element.component.html',
  styleUrls: ['./news-element.component.css']
})
export class NewsElementComponent implements OnInit {

  constructor(private news: NewsServiceService) { }

  ngOnInit(): void {
    
  }

  title: string = 'title'
}
