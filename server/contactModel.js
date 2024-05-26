// contactModel.js
import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    choice: { type: String, required: true },
    phone: { type: String, required: true },
    message: { type: String, required: true },
});

const User = mongoose.model("User", contactSchema);

export default User;
