import { Component, Input, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article';
import { Global } from 'src/app/services/global';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  @Input() articles!: Article[];
  public url!: string;
  p:number = 1
  constructor() {

    this.url = Global.url
  }


  ngOnInit(): void {

  }

}

