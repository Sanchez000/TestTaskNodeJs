import { Request, Response } from "express";
import { createUser, findUserById } from "../../services/user.service";

export async function createUserHandler(req: Request, res: Response) {
    try {
        req.body.photo = req.file?.path;
        const user = await createUser(req.body);
        return res.status(200).send(user);
    } catch (error) {      
        res.status(409).send(error.message);
    }    
}

export async function getUserHandler(req: Request, res: Response) {
    try {
        const user = await findUserById(req.params.id);
        return res.status(200).send(user);
    } catch (error) {
        res.status(409).send(error.message);
    }
}
