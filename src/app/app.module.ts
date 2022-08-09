import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';

import { CarouselModule } from 'primeng/carousel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';   

import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { FooterComponent } from './components/footer/footer.component';


import { BusinessComponent } from './components/menu-pages/business/business.component';
import { HomeComponent } from './components/menu-pages/home/home.component';
import { Page404Component } from './components/menu-pages/page404/page404.component';
import { PodcastsComponent } from './components/menu-pages/podcasts/podcasts.component';
import { PoliticsComponent } from './components/menu-pages/politics/politics.component';
import { SportsComponent } from './components/menu-pages/sports/sports.component';
import { TravelComponent } from './components/menu-pages/travel/travel.component';
import { WorldComponent } from './components/menu-pages/world/world.component';


import { HeadlinesComponent } from './components/home-components/headlines/headlines.component';
import { BreakingNewsComponent } from './components/home-components/breaking-news/breaking-news.component';
import { MainNewsComponent } from './components/home-components/main-news/main-news.component';
import { ScrollingNewsComponent } from './components/home-components/scrolling-news/scrolling-news.component';
import { AsideNewsComponent } from './components/home-components/aside-news/aside-news.component';

import { DateAgoPipe } from './pipes/date-ago.pipe';
import { LatestComponent } from './components/nested-main-news/latest/latest.component';
import { ThinkComponent } from './components/nested-main-news/think/think.component';
import { HealthComponent } from './components/nested-main-news/health/health.component';

import { ApiService } from './services/api.service';


const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "politics", component: PoliticsComponent},
  {path: "business", component: BusinessComponent},
  {path: "sports", component: SportsComponent},
  {path: "world", component: WorldComponent},
  {path: "travel", component: TravelComponent},
  {path: "podcasts", component: PodcastsComponent},
  {path: "**", component: Page404Component}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    HomeComponent,
    PoliticsComponent,
    BusinessComponent,
    SportsComponent,
    WorldComponent,
    TravelComponent,
    PodcastsComponent,
    Page404Component,
    HeadlinesComponent,
    MainNewsComponent,
    AsideNewsComponent,
    ScrollingNewsComponent,
    BreakingNewsComponent,
    DateAgoPipe,
    LatestComponent,
    ThinkComponent,
    HealthComponent,
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    LoadingBarHttpClientModule,
    FontAwesomeModule,
    CarouselModule,
    BrowserAnimationsModule,
    ButtonModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }