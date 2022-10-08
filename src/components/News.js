import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
    articles=[
        {
          "source": { "id": "espn-cric-info", "name": "ESPN Cric Info" },
          "author": null,
          "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
          "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
          "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
          "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
          "publishedAt": "2020-04-27T11:41:47Z",
          "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
        },  
        {
          "source": { "id": "espn-cric-info", "name": "ESPN Cric Info" },
          "author": null,
          "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
          "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
          "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
          "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
          "publishedAt": "2020-03-30T15:26:05Z",
          "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Aya Elamroussi",
            "title": "California's Merced community is mourning the loss of 4 family members who were kidnapped and killed. 2 men have been arrested, police say - CNN",
            "description": "A community in central California is grappling with the grief of losing an 8-month old baby, her parents and her uncle, who were kidnapped and killed earlier this week allegedly by a former employee of their family-owned business.",
            "url": "https://www.cnn.com/2022/10/08/us/california-family-kidnapped-killed-saturday/index.html",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/221008014827-02-california-family-kidnapped-killed-saturday.jpg?c=16x9&q=w_800,c_fill",
            "publishedAt": "2022-10-08T09:23:00Z",
            "content": "A community in central California is grappling with the grief of losing an 8-month old baby, her parents and her uncle, who were kidnapped and killed earlier this week allegedly by a former employee … [+5898 chars]"
        },
        {
            "source": {
                "id": "associated-press",
                "name": "Associated Press"
            },
            "author": "Tassanee Vejpongsa",
            "title": "'I love you, mommy': 4-year-old Thai day care victim mourned - The Associated Press - en Español",
            "description": "UTHAI SAWAN, Thailand (AP) — The little girl’s nickname was Plai Fon. In Thai, it means “the end of the rainy season” — a time of happiness.  And then in one horrible burst of violence, the happiness that the chubby-cheeked 4-year-old had symbolized for her a…",
            "url": "https://apnews.com/article/thailand-climate-and-environment-b877b2e79ed2f105d2b3b3c4514c232e",
            "urlToImage": "https://storage.googleapis.com/afs-prod/media/bf1296a7908e4fde918c66e3a4fe8fc2/3000.jpeg",
            "publishedAt": "2022-10-08T08:32:55Z",
            "content": "UTHAI SAWAN, Thailand (AP) The little girls nickname was Plai Fon. In Thai, it means the end of the rainy season a time of happiness. \r\nAnd then in one horrible burst of violence, the happiness that … [+3999 chars]"
        },
        {
            "source": {
                "id": "the-washington-post",
                "name": "The Washington Post"
            },
            "author": "Isabelle Khurshudyan, Kamila Hrabchuk",
            "title": "How Ukrainians, targeting by drone, attacked Russian artillery in Kherson - The Washington Post",
            "description": "Exclusive video and screenshots obtained by The Washington Post show how the Ukrainian military used a drone to target and successfully attack a Russian artillery unit in the Kherson region.",
            "url": "https://www.washingtonpost.com/world/2022/10/08/ukraine-russia-drones-artillery/",
            "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/QWOUZDUR5IEHTRT5SVI67WGUNI.JPG&w=1440",
            "publishedAt": "2022-10-08T08:00:00Z",
            "content": "KHERSON REGION, Ukraine The discovery was made by two Ukrainian soldiers staring wide-eyed at their laptop screens, set up in the trunk of their SUV. They sat on a makeshift bench, the large plastic … [+7868 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Tampa Bay Times"
            },
            "author": "Michaela Mulligan",
            "title": "Stunning aerial photos show Hurricane Ian’s path along Florida’s west coast - Tampa Bay Times",
            "description": "Robert Young, a professor at Western Carolina University, took about 500 photos from a Cessna flying over of the southwest coast of Florida.",
            "url": "https://www.tampabay.com/hurricane/2022/10/07/stunning-aerial-photos-show-hurricane-ians-path-along-floridas-west-coast/",
            "urlToImage": "https://www.tampabay.com/resizer/xMLp3I_JO0OGkbOjUB-FpjPuj7k=/1200x675/smart/cloudfront-us-east-1.images.arcpublishing.com/tbt/KII57LW7JVFJHLCCIDAIN2XPHM.JPG",
            "publishedAt": "2022-10-08T07:08:33Z",
            "content": "Robert Young had his arms outside the window of a Cessna that was about 500 feet in the air on Tuesday afternoon. He was shooting photos of Hurricane Ians wrath along the west coast of Florida.\r\nYoun… [+6282 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "YouTube"
            },
            "author": null,
            "title": "A LOT of repercussions will come out of the Draymond Green-Jordan Poole altercation - Ohm - ESPN",
            "description": "Ohm Youngmisuk and Dave McMenamin react to the altercation between Jordan Poole and Draymond Green.✔️Subscribe to ESPN+ http://espnplus.com/youtube✔️ Get the...",
            "url": "https://www.youtube.com/watch?v=xO8WxCp8IiY",
            "urlToImage": "https://i.ytimg.com/vi/xO8WxCp8IiY/maxresdefault.jpg",
            "publishedAt": "2022-10-08T04:59:08Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "Yahoo Entertainment"
            },
            "author": "HYUNG-JIN KIM",
            "title": "North Korea says US carrier's return aggravates tensions - Yahoo News",
            "description": "North Korea warned Saturday the U.S. redeployment of an aircraft carrier near the Korean Peninsula is causing a “considerably huge negative splash” in...",
            "url": "https://news.yahoo.com/north-korea-says-us-carriers-043631037.html",
            "urlToImage": "https://s.yimg.com/ny/api/res/1.2/m5SbnluoaGTrFLqj0PImbg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://media.zenfs.com/en/ap.org/6d237047ccc62c554340933284ce6db7",
            "publishedAt": "2022-10-08T04:40:15Z",
            "content": "SEOUL, South Korea (AP) North Korea warned Saturday the U.S. redeployment of an aircraft carrier near the Korean Peninsula is causing a considerably huge negative splash in regional security, as it d… [+2775 chars]"
        },
        {
            "source": {
                "id": "the-washington-post",
                "name": "The Washington Post"
            },
            "author": "Andrew Jeong",
            "title": "Arizona court halts enforcement of near-total abortion ban - The Washington Post",
            "description": "Planned Parenthood Arizona had appealed a lower court's decision to revive a 19th century abortion ban with no exceptions for rape and incest victims.",
            "url": "https://www.washingtonpost.com/politics/2022/10/07/arizona-abortion-law-planned-parenthood/",
            "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/2XK2CLB4FYI63OFPBICOLXB5WY.jpg&w=1440",
            "publishedAt": "2022-10-08T04:08:00Z",
            "content": "An Arizona appellate court halted enforcement of the states near-total abortion ban late Friday, staying a lower courts decision to reinstate an older law which only allows the procedure if it is nee… [+3507 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "KSL.com"
            },
            "author": "John Clyde for KSL.com",
            "title": "Review: How 'Amsterdam' earned its R rating - KSL.com",
            "description": "This review is to help educate you on what kind of content is in \"Amsterdam\" so you can decide if it is for you.",
            "url": "https://www.ksl.com/article/50491156/review-how-amsterdam-earned-its-r-rating",
            "urlToImage": "https://img.ksl.com/slc/2896/289682/28968257.jpg?filter=kslv2/responsive_story_lg",
            "publishedAt": "2022-10-08T03:38:48Z",
            "content": "Estimated read time: 3-4 minutes\r\nAMSTERDAM During this time of year, many people ask me, \"What does this movie have in it?\"\r\nThat's because this is the time of year studios start releasing the films… [+3062 chars]"
        },
        {
            "source": {
                "id": "politico",
                "name": "Politico"
            },
            "author": null,
            "title": "Barnes takes the fight to Johnson in Wisconsin Senate debate - POLITICO",
            "description": "The Democrat is seeking to reverse a recent slide in polls with Johnson widely seen as the most vulnerable GOP incumbent senator facing reelection in November.",
            "url": "https://www.politico.com/news/2022/10/07/barnes-johnson-wisconsin-senate-debate-00061056",
            "urlToImage": "https://static.politico.com/0a/fb/25ccae30452296edd65e79027279/election-2022-wisconsin-senate-debate-42174.jpg",
            "publishedAt": "2022-10-08T03:36:32Z",
            "content": "Johnson is widely seen as the most vulnerable GOP incumbent senator facing reelection in November, and his victory is critical to the Republicans path to regaining control of the Senate. Despite his … [+6002 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "YourTango"
            },
            "author": "Kate Rose",
            "title": "The Luckiest Day Of The Week For Each Zodiac Sign, October 10 - 16, 2022 - YourTango",
            "description": "The luckiest day of the week for each zodiac sign is here for October 10 - 16, 2022. This week the ongoing friction of Saturn in Aquarius and Uranus in Taurus brings challenges that lead to opportuinites.",
            "url": "https://www.yourtango.com/2022354661/luckiest-day-week-zodiac-signs-october-10-october-16-2022",
            "urlToImage": "https://www.yourtango.com/sites/default/files/styles/listing_big/public/image_blog/zodiac-signs-luckiest-day-week-october-16-20-2022.png?itok=D68inP_G",
            "publishedAt": "2022-10-08T02:00:38Z",
            "content": "This week, much of the energy occurs behind the scenes through the ongoing friction of Saturn in Aquarius and Uranus in Taurus.\r\nThis tension point between the planets that govern restriction and fre… [+9750 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "YouTube"
            },
            "author": null,
            "title": "Tropical update: Keeping an eye on Tropical Storm Julia | 7 p.m. 10/7 - KHOU 11",
            "description": "KHOU 11 meteorologist Tim Pandajis is tracking the latest movement of Tropical Storm Julia, which is not a threat to Texas.http://khou.com/hurricane",
            "url": "https://www.youtube.com/watch?v=FUsh0IF3dQw",
            "urlToImage": "https://i.ytimg.com/vi/FUsh0IF3dQw/hqdefault.jpg",
            "publishedAt": "2022-10-08T00:35:11Z",
            "content": null
        },
        {
            "source": {
                "id": "cbs-news",
                "name": "CBS News"
            },
            "author": null,
            "title": "Biden says risk of \"Armageddon\" highest since Cuban Missile Crisis as tensions rise with Russia - CBS News",
            "description": "President Biden said Putin was \"not joking when he talks about the potential use of tactical nuclear weapons, or biological or chemical weapons.\"",
            "url": "https://www.cbsnews.com/news/biden-armageddon-nuclear-risk-cuban-missile-crisis-russia-tensions/",
            "urlToImage": "https://assets1.cbsnewsstatic.com/hub/i/r/2022/10/07/2f992460-3622-4ad0-87ac-a73a90020fd4/thumbnail/1200x630/6266ea864983b008fca2f1711131b8d5/gettyimages-1243772365.jpg",
            "publishedAt": "2022-10-07T23:00:00Z",
            "content": "President Biden said Thursday the risk of \"Armageddon\" is at the highest level since the 1962 Cuban Missile Crisis, as Russian officials allude to the possibility of using tactical nuclear weapons af… [+3397 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Sports Illustrated"
            },
            "author": "Jelani Scott",
            "title": "Phillies Make MLB Postseason History With Stunning Ninth Inning - Sports Illustrated",
            "description": "Philadelphia came away with an unbelievable win over the Cardinals to open their wild-card round series.",
            "url": "https://www.si.com/mlb/2022/10/07/phillies-make-mlb-postseason-history-with-stunning-ninth-inning",
            "urlToImage": "https://www.si.com/.image/t_share/MTkyODY5NTM4MzI3NDM4NTU3/usatsi_19190918-1.jpg",
            "publishedAt": "2022-10-07T22:42:24Z",
            "content": "The Phillies opened their NL wild-card round matchup against the Cardinals with a bang Friday thanks to a historic showing in the ninth inning.\r\nAfter going scoreless through eight innings, Philadelp… [+1844 chars]"
        },
      ]
    constructor(){
        super();
        console.log("Hello");
        this.state=
        {
            articles:this.articles,
            loading:true
        }
    }

  render() {
    return (
      <div className="constiner my-3">
        <h2>NewsMonk - Top headlines</h2>
        <div className="row">
        {this.state.articles.map((element)=>{
            return <div className="col md-4"  key={element.url}>
            <NewsItem title={element.title.slice(0,45)} description={element.description.slice(0,88)} imageUrl={element.urlToImage} newsurl={element.url}/>
          </div>
        })}
        
        </div>
      </div>
    );
  }
}

export default News;
