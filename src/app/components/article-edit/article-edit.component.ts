
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from 'src/app/models/article';
import { ArticleService } from 'src/app/services/article.service';
import { Global } from 'src/app/services/global';

@Component({
  selector: 'app-article-edit',
  templateUrl: './article-edit.component.html',
  styleUrls: ['./article-edit.component.css'],
  providers: [ArticleService]
})

export class ArticleEditComponent implements OnInit {

  public article!: Article;
  public status!: string;


    
  afuConfig = {
    multiple: false,
    formatsAllowed: ".jpg,.png, .gif, .jpeg",
    
    uploadAPI:  {
    url: Global.url+'upload-image'
    },
    theme: "attachPin",
    hideProgressBar: true,
    hideResetBtn: true,
    hideSelectBtn: false,
    replaceTexts: {
      selectFileBtn: 'Select Files',
      resetBtn: 'Reset',
      uploadBtn: 'Upload',
      dragNDropBox: 'Drag N Drop',
      attachPinBtn: 'Cambiar imagen del articulo',
      afterUploadMsg_success: 'Successfully Uploaded !',
      afterUploadMsg_error: 'Upload Failed !'
    }
  };


  constructor(
    private _articleService: ArticleService,
    private _ruote: ActivatedRoute,
    private _router: Router,
  ) { 
    this.article = new Article("","","","",null)
  }

  ngOnInit(): void {
    this.getArticle()
  }

  onSubmit(){
    this._articleService.update(this.article._id, this.article).subscribe( 
      response => {
        if (response.status == 'success') {
          this.status = 'success';
          this.article = response.article;
          this._router.navigate(['/articulo/'+this.article._id]);
        } else{
          this.status = 'error';
        }
      },
      error => {
        console.log(error);
        this.status = 'error'
      }
    )
  }
    
  

  imageUpload(data:any){
    
    this.article.image=data.body.image
  }

  getArticle(){
    this._ruote.params.subscribe(params => {
      
      let id = params['id'];
      
      this._articleService.getArticle(id).subscribe(
       response => {
        if (response.article) {
          this.article = response.article
        }else{
          this._router.navigate(['/home']);
        }
       },
       error => {
        this._router.navigate(['/home']);
       }
      );
    });
  }

}