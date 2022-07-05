import { Injectable } from '@angular/core';
import { details } from './interface';
interface service{
  tags:string[],
  data:details[]
}
@Injectable({
  providedIn: 'root'
})
export class DataService {
  service:service = {
    tags: ['All','comdey', "music", "sports", "angular", "cooking", "dance", "cars", "bike", "animals","birds","zoho","riding","TamilNadu"],
    data: [{
      title: "Maruthu - Karuvakaatu Karuvaaya Video | Vishal, Sri Divya | D. Imman",
      views: 64915819,
      time: 22395946585,
      videoId: "-x5R1aBaOEA",
      channeldetails:{
        channelName:"sonymusic",
        channelState:true,
        channelProfile:"https://yt3.ggpht.com/ytc/AKedOLR3KYuyI0AudsWhffoLeMAcBkia0YioLW-kGIVY5A=s68-c-k-c0x00ffffff-no-rj"
      },
      tag: "music",
      imgSrc: "https://i.ytimg.com/vi/-x5R1aBaOEA/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBG70Z5RVZWFyuYv0mL8PWR0fuiqg"
    },
    {
      title: "Maruthu - Karuvakaatu Karuvaaya Video | Vishal, Sri Divya | D. Imman",
      views: 64915819,
      time: 22395946585,
      videoId: "-x5R1aBaOEA",
      channeldetails:{
        channelName:"sonymusic",
        channelState:true,
        channelProfile:"https://yt3.ggpht.com/ytc/AKedOLR3KYuyI0AudsWhffoLeMAcBkia0YioLW-kGIVY5A=s68-c-k-c0x00ffffff-no-rj"
      },
      tag: "music",
      imgSrc: "https://i.ytimg.com/vi/-x5R1aBaOEA/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBG70Z5RVZWFyuYv0mL8PWR0fuiqg"
    },
    {
      title: "Maruthu - Karuvakaatu Karuvaaya Video | Vishal, Sri Divya | D. Imman",
      views: 64915819,
      time: 22395946585,
      videoId: "-x5R1aBaOEA",
      channeldetails:{
        channelName:"sonymusic",
        channelState:true,
        channelProfile:"https://yt3.ggpht.com/ytc/AKedOLR3KYuyI0AudsWhffoLeMAcBkia0YioLW-kGIVY5A=s68-c-k-c0x00ffffff-no-rj"
      },
      tag: "music",
      imgSrc: "https://i.ytimg.com/vi/-x5R1aBaOEA/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBG70Z5RVZWFyuYv0mL8PWR0fuiqg"
    },
    {
      title: "Maruthu - Karuvakaatu Karuvaaya Video | Vishal, Sri Divya | D. Imman",
      views: 64915819,
      time: 22395946585,
      videoId: "-x5R1aBaOEA",
      channeldetails:{
        channelName:"sonymusic",
        channelState:true,
        channelProfile:"https://yt3.ggpht.com/ytc/AKedOLR3KYuyI0AudsWhffoLeMAcBkia0YioLW-kGIVY5A=s68-c-k-c0x00ffffff-no-rj"
      },
      tag: "music",
      imgSrc: "https://i.ytimg.com/vi/-x5R1aBaOEA/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBG70Z5RVZWFyuYv0mL8PWR0fuiqg"
    },      
    {
      title: "Maruthu - Karuvakaatu Karuvaaya Video | Vishal, Sri Divya | D. Imman",
      views: 64915819,
      time: 22395946585,
      videoId: "-x5R1aBaOEA",
      channeldetails:{
        channelName:"sonymusic",
        channelState:true,
        channelProfile:"https://yt3.ggpht.com/ytc/AKedOLR3KYuyI0AudsWhffoLeMAcBkia0YioLW-kGIVY5A=s68-c-k-c0x00ffffff-no-rj"
      },
      tag: "music",
      imgSrc: "https://i.ytimg.com/vi/-x5R1aBaOEA/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBG70Z5RVZWFyuYv0mL8PWR0fuiqg"
    },
    {
      title: "Maruthu - Karuvakaatu Karuvaaya Video | Vishal, Sri Divya | D. Imman",
      views: 64915819,
      time: 22395946585,
      videoId: "-x5R1aBaOEA",
      channeldetails:{
        channelName:"sonymusic",
        channelState:true,
        channelProfile:"https://yt3.ggpht.com/ytc/AKedOLR3KYuyI0AudsWhffoLeMAcBkia0YioLW-kGIVY5A=s68-c-k-c0x00ffffff-no-rj"
      },
      tag: "music",
      imgSrc: "https://i.ytimg.com/vi/-x5R1aBaOEA/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBG70Z5RVZWFyuYv0mL8PWR0fuiqg"
    },
    {
      title: "Maruthu - Karuvakaatu Karuvaaya Video | Vishal, Sri Divya | D. Imman",
      views: 64915819,
      time: 22395946585,
      videoId: "-x5R1aBaOEA",
      channeldetails:{
        channelName:"sonymusic",
        channelState:true,
        channelProfile:"https://yt3.ggpht.com/ytc/AKedOLR3KYuyI0AudsWhffoLeMAcBkia0YioLW-kGIVY5A=s68-c-k-c0x00ffffff-no-rj"
      },
      tag: "music",
      imgSrc: "https://i.ytimg.com/vi/-x5R1aBaOEA/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBG70Z5RVZWFyuYv0mL8PWR0fuiqg"
    },
    {
      title: "Maruthu - Karuvakaatu Karuvaaya Video | Vishal, Sri Divya | D. Imman",
      views: 64915819,
      time: 22395946585,
      videoId: "-x5R1aBaOEA",
      channeldetails:{
        channelName:"sonymusic",
        channelState:true,
        channelProfile:"https://yt3.ggpht.com/ytc/AKedOLR3KYuyI0AudsWhffoLeMAcBkia0YioLW-kGIVY5A=s68-c-k-c0x00ffffff-no-rj"
      },
      tag: "music",
      imgSrc: "https://i.ytimg.com/vi/-x5R1aBaOEA/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBG70Z5RVZWFyuYv0mL8PWR0fuiqg"
    },
    {
      title: "Maruthu - Karuvakaatu Karuvaaya Video | Vishal, Sri Divya | D. Imman",
      views: 64915819,
      time: 22395946585,
      videoId: "-x5R1aBaOEA",
      channeldetails:{
        channelName:"sonymusic",
        channelState:true,
        channelProfile:"https://yt3.ggpht.com/ytc/AKedOLR3KYuyI0AudsWhffoLeMAcBkia0YioLW-kGIVY5A=s68-c-k-c0x00ffffff-no-rj"
      },
      tag: "music",
      imgSrc: "https://i.ytimg.com/vi/-x5R1aBaOEA/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBG70Z5RVZWFyuYv0mL8PWR0fuiqg"
    }]
  }

  constructor() { }
}
