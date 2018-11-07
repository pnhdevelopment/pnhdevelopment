import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HeroComponent } from './hero/hero.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { LatestWorkComponent } from './latest-work/latest-work.component';
import { TickBoxesComponent } from './tick-boxes/tick-boxes.component';
import { ContactComponent } from './contact/contact.component';
import { BlogComponent } from './blog/blog.component';
import { BlogItemComponent } from './blog-item/blog-item.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MySkillsComponent } from './my-skills/my-skills.component';
import { NavbarComponent } from './navbar/navbar.component';


const appRoutes: Routes = [
  { path: 'blog/:slug',   component: BlogItemComponent },
  { path: 'blog',         component: BlogComponent },
  { path: '',             component: HomeComponent },
  { path: '**',           component: PageNotFoundComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HeroComponent,
    AboutMeComponent,
    LatestWorkComponent,
    TickBoxesComponent,
    ContactComponent,
    BlogComponent,
    BlogItemComponent,
    HomeComponent,
    PageNotFoundComponent,
    MySkillsComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot( appRoutes ),
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
