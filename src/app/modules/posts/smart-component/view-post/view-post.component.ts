import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PostVM } from '../../_models/postView.model';
import { PostsService } from '../../_services/posts.service';

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.css']
})
export class ViewPostComponent implements OnInit {

  posts!: PostVM[];

  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
    this.postsService.getPosts().subscribe(res => {
      this.posts = res.map(d => {
        const data = new PostVM();
        data.init(d);
        return data;
      });
      console.log("Model of data", this.posts);
      
    })
  }

}
