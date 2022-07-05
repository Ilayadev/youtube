import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExploreComponent } from './explore/explore.component';
import { HomeElementComponent } from './home-element/home-element.component';
import { HomeComponent } from './home/home.component';
import { ResultComponent } from './result/result.component';
import { SubscriptionComponent } from './subscription/subscription.component';

const routes: Routes = [
  {
    path:"home",component:HomeComponent,children:[ 
      {
        path:'',component:HomeElementComponent
      },
    {
      path:"explore",component:ExploreComponent
    },
    {
      path:"subscription",component:SubscriptionComponent
    }]
  },
  {
    path:"",redirectTo:"result",pathMatch:"full"
  },
  {
    path:"result",component:ResultComponent
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
