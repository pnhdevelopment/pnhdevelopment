import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
	
  public posts: any;
  public url: string;
  p: number = 1;


  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {

  	this.url = 'https://www.pnhdevelopment-api.pnhdevelopment.com/wp-json/wp/v2/posts?_embed';

  	this.http.get(this.url).subscribe(res => {
    	this.posts = res;
  	});

  }

}
