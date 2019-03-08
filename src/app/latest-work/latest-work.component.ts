import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-latest-work',
  templateUrl: './latest-work.component.html',
  styleUrls: ['./latest-work.component.css']
})
export class LatestWorkComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  works = [
  	{
  		"title": "Gorgeous Cupcakes",
  		"screenshot": "https://via.placeholder.com/350x150",
  		"description": "A Wordpress ecommerce site dedicated to my favourite cupcake recipes.",
      "technologies": ["wordpress", "git", "bootstrap", "illustrator", "git"]
  	},
  	{
  		"title": "Scifi Film Festival",
  		"screenshot": "https://via.placeholder.com/350x150",
  		"description": "A Wordpress site built specifically for the Sci Fi Film festival in Sydney.",
      "technologies": ["wordpress", "git", "bootstrap", "illustrator", "git"]
  	},
  	{
  		"title": "Bibletopia",
  		"screenshot": "https://via.placeholder.com/350x150",
  		"description": "A personalised collection of educational resources dedicated to Christian scripture.",
      "technologies": ["wordpress", "git", "bootstrap", "illustrator", "git"]
  	},
  	{
  		"title": "Node Knowledgebase",
  		"screenshot": "https://via.placeholder.com/350x150",
  		"description": "A collection of learning resources dedicated to the wonderful world of NodeJS.",
      "technologies": ["wordpress", "git", "bootstrap", "illustrator", "git"]
  	},
  	{
  		"title": "Guy Maston",
  		"screenshot": "assets/guy-maston-screenshot.JPG",
  		"description": "An general ecommerce site. It sells baby products, electronics, books, fashion items and entertainment products.",
      "technologies": ["wordpress", "git", "bootstrap", "illustrator", "git"]
  	},
  	{
  		"title": "Youtube University",
  		"screenshot": "assets/youtube-university-screenshot.jpg",
  		"description": "A collection of educational Youtube resources dedicated to my web design journey.",
      "technologies": ["wordpress", "git", "bootstrap", "illustrator", "git"],
      "angularLink": "http://youtube-university-angular.pnhdevelopment.com", 
      "reactLink": "http://youtube-university-react.pnhdevelopment.com"
  	},
  	{
  		"title": "My Recipes",
  		"screenshot": "assets/my-recipes-screenshot.jpg",
  		"description": "A personalised collection of my favourite recipes.",
      "technologies": ["wordpress", "git", "bootstrap", "illustrator", "git"],
      "angularLink": "http://my-recipes-angular.pnhdevelopment.com", 
      "reactLink": "http://my-recipes-react.pnhdevelopment.com"
  	}
  ]

}
