import { v4 as uuid } from 'uuid'
import { MIME_TYPE_TO_EXT } from '../constants/mime-types.constant'

export function generateImageName(mimetype: string): string {
    const ext = MIME_TYPE_TO_EXT[mimetype] ?? 'jpg'
    return `${uuid()}.${ext}`
}