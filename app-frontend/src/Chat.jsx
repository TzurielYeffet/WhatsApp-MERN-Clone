import React , {useState,useEffect} from 'react'
import "./Chat.css";
import{Avatar,IconButton} from "@mui/material";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AttachFileOutlinedIcon from "@mui/icons-material/AttachFileOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SentimentVerySatisfiedOutlinedIcon from '@mui/icons-material/SentimentVerySatisfiedOutlined';
import MicNoneOutlinedIcon from '@mui/icons-material/MicNoneOutlined';
import axios from './axios';
import {useParams} from 'react-router-dom';


export default function Chat(props) {
    const [input,setInput] = useState("");
    const [senderName,setSenderName] = useState("");
    const {chatId} = useParams();


    useEffect(()=>{
        if(chatId){
            axios.get('/messages/sync/'+chatId).then((response)=>{
                setSenderName(response.data.username);
            });
        }
    },[chatId]);

    




    async function sendMessage(event) {
        event.preventDefault();
        await axios.post("/messages/new", {
            message: input,
            name: senderName,
            timestamp: new Date().toDateString(),
            reciver: true,
            sender: chatId.toString()
        });
        setInput('');
    };



    return (
        <div className="chat">
            <div className="chat_header">
                <Avatar />
            <div className="chat_headerInfo">
                <h3>{senderName}</h3>
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
            {props.messages.map((message) => ( 
                <p className={`chat_message ${message.reciver && "chat_reciver"}`}>
                    <span className="chat_name">{message.name}</span>
                        {message.message}
                            <span className="chat_timestamp">
                        {message.timestamp};
                    </span>
                </p>
            ))}

            </div>
                <div className="chat_footer">
                <IconButton>
                    <SentimentVerySatisfiedOutlinedIcon />
                </IconButton>
                <form>
                    <input value = {input} type="text"
                     onChange={(e)=> setInput(e.target.value)}
                    placeholder="Type a message"
                    /> 
                    <button  onClick={sendMessage}
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
