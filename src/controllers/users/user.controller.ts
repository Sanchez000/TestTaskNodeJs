import { Request, Response } from "express";
import  User  from '../../models/user.model';

export async function createUserHandler(req: Request, res: Response) {
    try {
        const user = new User(req.body);
        await user.save();
        res.status(200).send(user);
    } catch (error) {
        if (error.name === "ValidationError") {
            Object.keys(error.errors).map((key, index) => {
                error.errors[key] = error.errors[key].message;
            });

            return res.status(400).send({
                errors: error.errors
            });
        }        
        res.status(500).send(error);
    }    
}
