import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from 'src/app/models/article';
import { ArticleService } from 'src/app/services/article.service';
import { Global } from 'src/app/services/global';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-article-new',
  templateUrl: './article-new.component.html',
  styleUrls: ['./article-new.component.css'],
  providers: [ArticleService]
})
export class ArticleNewComponent implements OnInit {

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
      attachPinBtn: 'Sube la imagen del articulo...',
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
  }

  onSubmit(){
    this._articleService.create(this.article).subscribe(
      response => {
        if (response.status == 'success') {
          this.status = 'success';
          this.article = response.article;
          Swal.fire(
            'Completado',
            'Tu articulo se ha creado correctamente',
            'success'
          )


          this._router.navigate(['/blog']);
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
    console.log(data)
    this.article.image=data.body.image
  }

}
