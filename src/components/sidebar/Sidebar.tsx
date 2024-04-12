import React from 'react'

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import MicIcon from '@mui/icons-material/Mic';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import SettingsIcon from '@mui/icons-material/Settings';

import "./Sidebar.scss"
import { SidebarChannel } from './SidebarChannel';

export const Sidebar = () => {
  return (
    <div className='sidebar'>
      {/* sidebarLeft */}
      <div className="sidebar__left">
          <div className="serverIcon">
            <img src="public/logo192.png" alt="" />
          </div>
          <div className="serverIcon">
            <img src="public/logo192.png" alt="" />
          </div>
      </div>
      {/* sidebarRight */}
      <div className="sidebar__right">
        <div className="sidebar__right__top">
          <h3>Discord</h3>
          <ExpandMoreIcon />
        </div>
        {/* sidebarChannels */}
        <div className="sidebar__right__channels">
          <div className="sidebar__right__channels__header">
            <div className="sidebar-header">
              <ExpandMoreIcon />
              <h4>プログラミングチャンネル</h4>
            </div>
            <AddIcon className='sidebar-icon'/>
          </div>

          <div className="sidebar__right__channels__list">
            <SidebarChannel />
            <SidebarChannel />
            <SidebarChannel />
          </div>

          <div className="sidebar__right__channels__footer">
            <div className="sidebar-account">
              <img src="public/icon.png" alt="" />
              <div className="account-name">
                <h4>ShinCode</h4>
                <span>#8162</span>
              </div>
            </div>
            <div className="sidebar-voice">
              <MicIcon />
              <HeadphonesIcon />
              <SettingsIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
