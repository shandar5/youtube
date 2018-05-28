class Youtube
{
   constructor(public videoTitle: string, public numberOfViews: number, public uploaderNaame:string, public Duratrion_In_minutes:number,public likes:number,public dislike:number ,public IsSubscribedToChannel:boolean, public relatedVideos?:string ) 
   {
       this.videoTitle=videoTitle;
       this.numberOfViews=numberOfViews;
       this.uploaderNaame=uploaderNaame;
       this.Duratrion_In_minutes=Duratrion_In_minutes;
       this.likes=likes;
       this.dislike=dislike;
       this.IsSubscribedToChannel;
       this.relatedVideos=relatedVideos
   }

getvideoTitle=()=>
{
    return this.videoTitle
}

getnumberOfViews=()=>
{
    return this.numberOfViews
} 

getuploaderNaame=()=>
{
    return this.uploaderNaame
}

getDuation_In_minutes=()=>
{
    return this.Duratrion_In_minutes
}

getlikes=()=>
{
    return this.likes
}

getDislike=()=>
{
    return this.dislike
}

getIsSubscribedToChannel=()=>
{
    return this.IsSubscribedToChannel

}

getrelatedVideos=()=>
{
    return this.relatedVideos
}



}

let Video1 = new Youtube("Top 10 facts about world",85949,"Mohammad sharique",15,5565,77,true,"kk")
console.log(Video1.getvideoTitle())
console.log(Video1.getnumberOfViews())
console.log(Video1.getuploaderNaame())
console.log(Video1.getDuation_In_minutes())
console.log(Video1.getlikes())
console.log(Video1.getDislike())
console.log(Video1.getIsSubscribedToChannel())
console.log(Video1.getrelatedVideos())

let Video2 = new Youtube("News Debate on Demonitization",42949,"Zee News",22,8565,62,false)
console.log(Video2.getvideoTitle())
console.log(Video2.getnumberOfViews())
console.log(Video2.getuploaderNaame())
console.log(Video2.getDuation_In_minutes())
console.log(Video2.getlikes())
console.log(Video2.getDislike())
console.log(Video2.getIsSubscribedToChannel())
console.log(Video2.getrelatedVideos())
