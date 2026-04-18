import { BadRequestException } from '@nestjs/common'
import { VALID_MIME_TYPES } from '../../common/constants/mime-types.constant'

export const fileFilter = (
    req: Express.Request,
    file: Express.Multer.File,
    callback: Function,
) => {
    if (!file) return callback(new BadRequestException('No file provided'), false)

    if (VALID_MIME_TYPES.includes(file.mimetype as any)) {
        return callback(null, true)
    }

    callback(new BadRequestException(`Not allowed format. Use: ${VALID_MIME_TYPES.join(', ')}`), false)
}