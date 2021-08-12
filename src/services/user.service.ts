import UserModel, { UserDto } from "../models/user.model";
import { resizeImage } from "./image.service";

export async function createUser(body: UserDto) {
    try {
        const resizedImagePath = await resizeImage(body.photo);

        body.photo = resizedImagePath;
        //TODO fix email uniq validation error throw to client side
        // MongoError: E11000 duplicate key error collection: blabla.users index: email_1 dup key: { email: "asas22221sss1@mail.com"
// }
        //Unlink old(fullsize) image

        return await UserModel.create(body)
    } catch (error) {
        throw new Error(error)
    }
}