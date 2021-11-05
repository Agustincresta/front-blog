import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Article } from 'src/app/models/article';
import { ArticleService } from 'src/app/services/article.service';
import { Global } from 'src/app/services/global';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  providers:[ ArticleService ]
})
export class ArticleComponent implements OnInit {

  public article!: Article;
  public url = Global.url;
  
  constructor(
    private _articleService: ArticleService,
    private _route: ActivatedRoute,
    private _router:Router,
    
  ) { }

  ngOnInit(): void {
    this._route.params.subscribe(
      response =>{
        let id = response.id
        
        this._articleService.getArticle(id).subscribe(
          response => {
            if (response.article) {
              this.article = response.article
            } 
          },
          error => {
            console.log(error)
          }
        );
      },
      error => {
        console.log(error)
      }
    )
  }

  delete(id:any){
    Swal.fire({
      title: '¿Estas seguro?',
      text: "Una vez borrado, no se podra recuperar el articulo",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Borrar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this._articleService.delete(id).subscribe(
          response => {
            this._router.navigate(['blog']);
          },
          error =>{
            this._router.navigate(['blog'])
          }
        )

        Swal.fire(
          'Borrado',
          'Tu articulo se ha borrado correctamente',
          'success'
        )
      }
    })
    
  }

}
