//imports

import  express from 'express';
import  mongoose from 'mongoose';
import Messages from './dbMessages.js';

//app config
const app = express();
const port = process.env.PORT || 3001;

//middleware

//DB config
const connectionURL="mongodb+srv://Admin:WhatsappClone@cluster0.bhsee.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
    mongoose.connect(connectionURL,{
        // useCreateIndex:true,
        useNewUrlParser:true,
        useUnifiedTopology:true
    }, (err)=>{
        if (err) throw err;
        console.log("Successfully conncted to DB");
    } );
//????

//API routes
app.get('/',(req,res)=>{
    res.send("Hello World");
})

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


//listener
app.listen(port,()=>{

    console.log("Server is runnig on port " + `${port}`);
})