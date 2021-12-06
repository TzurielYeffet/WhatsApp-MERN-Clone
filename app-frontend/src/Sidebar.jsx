import React,{useState,useEffect} from 'react'
import "./Sidebar.css"
// import SidebarChat from './SidebarChat';
import './SidebarChat.css';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {Avatar,IconButton} from '@mui/material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'; 
import {Link ,useParams} from 'react-router-dom';
import axios from './axios';


// import usersDB from './dbUsers.js'

export default function Sidebar(props) {
    const {chatId} = useParams();
    // const [chats,setChats] = useState([]);
    // useEffect(()=>{
    //     props.users.map((chats)=>)
    // },[]);   

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
                   {props.users.map((users)=>(  
                    <Link to={`/chat/${users._id}`}>
                        <div className="sidebarChat">
                        <Avatar />
                        <div className="sidebarChat_info">    
                           <h2> {users.username}</h2>
                           <p>this is the last massage</p>
                        </div>
                  </div>
                </Link>
                  ))}
            </div>
        </div>
    )
}