import React from "react";
import HomeIcon from '@mui/icons-material/Home';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIcon from '@mui/icons-material/History';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import SidebarRow from "./SidebarRow";
import "./Sidebar.css";
function Sidebar(){
    return(
        <div className="sidebar">
            <SidebarRow selected Icon={HomeIcon} title="Home"/>
            <SidebarRow Icon={WhatshotIcon} title="Trending"/>
            <SidebarRow Icon={SubscriptionsIcon} title="Subscription"/>
           <hr/>
           <SidebarRow Icon={VideoLibraryIcon} title="Library"/>
           <SidebarRow Icon={HistoryIcon} title="History"/>
           <SidebarRow Icon={OndemandVideoIcon} title="Your videos"/>
           <SidebarRow Icon={WatchLaterIcon} title="Watch Later"/>
           <SidebarRow Icon={ThumbUpAltOutlinedIcon} title="Liked Videos"/>
           <SidebarRow Icon={ExpandMoreOutlinedIcon} title="Show More"/>
           <hr/>
           
        </div>
    )
}

export default Sidebar