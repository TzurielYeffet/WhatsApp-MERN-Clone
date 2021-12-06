import  mongoose from 'mongoose';

const whatsAppUsersSchema = mongoose.Schema({
    username:String,
    // messages:{
    //     type: Schema.Types.ObjectID,
    //     ref:'messages'
    // }
});
export default mongoose.model('user',whatsAppUsersSchema);