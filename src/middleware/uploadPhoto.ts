import multer, { FileFilterCallback } from 'multer';
import { Request } from "express";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + "--" + file.originalname);
    }
});  

const filter = (req: Request, file: Express.Multer.File, cb: FileFilterCallback) => {
    if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
        return cb(new Error('Only image files are allowed!'));
    }

    cb(null, true);
};


let upload = multer({ storage: storage, fileFilter: filter,});

export default upload.single('photo')