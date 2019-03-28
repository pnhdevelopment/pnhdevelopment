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

  loadImg(ev){
    ev.style.opacity = 1;
  }

  works = [
  	{
  		"title": "Gorgeous Cupcakes",
  		"screenshot": "assets/screenshots/gorgeous-cupcakes-snapshot.PNG",
  		"description": "A Wordpress ecommerce site dedicated to my favourite cupcake recipes.",
      "technologies": ["wordpress", "git", "bootstrap", "illustrator", "git"],
      "regularLink": "http://www.gorgeous-cupcakes.pnhdevelopment.com/"
  	},
  	{
  		"title": "Bibletopia",
  		"screenshot": "assets/screenshots/bibletopia-screenshot.png",
  		"description": "A personalised collection of educational resources dedicated to Christian scripture.",
      "technologies": ["wordpress", "git", "bootstrap", "illustrator", "git"],
      "regularLink": "http://www.bibletopia.pnhdevelopment.com"
  	},
  	{
  		"title": "Node Knowledgebase",
  		"screenshot": "assets/screenshots/node-knowledgebase.PNG",
  		"description": "A collection of learning resources dedicated to the wonderful world of NodeJS.",
      "technologies": ["wordpress", "git", "bootstrap", "illustrator", "git"],
      "angularLink": "https://www.node-knowledgebase-angular.pnhdevelopment.com", 
      "reactLink": "https://www.node-knowledgebase-react.pnhdevelopment.com"
  	},
  	{
  		"title": "Guy Maston",
  		"screenshot": "assets/screenshots/guy-maston-screenshot.PNG",
  		"description": "An general ecommerce site. It sells baby products, electronics, books, fashion items and entertainment products.",
      "technologies": ["wordpress", "git", "bootstrap", "illustrator", "git"],
      "angularLink": "https://www.guy-maston-angular.pnhdevelopment.com",
  	},
  	{
  		"title": "Youtube University",
  		"screenshot": "assets/screenshots/youtube-university-screenshot.PNG",
  		"description": "A collection of educational Youtube resources dedicated to my web design journey.",
      "technologies": ["wordpress", "git", "bootstrap", "illustrator", "git"],
      "angularLink": "https://www.youtube-university-angular.pnhdevelopment.com", 
      "reactLink": "https://www.youtube-university-react.pnhdevelopment.com"
  	},
  	{
  		"title": "My Recipes",
  		"screenshot": "assets/screenshots/my-recipes-screenshot.PNG",
  		"description": "A personalised collection of my favourite recipes.",
      "technologies": ["wordpress", "git", "bootstrap", "illustrator", "git"],
      "angularLink": "https://www.my-recipes-angular.pnhdevelopment.com", 
      "reactLink": "https://www.my-recipes-react.pnhdevelopment.com"
  	}
  ]

}
