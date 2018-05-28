var Youtube = /** @class */ (function () {
    function Youtube(videoTitle, numberOfViews, uploaderNaame, Duratrion_In_minutes, likes, dislike, IsSubscribedToChannel, relatedVideos) {
        var _this = this;
        this.videoTitle = videoTitle;
        this.numberOfViews = numberOfViews;
        this.uploaderNaame = uploaderNaame;
        this.Duratrion_In_minutes = Duratrion_In_minutes;
        this.likes = likes;
        this.dislike = dislike;
        this.IsSubscribedToChannel = IsSubscribedToChannel;
        this.relatedVideos = relatedVideos;
        this.getvideoTitle = function () {
            return _this.videoTitle;
        };
        this.getnumberOfViews = function () {
            return _this.numberOfViews;
        };
        this.getuploaderNaame = function () {
            return _this.uploaderNaame;
        };
        this.getDuation_In_minutes = function () {
            return _this.Duratrion_In_minutes;
        };
        this.getlikes = function () {
            return _this.likes;
        };
        this.getDislike = function () {
            return _this.dislike;
        };
        this.getIsSubscribedToChannel = function () {
            return _this.IsSubscribedToChannel;
        };
        this.getrelatedVideos = function () {
            return _this.relatedVideos;
        };
        this.videoTitle = videoTitle;
        this.numberOfViews = numberOfViews;
        this.uploaderNaame = uploaderNaame;
        this.Duratrion_In_minutes = Duratrion_In_minutes;
        this.likes = likes;
        this.dislike = dislike;
        this.IsSubscribedToChannel;
        this.relatedVideos = relatedVideos;
    }
    return Youtube;
}());
var Video1 = new Youtube("Top 10 facts about world", 85949, "Mohammad Sharique", 15, 5565, 77, true, "kk");
console.log(Video1.getvideoTitle());
console.log(Video1.getnumberOfViews());
console.log(Video1.getuploaderNaame());
console.log(Video1.getDuation_In_minutes());
console.log(Video1.getlikes());
console.log(Video1.getDislike());
console.log(Video1.getIsSubscribedToChannel());
console.log(Video1.getrelatedVideos());
var Video2 = new Youtube("News Debate on Demonitization", 42949, "Zee News", 22, 8565, 62, false);
console.log(Video2.getvideoTitle());
console.log(Video2.getnumberOfViews());
console.log(Video2.getuploaderNaame());
console.log(Video2.getDuation_In_minutes());
console.log(Video2.getlikes());
console.log(Video2.getDislike());
console.log(Video2.getIsSubscribedToChannel());
console.log(Video2.getrelatedVideos());
