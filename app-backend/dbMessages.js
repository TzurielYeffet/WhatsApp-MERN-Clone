import  mongoose from 'mongoose';

const whatsAppSchema = mongoose.Schema({
    message:String, 
    name:String, 
    timestamp:String
});

export default mongoose.model('message',whatsAppSchema);
