import { Express, Request, Response } from "express";
import { createUserHandler } from './controllers/users/user.controller';

export default function (app: Express) {
    app.post('/users', createUserHandler);
}