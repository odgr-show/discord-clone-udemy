import React from 'react'
import NotificationsIcon from '@mui/icons-material/Notifications';
import PushPinIcon from '@mui/icons-material/PushPin';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import SearchIcon from '@mui/icons-material/Search';
import SendIcon from '@mui/icons-material/Send';
import HelpIcon from '@mui/icons-material/Help';

import "./ChatHeader.scss"

export const ChatHeader = () => {
  return (
    <div className='chatHeader'>
        <div className="chatHeader__left">
            <h3>
                <span className="chatHeader__hash">#</span>
                Udemy
            </h3>
        </div>

        <div className="chatHeader__right">
            <NotificationsIcon />
            <PushPinIcon />
            <PeopleAltIcon />
            <div className="chatHeader__search">
                <input type="text" placeholder='検索'/>
                <SearchIcon />
            </div>
            <SendIcon />
            <HelpIcon />
        </div>
    </div>
  )
}
