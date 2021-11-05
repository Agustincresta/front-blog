import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ArticleService]
})
export class HomeComponent implements OnInit {
  
  public articles!: Article[];


  constructor(
    private _articleService: ArticleService
  ) { }

  ngOnInit(): void {
    this._articleService.getArticles("").subscribe(
      response => {
        this.articles = response.articles

      },
      error =>{
        console.log(error)
      }
    )
  }

}
