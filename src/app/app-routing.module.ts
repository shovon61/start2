import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: 'app', component: AppComponent }, 

  // Posts Module routing
  {
    path: 'posts', 
    loadChildren: ()=>
      import('./modules/posts/posts.module').then((m)=> m.PostsModule),
  },

  { path: '*', redirectTo: 'app', pathMatch: 'full' },
  { path: '**', redirectTo: 'app', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
