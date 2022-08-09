import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/menu-pages/home/home.component';
import { LatestComponent } from './components/nested-main-news/latest/latest.component';
import { ThinkComponent } from './components/nested-main-news/think/think.component';
import { HealthComponent } from './components/nested-main-news/health/health.component';



const routes: Routes = [
  {path: "",
  children: [
    {
      path: "",
      component: LatestComponent,
  },
  {
    path: "think",
    component: ThinkComponent,
  },
  {
    path: "health",
    component: HealthComponent,
  }
  ],
  component: HomeComponent}
];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
