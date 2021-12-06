//imports

import  express from 'express';
import  mongoose from 'mongoose';
import Pusher from 'pusher';
import Messages from './dbMessages.js';
import Users from './dbUsers.js';

//app config
const app = express();
const port = process.env.PORT || 3001;

const pusher = new Pusher({
    appId: "1290767",
    key: "8a794fbc6866fb616c4c",
    secret: "83f491e8a8eea3a3353f",
    cluster: "ap2",
    useTLS: true
  });

//middleware
    app.use(express.json());
    app.use((req,res,next)=>{
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader("Access-Control-Allow-HEaders","*");
        next();
    });
//DB config
const connectionURL="mongodb+srv://Admin:WhatsappClone@cluster0.bhsee.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
    mongoose.connect(connectionURL,{
        // useCreateIndex:true,
        useNewUrlParser:true,
        useUnifiedTopology:true
    });

    const db = mongoose.connection;
    db.once("open",()=>{
        console.log("DB is connected");

        const msgCollection = db.collection("messages");
        const changeStream = msgCollection.watch();
        changeStream.on('change',(change)=>{
            console.log(change);

            if(change.operationType === "insert"){
                const message = change.fullDocument;
                pusher.trigger("messages","inserted",
                {
                    name:message.name,
                    message:message.message,
                    timestamp:message.timestamp,
                    reciver:message.reciver
                }
                );
            }else{
                console.log("Error triggering pusher");
            }
        });
    });


//????

//API routes
app.param('userID', function(req, res, next, userID) {
    const modified = userID;
  console.log("userID >>>>"+userID);
    req.userID = modified;
    next();
  });

app.get('/',(req,res)=>{
    res.send("Hello World");
})
app.get('/messages/sync',(req,res)=>{
    Messages.find((err,data)=>{
        if(err){
            res.status(500).send(err);
            }else{
                res.status(200).send(data);    
            }        
    })
});


app.get('/messages/sync/:userID',(req,res)=>{
    const userID = req.userID;
    console.log("userID2 >>>"+userID);
    Users.findById(userID,(err,data)=>{
        if(err){
            res.status(500).send(err);
        }else{
            res.send(data);
            // console.log("DATA >>>>>"+ data);
        }
    })

});

app.post("/messages/new",(req,res)=>{
    const dbMessage = req.body;
    Messages.create(dbMessage,(err,data)=>{
        if(err){
            res.status(500).send(err);
        }else{
            res.status(201).send("new message created: \n" +  `${data}`);
        }
    })
})

app.get('/users/sync',(req,res)=>{
    
    Users.find((err,data)=>{
        if(err){
            res.status(500).send(err);
        }else{
            res.status(200).send(data);
            console.log(data);
        }
    })
})



//listener
app.listen(port,()=>{

    console.log("Server is runnig on port " + `${port}`);
})