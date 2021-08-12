import { info, rescrop } from "easyimage";
import { extname, basename,join } from 'path';

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

        return resizedFileInfo.path;
    } catch (e) {
        throw new Error(e);
    }
}