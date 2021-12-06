
import Sidebar from './Sidebar';
import Chat from './Chat';
import Pusher from 'pusher-js'; 
import { useEffect ,useState } from 'react';
import {BrowserRouter as Router,Routes,Route,useParams} from 'react-router-dom';
import Login from './Login';
// import {Switch} from 'react-router';

import './App.css';
import axios from './axios';

function App() {
  const [messages,setMessages]=useState([]);
  const [users,setUsers] = useState([]);
  const [login,setLogins]=useState(null);
  useEffect(()=>{
    axios.get('/messages/sync').then(response =>{

      setMessages(response.data);
    })

    axios.get('/users/sync').then(response =>{
      setUsers(response.data);
    })

  },[]);

   
useEffect(() => {
  Pusher.logToConsole = true;

  const pusher = new Pusher('8a794fbc6866fb616c4c', {
    cluster: 'ap2'
  });

  const channel = pusher.subscribe('messages');
  channel.bind('inserted', (newMessages   )=> {
    setMessages([...messages,newMessages]);
  });

   return  ()=> {
      channel.unbind_all();
      channel.unsubscribe();
    };

}, [messages]);

// console.log(messages);
  return (
    <div className="app">
    {!login ? (
        <Login />
    ):(
      <div className="app_body">
      <Router>
        <Sidebar  users={users} key ={users._id}/>
        <Routes>
          <Route  path="/chat/:chatId" element={ 
            <Chat messages={messages} />}>
          </Route >
          <Route  exact path="/" element={
            <h1> Home Page</h1>}/>      
        </Routes>
      </Router>
      </div>
      )}
    </div>
  );
}

export default App;
