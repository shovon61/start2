import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewPostComponent } from './smart-component/view-post/view-post.component';

const routes: Routes = [
  { path: 'view', component: ViewPostComponent },
  { path: '*', redirectTo: 'view', pathMatch: 'full' },
  { path: '**', redirectTo: 'view', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
