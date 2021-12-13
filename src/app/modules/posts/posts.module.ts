import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { PostsComponent } from './posts.component';
import { ViewPostComponent } from './smart-component/view-post/view-post.component';
import { HttpClientModule } from '@angular/common/http'


@NgModule({
  declarations: [
    PostsComponent,
    ViewPostComponent
  ],
  imports: [
    CommonModule,
    PostsRoutingModule,
    HttpClientModule
  ],
  providers: [HttpClientModule]
})
export class PostsModule { }
