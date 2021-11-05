import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from 'src/app/models/article';
import { ArticleService } from 'src/app/services/article.service';



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [ArticleService,]
  
})
export class SearchComponent implements OnInit {

  public search!:string;
  public articles!: Article[];

  constructor(
    private _articleService: ArticleService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this._route.params.subscribe( 
      params => {
        this.search = params.search;
        this._articleService.search(this.search).subscribe(
          response => {
            if (response.articles) {
              this.articles = response.articles
            }else{
              this.articles = []
            }
          },
          error => {
            console.log(error)
            this.articles = []
          }
        )

      },
      error =>{
        console.log(error)
      })
  }


}