import  mongoose from 'mongoose';

const whatsAppMessageSchema = mongoose.Schema({
    name:String, 
    message:String, 
    timestamp:String,
    reciver:Boolean,
    sender:String
});

export default mongoose.model('message',whatsAppMessageSchema);
