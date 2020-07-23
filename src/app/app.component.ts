import { Component } from '@angular/core';
import { NewsServiceService } from './news-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private news: NewsServiceService){ }

  searchStr: string = ''
  result: any;
  newsArray: any;

  ngOnInit() {
    this.news.search()
      .subscribe((res)=>{
        this.result = res
        this.newsArray = this.result.articles
        console.log('component app', this.newsArray)
    })
  }
}
