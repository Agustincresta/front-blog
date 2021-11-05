import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleEditComponent } from './components/article-edit/article-edit.component';
import { ArticleNewComponent } from './components/article-new/article-new.component';
import { ArticleComponent } from './components/article/article.component';
import { BlogComponent } from './components/blog/blog.component';
import { ErrorComponent } from './components/error/error.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'home', component:HomeComponent},
  {path: 'blog', component:BlogComponent},
  {path: 'articulo/:id', component:ArticleComponent},
  {path: 'crear', component:ArticleNewComponent},
  {path: 'editar/:id', component:ArticleEditComponent},
  {path: 'buscar/:search', component:SearchComponent},
  {path: '**', component:ErrorComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
