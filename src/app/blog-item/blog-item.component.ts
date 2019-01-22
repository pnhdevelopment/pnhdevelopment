import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-blog-item',
  templateUrl: './blog-item.component.html',
  styleUrls: ['./blog-item.component.css']
})
export class BlogItemComponent implements OnInit {

  public post: any;
  public url: string;

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {

  	this.url = 'https://www.pnhdevelopment-api.pnhdevelopment.com/wp-json/wp/v2/posts?_embed&slug=' + this.route.snapshot.paramMap.get('slug');

  	this.http.get(this.url).subscribe(res => {
    	this.post = res[0];
  	});

  }

  loadImg(ev){
    ev.style.opacity = 1;
  }

}
