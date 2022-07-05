import { Injectable } from '@angular/core';
import { details } from './interface';
interface service{
  tags:string[],
  destinationButtons:{url:string,buttonName:string}[]
  data:details[]
}
@Injectable({
  providedIn: 'root'
})
export class DataService {
  service:service = {
    destinationButtons:[{
      url:"https://youtube.com/img/explore/destinations/icons/trending_color_32.png",
      buttonName:"Trending"
    },
    {
      url:"https://youtube.com/img/explore/destinations/icons/music_color_32.png",
      buttonName:"Music"
    },
    {
      url:"https://youtube.com/img/explore/destinations/icons/movies_color_32.png",
      buttonName:"Movies"
    },
    {
      url:"https://youtube.com/img/explore/destinations/icons/live_color_32.png",
      buttonName:"Life"
    },
    {
      url:"https://youtube.com/img/explore/destinations/icons/gaming_color_32.png",
      buttonName:"Gaming"
    },
    {
      url:"https://youtube.com/img/explore/destinations/icons/news_color_32.png",
      buttonName:"News"
    },
    {
      url:"https://youtube.com/img/explore/destinations/icons/sports_color_32.png",
      buttonName:"Sports"
    },
    {
      url:"https://youtube.com/img/explore/destinations/icons/learning_color_32.png",
      buttonName:"Learning"
    },
    {
      url:"https://youtube.com/img/explore/destinations/icons/fashion_and_beauty_color_32.png",
      buttonName:"Learning"
    }
  ],
    tags: ["music", "sports", "angular", "cooking", "dance", "cars", "bikes", "animals","cooking","courtralam"],
    data: [{
      title: "Beautiful Relaxing Music • Peaceful Piano Music & Guitar Music ",
      views: 64915819,
      time: 22395946585,
      videoId: "hlWiI4xVXKY",
      channeldetails:{
        channelName:"sonymusic",
        channelState:true,
        channelProfile:"https://yt3.ggpht.com/ytc/AKedOLQGbbvWST5tAaS8kiCHQvEIRG5sv1b4HJvQTl_z6A=s48-c-k-c0x00ffffff-no-rj"
      },
      tag: "music",
      imgSrc: "https://i.ytimg.com/vi/hlWiI4xVXKY/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDEGI7v8eVlb9wYwsKlKyWtMz7mnA"
    },
    {
      title: "Best Groom's Dance Ever | SRK & Ranveer Singh Mashup | Daddy Yankee | 2020 |",
      views: 64915819,
      time: 22395946585,
      videoId: "CnhYuOA-2tk",
      channeldetails:{
        channelName:"dance",
        channelState:true,
        channelProfile:"https://yt3.ggpht.com/RJxItm93UJ3pnQvQakcBQZRZFM8FyXc3Wgn8QrNspI1RRnXtSG2tjoVSF_U_I9PbPmV4dNXKPg=s48-c-k-c0x00ffffff-no-rj"
      },
      tag: "dance",
      imgSrc: "https://i.ytimg.com/vi/CnhYuOA-2tk/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA0AzLpzAAmgywfMN1w9MydPEzo4w"
    },
    {
      title: "Big & Small Cars vs Train – Trucks vs Giant Pit – Cars vs Deep Water",
      views: 64915819,
      time: 22395946585,
      videoId: "zQL5_sXiQ78",
      channeldetails:{
        channelName:"cars",
        channelState:true,
        channelProfile:"https://yt3.ggpht.com/ytc/AKedOLSJTF_ayvwL-yMJFTcn5ocOT12bRE1KwA0eVsjQLA=s68-c-k-c0x00ffffff-no-rj"
      },
      tag: "cars",
      imgSrc: "https://i.ytimg.com/vi/zQL5_sXiQ78/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAfkkHxzTzUO0mZ8qdi_UBGw56pyQ"
    },
    {
      title: "2022 KTM Duke 250 Bs6 Detailed Review ",
      views: 64915819,
      time: 22395946585,
      videoId: "c5ebA9KPys8",
      channeldetails:{
        channelName:"bikes",
        channelState:true,
        channelProfile:"https://ic1.maxabout.us/autos/tw_india//N/2020/5/new-ktm-duke-200-fuel-tank.jpg"
      },
      tag: "bikes",
      imgSrc:"https://i.ytimg.com/vi/c5ebA9KPys8/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDSoTH7TZbT4kjXNA7kfDoLV3Vj-w"
    },      
    {
      title: "India Wildlife In 4K - Amazing Scenes Of India's Animals ",
      views: 64915819,
      time: 22395946585,
      videoId: "cwsdTKoGv5U",
      channeldetails:{
        channelName:"animals",
        channelState:true,
        channelProfile:"https://yt3.ggpht.com/-Weca7gZCAF0tBcPwbpITNNyT8Rp2omE9U4Puf8L2JmG7k7eF5hkfA74fFftt-NR4A-ajJcbwFM=s48-c-k-c0x00ffffff-no-rj"
      },
      tag: "animals",
      imgSrc: "https://i.ytimg.com/vi/cwsdTKoGv5U/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBe57_eXKAhPqEdCHXfr6oCiM8pdg"
    },
    {
      title: "Yuji Nishida | Monster of the Vertical Jump | Men's VNL 2021",
      views: 64915819,
      time: 22395946585,
      videoId: "umM0XarqwYE",
      channeldetails:{
        channelName:"sports",
        channelState:true,
        channelProfile:"https://yt3.ggpht.com/ytc/AKedOLRULJAOasZCyGTgg3mykPfTYCgHLjC7bf4edUd7=s48-c-k-c0x00ffffff-no-rj"
      },
      tag: "sports",
      imgSrc: "https://i.ytimg.com/vi/umM0XarqwYE/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBxETnJAB_fe9kT_zZZW-Ws23_PnA"
    },
    {
      title:"What is Observable | Observables | Angular 12+",
      views: 64915819,
      time: 22395946585,
      videoId: "V4iMyVnQPqM",
      channeldetails:{
        channelName:"angular",
        channelState:true,
        channelProfile:"https://yt3.ggpht.com/7sOyFJZOdAuobMoIky-w0ZkAmMYz-6V6iYrWQHa3r9W93-QbmTGuBRmhlWZ4JyvlvyTrbMpnJQ=s48-c-k-c0x00ffffff-no-rj"
      },
      tag: "angular",
      imgSrc:"https://i.ytimg.com/vi/V4iMyVnQPqM/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDbtltkatl96yDLKApr-_tzYs795w"
    },
    {
      title: "CHICKEN TIKKA | Country Chicken BBQ Recipe Cooking In Village ",
      views: 64915819,
      time: 22395946585,
      videoId: "FihDdESTOAw",
      channeldetails:{
        channelName:"cooking",
        channelState:true,
        channelProfile:"https://yt3.ggpht.com/4eEETdAR33227A9KRhQ1T4P2NyYReiZKMeaN_rZ8QZ1LSCLUudaggLhZ1C40RkDyw6SejAmW=s48-c-k-c0x00ffffff-no-rj"
      },
      tag: "cooking",
      imgSrc: "https://i.ytimg.com/vi/FihDdESTOAw/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA2oyNRqwwLwzNamxvcnMcFRuxr-g"
    },
    {
      title: "Courtallam Road Travel Video / Courtallam Tamilnadu Popular Tourists",
      views: 64915819,
      time: 22395946585,
      videoId: "zvJbbvSUPkA",
      channeldetails:{
        channelName:"courtralam",
        channelState:true,
        channelProfile:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/83/fa/a7/dscn1138-largejpg.jpg?w=700&h=500&s=1"
      },
      tag: "courtralam",
      imgSrc:"https://i.ytimg.com/vi/zvJbbvSUPkA/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCJHM2dkmPpMhAXtsDXWld4cu8-gg"
    }]
  }

  constructor() { }
}
