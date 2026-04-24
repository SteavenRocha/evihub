import { BadRequestException } from '@nestjs/common'
import { generateImageName } from '../../common/utils/generate-image-name.util'

export const fileNamer = (
    req: Express.Request,
    file: Express.Multer.File,
    callback: Function,
) => {
    if (!file) return callback(new BadRequestException('No file provided'), false)

    callback(null, generateImageName(file.mimetype))
}