import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  openNav() {
	  document.getElementById("mySidenav").style.width = "250px";
    document.body.style.position = "fixed";
    document.body.style.overflowY = "scroll";
    document.getElementById("overlay").style.display = "block";
	}

	closeNav() {
	 document.getElementById("mySidenav").style.width = "0";
   document.body.style.overflow = "auto";
   document.body.style.position = "static";
   document.getElementById("overlay").style.display = "none";
	}

}
