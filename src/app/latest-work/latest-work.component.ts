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
      "title": "SciFi Film Festival",
      "screenshot": "assets/screenshots/scifi-film-festival-screenshot.PNG",
      "description": "SciFi Film Festival is an annual event in Sydney, Australia,dedicated to celebrating and promoting fantastical science fiction, fantasy and horror genre stories, from Australia all around the world.",
      "technologies": ["wordpress", "git", "bootstrap", "illustrator", "jquery"],
      "regularLink": "http://scififilmfestival.com/"
    },
  	{
  		"title": "Gorgeous Cupcakes",
  		"screenshot": "assets/screenshots/gorgeous-cupcakes-snapshot.jpg",
  		"description": "A Wordpress ecommerce site dedicated to my favourite cupcake recipes.",
      "technologies": ["wordpress", "git", "bootstrap", "illustrator", "jquery"],
      "regularLink": "http://www.gorgeous-cupcakes.pnhdevelopment.com/"
  	},
  	{
  		"title": "Bibletopia",
  		"screenshot": "assets/screenshots/bibletopia-screenshot.jpg",
  		"description": "A personalised collection of educational resources dedicated to Christian scripture.",
      "technologies": ["wordpress", "git", "bootstrap", "illustrator", "jquery"],
      "regularLink": "http://www.bibletopia.pnhdevelopment.com"
  	},
  	{
  		"title": "Node Knowledgebase",
  		"screenshot": "assets/screenshots/node-knowledgebase.jpg",
  		"description": "A collection of learning resources dedicated to the wonderful world of NodeJS.",
      "technologies": ["wordpress", "git", "bootstrap", "illustrator", "angular", "reactjs"],
      "angularLink": "https://www.node-knowledgebase-angular.pnhdevelopment.com", 
      "reactLink": "https://www.node-knowledgebase-react.pnhdevelopment.com"
  	},
  	{
  		"title": "Guy Maston",
  		"screenshot": "assets/screenshots/guy-maston-screenshot.jpg",
  		"description": "An general ecommerce site. It sells baby products, electronics, books, fashion items and entertainment products.",
      "technologies": ["wordpress", "git", "bootstrap", "illustrator", "angular"],
      "angularLink": "https://www.guy-maston-angular.pnhdevelopment.com",
  	},
  	{
  		"title": "Youtube University",
  		"screenshot": "assets/screenshots/youtube-university-screenshot.jpg",
  		"description": "A collection of educational Youtube resources dedicated to my web design journey.",
      "technologies": ["wordpress", "git", "bootstrap", "illustrator", "angular", "reactjs"],
      "angularLink": "https://www.youtube-university-angular.pnhdevelopment.com", 
      "reactLink": "https://www.youtube-university-react.pnhdevelopment.com"
  	},
  	{
  		"title": "My Recipes",
  		"screenshot": "assets/screenshots/my-recipes-screenshot.jpg",
  		"description": "A personalised collection of my favourite recipes.",
      "technologies": ["wordpress", "git", "bootstrap", "illustrator", "angular", "reactjs"],
      "angularLink": "https://www.my-recipes-angular.pnhdevelopment.com", 
      "reactLink": "https://www.my-recipes-react.pnhdevelopment.com"
  	}
  ]

}
