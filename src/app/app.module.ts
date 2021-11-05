import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SliderComponent } from './components/slider/slider.component';
import { HeaderComponent } from './components/header/header.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { HttpClientModule } from '@angular/common/http';
import { ArticleComponent } from './components/article/article.component';
import { MomentModule } from 'ngx-moment';
import { BlogComponent } from './components/blog/blog.component';
import { SearchComponent } from './components/search/search.component';
import { ArticleNewComponent } from './components/article-new/article-new.component';
import { FormsModule } from '@angular/forms';
import { AngularFileUploaderModule } from "angular-file-uploader";
import { ArticleEditComponent } from './components/article-edit/article-edit.component';
import { ErrorComponent } from './components/error/error.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { APP_BASE_HREF } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidebarComponent,
    FooterComponent,
    SliderComponent,
    HeaderComponent,
    ArticlesComponent,
    ArticleComponent,
    BlogComponent,
    SearchComponent,
    ArticleNewComponent,
    ArticleEditComponent,
    ErrorComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MomentModule,
    FormsModule,
    AngularFileUploaderModule,
    NgxPaginationModule
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: '' }],
  bootstrap: [AppComponent],
})
export class AppModule { }
