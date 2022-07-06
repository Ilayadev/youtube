import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExploreComponent } from './explore/explore.component';
import { HomeElementComponent } from './home-element/home-element.component';
import { HomeComponent } from './home/home.component';
import { ResultTicketsComponent } from './result-tickets/result-tickets.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { VideoPlayingComponent } from './video-playing/video-playing.component';

const routes: Routes = [
  {
    path: "home", component: HomeComponent, children: [
      {
        path: '', component: HomeElementComponent
      },
      {
        path: "explore", component: ExploreComponent
      },
      {
        path: "subscription", component: SubscriptionComponent
      },
      {
        path:'result',component:ResultTicketsComponent
      }
    ]
  },
  {
    path: "", redirectTo: "home", pathMatch: "full"
  },
  {
    path: "watching/:id", component: VideoPlayingComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
