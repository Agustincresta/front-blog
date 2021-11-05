import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Global } from './global';
import { Article } from '../models/article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  
  public url = Global.url

  constructor(
    private _http:HttpClient 
  ) { }

  getArticles(last:any = null):Observable<any>{
    var articles = 'articles'
    
    if (last != null) {
      var articles = 'articles/true';
    }

    return this._http.get(this.url+articles)
  }

  getArticle(id:any):Observable<any>{
    
    return this._http.get(this.url+"article/"+id)
  }

  search(searchString: any):Observable<any>{
  
    return this._http.get(this.url+"search/"+searchString)
  }

  create(articulo:Article):Observable<any>{
    
    return this._http.post(this.url+'save', articulo);
  }

  update(id:any, article:any):Observable<any> {
    let params = JSON.stringify(article);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.put(this.url+'article/'+id, params, {headers: headers});
  }

  delete(id:any):Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.delete(this.url+'article/'+id,  {headers: headers})
  }
}





