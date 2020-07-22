import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NewsItemComponent } from './news-item/news-item.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NewsElementComponent } from './news-element/news-element.component';
import { MaterialModule } from './material.module';

const appRoutes: Routes = [
  {path: "", component: AppComponent},
  {path: "news", component: NewsItemComponent},
  {path: "**", component: NotFoundComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NewsItemComponent,
    NotFoundComponent,
    NewsElementComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
