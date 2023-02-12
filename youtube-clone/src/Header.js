import React, {useState} from 'react';
import './Header.css';
import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import VideoCallSharpIcon from '@mui/icons-material/VideoCallSharp';
import AppsSharpIcon from '@mui/icons-material/AppsSharp';
import NotificationsSharpIcon from '@mui/icons-material/NotificationsSharp';
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';




function Header(){
    const[inputSearch, setInputSearch] = useState('');

    return (
    <div className="header">
    
    <div className='header_left'>
    <MenuSharpIcon />
   
        <img 
        className="header_logo"
        src={require('./logo.png')} alt=""/>
        </div>
        
        <div className='header_input'>
        <input onChange={e => setInputSearch()}
         value = {inputSearch} placeholder = "Search" type = "text"/>
        
            <SearchSharpIcon className="header_inputButton" />
       
        </div>

        <div className='header_icon'>
        <VideoCallSharpIcon className='header__icon'/>
        <AppsSharpIcon className='header__icon'/>
        <NotificationsSharpIcon className='header__icon'/>
        <AccountCircleSharpIcon/>
        </div>
        
        </div>
        );

    
}

export default Header;
