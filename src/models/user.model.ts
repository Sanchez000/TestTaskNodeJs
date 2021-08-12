import mongoose from 'mongoose';

export interface UserDto {
    first_name: string;
    last_name: string;
    email: string;
    photo: string;
  }

const Schema = mongoose.Schema;

export const UserSchema = new Schema<UserDto>({
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

const UserModel = mongoose.model<UserDto>('User', UserSchema);

export default UserModel;
