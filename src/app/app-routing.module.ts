import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { FollowersComponent } from './followers/followers.component';
import { PostComponent } from './post/post.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TodosComponent } from './todos/todos.component';
import { ZippyComponent } from './zippy/zippy.component';

const routes: Routes = [];

@NgModule({
  imports: [   RouterModule.forRoot([
    {path: '', component : HomeComponent},
    {path: 'followers/:id', component: GithubProfileComponent},
    {path: 'followers', component: FollowersComponent},
    {path: 'posts', component: PostComponent} ,
    {path: 'animations', component: TodosComponent},
    {path: '**', component: NotFoundComponent}  
   ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
