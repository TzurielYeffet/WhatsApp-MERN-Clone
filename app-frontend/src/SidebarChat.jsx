import React from 'react'
import "./SidebarChat.css"
import {Avatar}  from '@mui/material';
function SidebarChat() {
    return (
        <div className="sidebarChat">
            <Avatar />
            <div className="sidebarChat_info">
           
            <h2> Room Name</h2>
            <p>this is the last massage</p>
            </div>
        </div>
    )
}

export default SidebarChat;
