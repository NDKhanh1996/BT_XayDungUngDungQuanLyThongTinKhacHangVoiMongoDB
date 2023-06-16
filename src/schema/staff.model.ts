import { Schema, model } from "mongoose";

const staffSchema = new Schema({
    name: String,
    age: String
});

export const staff = model('Staff', staffSchema);

export default staff;