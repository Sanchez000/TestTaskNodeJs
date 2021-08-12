import { Express, Request, Response } from "express";
import { createUserHandler } from './controllers/users/user.controller';
import  validateRequest  from './middleware/validateRequest';
import { createUserSchema } from "./schema/user.schema";
import  upload  from './middleware/uploadPhoto';

export default function (app: Express) {
    app.post('/api/users',
            [
                upload,
                validateRequest(createUserSchema),
            ],
            createUserHandler);
}