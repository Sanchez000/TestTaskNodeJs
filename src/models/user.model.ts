import mongoose from 'mongoose';
import mongooseUniqueValidator from 'mongoose-unique-validator';

const Schema = mongoose.Schema;

export const UserSchema = new Schema({
    first_name: {
        type: String,
        required: true,
    },
    last_name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        match: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        index: {
            unique: true,
            sparse: true
        }
    },
    photo: {
        type: String,
        required: true,
    }
},
{   timestamps: true });

UserSchema.plugin(mongooseUniqueValidator, { message: 'Error, expected {PATH} to be unique.' });

const UserModel = mongoose.model('User', UserSchema);

export default UserModel;
