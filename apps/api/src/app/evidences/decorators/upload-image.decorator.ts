// common/decorators/upload-image.decorator.ts
import { UseInterceptors, applyDecorators } from '@nestjs/common'
import { FileInterceptor } from '@nestjs/platform-express'
import { diskStorage, memoryStorage } from 'multer'
import { UPLOADS_DIR } from '../../common/constants/paths.constants'
import { fileFilter } from '../helpers/file-filter.helper'
import { fileNamer } from '../helpers/file-namer.helper'

interface UploadImageOptions {
    storage?: 'disk' | 'memory'
    fieldName?: string
    maxSizeMb?: number
}

export function UploadImage({
    storage = 'disk',
    fieldName = 'image',
    maxSizeMb = 10,
}: UploadImageOptions = {}) {
    return applyDecorators(
        UseInterceptors(
            FileInterceptor(fieldName, {
                storage: storage === 'disk'
                    ? diskStorage({ destination: UPLOADS_DIR, filename: fileNamer })
                    : memoryStorage(),
                fileFilter,
                limits: { fileSize: maxSizeMb * 1024 * 1024 },
            })
        )
    )
}