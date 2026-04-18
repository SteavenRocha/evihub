import { v4 as uuid } from 'uuid'
import { MIME_TYPE_TO_EXT } from '../../common/constants/mime-types.constant'
import { BadRequestException } from '@nestjs/common'

export const fileNamer = (
    req: Express.Request,
    file: Express.Multer.File,
    callback: Function,
) => {
    if (!file) return callback(new BadRequestException('No file provided'), false)

    const fileExtension = MIME_TYPE_TO_EXT[file.mimetype] ?? 'jpg'
    const fileName = `${uuid()}.${fileExtension}`

    callback(null, fileName)
}