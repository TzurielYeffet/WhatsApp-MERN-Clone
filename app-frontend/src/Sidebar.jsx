import React from 'react'
import "./Sidebar.css"
import SidebarChat from './SidebarChat';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {Avatar,IconButton} from '@mui/material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'; 
export default function Sidebar() {
    return (
            <div className="sidebar">
            <div className="sidebar_header">
                <Avatar />  
                <div className="sidebar_headerRight">
                    <IconButton>
                        <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>
            <div className="sidebar_search">
                <div className="sidebar_searchContainer">
                <SearchOutlinedIcon />
                <input placeholder="Search or start a new chat" type="text" />
                </div>          
            </div>
            <div className="sidebar_chat">
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />

            </div>
            </div>
    )
}