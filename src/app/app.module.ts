import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { HomeElementComponent } from './home-element/home-element.component';
import { ExploreComponent } from './explore/explore.component';
import { TicketsComponent } from './tickets/tickets.component';
import { TitleComponent } from './title/title.component';
import { ImgTagComponent } from './img-tag/img-tag.component';
import { ViewstimeComponent } from './viewstime/viewstime.component';
import { ChannelDetailsComponent } from './channel-details/channel-details.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { ChannelContainerComponent } from './channel-container/channel-container.component';
import { ChannelComponent } from './channel/channel.component';
import { HomeTicketsComponent } from './home-tickets/home-tickets.component';
import { ClassDirective } from './class.directive';
import { StyleDirective } from './style.directive';
import { ResultTicketsComponent } from './result-tickets/result-tickets.component';
import { IfDirective } from './if.directive';
import { ForDirective } from './for.directive';
import{details} from './interface';
import { ResultComponent } from './result/result.component'
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    HomeElementComponent,
    ExploreComponent,
    TicketsComponent,
    TitleComponent,
    ImgTagComponent,
    ViewstimeComponent,
    ChannelDetailsComponent,
    SubscriptionComponent,
    ChannelContainerComponent,
    ChannelComponent,
    HomeTicketsComponent,
    ClassDirective,
    StyleDirective,
    ResultTicketsComponent,
    IfDirective,
    ForDirective,
    ResultComponent,    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
