import mongoose from "mongoose";

const ThittamSchema = mongoose.Schema({
    date:{type:Date, required:true, unique:true}
}, { strict: false } )

const Thittam = mongoose.model('Thittam', ThittamSchema);

export default Thittam;