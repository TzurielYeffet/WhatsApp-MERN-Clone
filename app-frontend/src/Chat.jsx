import React from 'react'
import "./Chat.css";
import{Avatar,IconButton} from "@mui/material";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AttachFileOutlinedIcon from "@mui/icons-material/AttachFileOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SentimentVerySatisfiedOutlinedIcon from '@mui/icons-material/SentimentVerySatisfiedOutlined';
import MicNoneOutlinedIcon from '@mui/icons-material/MicNoneOutlined';

function setInput(){

}
function sendMessage(){}



export default function Chat() {
    return (
        <div className="chat">
            <div className="chat_header">
                <Avatar />
            <div className="chat_headerInfo">
                <h3>Room Name</h3>
                <p> last seen at...</p>
                </div>
                <div className="chat_headerRight">
                     <IconButton>
                        <SearchOutlinedIcon />
                    </IconButton>
                    <IconButton>
                        <AttachFileOutlinedIcon />
                    </IconButton>
                    <IconButton>
        
                        <MoreVertIcon />
                    </IconButton>
                    </div>
              
               
            </div>
            <div className="chat_body">
                <p className="chat_message">
                    <span className="chat_name">Tzuriel</span>
                    this is a message
                    <span className="chat_timestamp">
                        {new Date().toUTCString()};
                    </span>
                </p>
                <p className="chat_message chat_reciver">
                    <span className="chat_name">Tzuriel</span>
                    this is a message
                    <span className="chat_timestamp">
                        {new Date().toUTCString()};
                    </span>
                </p>

            </div>
                <div className="chat_footer">
                <IconButton>
                    <SentimentVerySatisfiedOutlinedIcon />
                </IconButton>
                <form>
                    <input type="text"
                     onChange={(e)=> setInput(e.target.value)}
                    placeholder="Type a message"
                    /> 
                    <button
                    onClick={sendMessage()}
                    type="submit">
                        send 
                    </button>
                </form>
                    <IconButton>
                        <MicNoneOutlinedIcon />
                    </IconButton>
                </div>

        </div>
    )
}
