import {model, Schema,Types } from "mongoose";

const userSchema = new Schema({
    id :{ type: Types.ObjectId },
    username: {type : String, unique: true},
    phoneNumber: {type : String, unique: true, nullable : true},
    address: {type :String , nullable: true}
});

export default model('User',userSchema)