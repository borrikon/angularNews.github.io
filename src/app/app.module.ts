import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { NewsItemComponent } from './news-item/news-item.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NewsElementComponent } from './news-element/news-element.component';
import { NewsListComponent } from './news-list/news-list.component';

import { NewsServiceService } from './news-service.service';


import { SearchPipe } from './search.pipe';

import { JwPaginationModule } from 'jw-angular-pagination';

import { MaterialModule } from './material.module';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule  } from '@angular/material/card';
import { MATERIAL_SANITY_CHECKS } from '@angular/material/core';


const appRoutes: Routes = [
  {path: "", component: NewsListComponent},
  {path: "news", component: NewsElementComponent},
  {path: "**", component: NotFoundComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NewsItemComponent,
    NotFoundComponent,
    NewsElementComponent,
    SearchPipe,
    NewsListComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    MaterialModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    JwPaginationModule
  ],
  providers: [
    {
      provide: MATERIAL_SANITY_CHECKS,
      useValue: false
    },
    NewsServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
