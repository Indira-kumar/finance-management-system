import mongoose from "mongoose";

const headSchema = mongoose.Schema({
    head_name:{type:String, required: true}
})

const Head = mongoose.model('Head', headSchema);

export default Head;