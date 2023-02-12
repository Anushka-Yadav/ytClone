
import React from "react";
import VideoCard from "./VideoCard";
import "./RecommendedVideos.css";

function RecommendedVideos(){
    return(
        <div className="recommendedVideos">
            <h2>Recommended</h2>
            <div className="recommendedVideos_videos">
            <VideoCard 
            title={"Thumbnails that Get Views"}
            views={"1.1M Views"}
            timestamp={"5 weeks ago"}
            channelImage={require('./t15.png')}
            channel={"Halucination"}
            image={require('./t1.jpg')}
            />
            <VideoCard
            title={"cold drink destry the day"}
            views={"4.1M Views"}
            timestamp={"3 years ago"}
            channelImage={require('./t6.png')}
            channel={"Mary the Maker"}
            image={require('./t2.jpg')}
            />
            <VideoCard 
            title={"noisy time"}
            views={"6.14k Views"}
            timestamp={"3 days ago"}
            channelImage={require('./t9.png')}
            channel={"AM Greatest"}
            image={require('./t3.jpg')}
            />
            <VideoCard
            title={"worst day of life"}
            views={"1.1k Views"}
            timestamp={"4 months ago"}
            channelImage={require('./t8.png')}
            channel={"Many More"}
            image={require('./t4.jpg')}
            />
            <VideoCard 
            title={"all day only drinks"}
            views={"114k Views"}
            timestamp={"12 weeks ago"}
            channelImage={require('./t11.png')}
            channel={"Sixty Five"}
            image={require('./t5.jpg')}
            />
            <VideoCard
            title={"same color food all day"}
            views={"1.7M Views"}
            timestamp={"2 months ago"}
            channelImage={require('./t15.png')}
            channel={"Counterr"}
            image={require('./t6.png')}
            />
            <VideoCard 
            title={"study 6 hour"}
            views={"189k Views"}
            timestamp={"7 weeks ago"}
            channelImage={require('./t14.png')}
            channel={"Time Flies"}
            image={require('./t7.jpg')}
            />
            <VideoCard
            title={"excess sleep is not good"}
            views={"1M Views"}
            timestamp={"3 months ago"}
            channelImage={require('./t9.png')}
            channel={"My Files"}
            image={require('./t8.png')}
            />
            <VideoCard 
            title={"Disgust day"}
            views={"170.1M Views"}
            timestamp={"5 years ago"}
            channelImage={require('./t8.png')}
            channel={"europians"}
            image={require('./t9.png')}
            />
            <VideoCard
            title={"show on"}
            views={"14.1M Views"}
            timestamp={"13 years ago"}
            channelImage={require('./t14.png')}
            channel={"power strikers"}
            image={require('./t10.jpg')}
            />
            <VideoCard 
            title={"science of stupids"}
            views={"16.14k Views"}
            timestamp={"10 days ago"}
            channelImage={require('./t15.png')}
            channel={"Miles Antonio"}
            image={require('./t11.png')}
            />
            <VideoCard
            title={"Stupids"}
            views={"1.21k Views"}
            timestamp={"11 months ago"}
            channelImage={require('./t9.png')}
            channel={"Science of stupids"}
            image={require('./t12.jpg')}
            />
            <VideoCard 
            title={"Googly world"}
            views={"110k Views"}
            timestamp={"2 weeks ago"}
            channelImage={require('./t15.png')}
            channel={"damn it"}
            image={require('./t13.jpg')}
            />
            <VideoCard
            title={"time to run"}
            views={"1.78M Views"}
            timestamp={"2 months ago"}
            channelImage={require('./t14.png')}
            channel={"Counterr Attakers"}
            image={require('./t14.png')}
            />
            <VideoCard 
            title={"nature Views"}
            views={"119k Views"}
            timestamp={"7 weeks ago"}
            channelImage={require('./t9.png')}
            channel={"Time in Flies"}
            image={require('./t15.png')}
            />
            <VideoCard
            title={"sound in air"}
            views={"19M Views"}
            timestamp={"3 months ago"}
            channelImage={require('./t8.png')}
            channel={"My Files"}
            image={require('./t16.jpg')}
            />
            <VideoCard
            title={"joy in minutes"}
            views={"10M Views"}
            timestamp={"8 months ago"}
            channelImage={require('./t15.png')}
            channel={"My world"}
            image={require('./t17.jpg')}
            />
            
            </div>
        
        </div>
    )
}

export default RecommendedVideos