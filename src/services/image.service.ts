import { rescrop } from "easyimage";
import { basename,join } from 'path';
import { unlink } from 'fs/promises';

export async function resizeImage(imagePath: string) {
    try {
        const fileName = basename(imagePath);

        const resizedFileInfo = await rescrop({
            src: imagePath,
            dst: join(__dirname, '..', '..','/public/uploads/resized_images', '200_200_' + fileName),
            cropWidth:200,
            width: 200,
            height: 200,
            gravity:"Center",
        });

        if(resizedFileInfo){
            await unlink(imagePath);
            console.log('successfully deleted origin fullsize file');
        }

        return resizedFileInfo.path;
    } catch (e) {
        throw new Error(e);
    }
}