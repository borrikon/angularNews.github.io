import { Component } from '@angular/core';
import { NewsServiceService } from './news-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private news: NewsServiceService){ 
    
  }
  
  result: any;
  newsArray: any
  pageNumber: number = 1
  

  ngOnInit() {
   
  }
  

  changePage(next){
    if(next === 'next'){
      this.pageNumber ++
    }else{
        this.pageNumber === 1 ? null : this.pageNumber --
    }
    this.news.search(this.pageNumber)
      .subscribe((res)=>{
      this.result = res
      this.newsArray = this.result.articles
      this.news.collection_of_news = this.newsArray
      this.news.setCollection(this.newsArray)
    })
  }

  get location(){
    return window.location.href.indexOf('/news') > -1
  }
}
