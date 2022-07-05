export interface details {
    title: string,
    description?: string,
    views: number,
    time: number,
    videoId: string,
    channeldetails:channeldetails,   
    tag: string,
    imgSrc: string
  } 

 export interface channeldetails{
     channelName:string,
     channelState:boolean,
     channelProfile:string
 } 