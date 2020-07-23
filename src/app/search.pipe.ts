import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
    name: 'search'
})
export class SearchPipe implements PipeTransform{

    transform(news, value){
        if(news){
            return news.filter(item => {
                return item.title.includes(value)
            })
        }
       
    }

}