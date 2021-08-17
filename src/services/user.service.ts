import UserModel from "../models/user.model";
import { UserDto } from '../models/user.dto';
import { resizeImage } from "./image.service";
import UserNotFoundException from '../exceptions/user-not-found.exceptions';
import { unlink } from 'fs/promises';

export async function createUser(body: UserDto) {  
    const resizedImagePath = await resizeImage(body.photo);
    
    try {
        body.photo = resizedImagePath;
        return await UserModel.create(body)
    } catch (error) {
        await unlink(resizedImagePath);
        throw new Error(error)
    }
}

export async function findUserById(userId: string) {
    try {
        return await UserModel.findById(userId);
    } catch (e) {
        throw new UserNotFoundException(userId);
    }
}