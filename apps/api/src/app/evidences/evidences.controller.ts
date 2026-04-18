import { Body, Controller, Delete, Get, NotFoundException, Param, ParseUUIDPipe, Post, Query, Res, UploadedFile, UseInterceptors } from '@nestjs/common';
import { EvidencesService } from './evidences.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname, join } from 'path';
import { CreateEvidenceDto } from './dto/create-evidence.dto';
import { CurrentUser } from '../auth/decorators/current-user.decorator';
import { PaymentEvidence, Role, type User } from '@evihub/db';
import { Roles } from '../auth/decorators/roles.decorator';
import { PaginatedResult } from '../common/interfaces/paginated.interface';
import { FilterEvidenceDto } from './dto/filter-evidence.dto';
import type { Response } from 'express'
import { EXT_TO_MIME_TYPE } from '../common/constants/mime-types.constant'
import { UPLOADS_DIR } from '../common/constants/paths.constants';
import { createReadStream, existsSync } from 'fs';

@Controller('evidences')
export class EvidencesController {
  constructor(
    private evidencesService: EvidencesService
  ) { }

  @Post('scan')
  @UseInterceptors(FileInterceptor('image', {
    storage: diskStorage({
      destination: './uploads',
      filename: (req, file, cb) => {
        const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
        cb(null, `${uniqueSuffix}${extname(file.originalname)}`);
      },
    }),
    fileFilter: (req, file, cb) => {
      if (!file.mimetype.match(/\/(jpg|jpeg|png|webp)$/)) {
        cb(new Error('Only image files are allowed'), false);
      } else {
        cb(null, true);
      }
    },
    limits: { fileSize: 10 * 1024 * 1024 },
  }))
  scan(
    @UploadedFile() file: Express.Multer.File,
  ) {
    return this.evidencesService.scan(file);
  }

  @Post()
  create(
    @Body() dto: CreateEvidenceDto,
    @CurrentUser() user: User,
  ): Promise<PaymentEvidence> {
    return this.evidencesService.create(dto, user);
  }

  @Get()
  findAll(
    @CurrentUser() user: User,
    @Query() filterEvidenceDto: FilterEvidenceDto
  ): Promise<PaginatedResult<PaymentEvidence>> {
    return this.evidencesService.findAll(user, filterEvidenceDto);
  }

  @Get(':id')
  findById(
    @Param('id', ParseUUIDPipe) id: string,
    @CurrentUser() user: User,
  ): Promise<PaymentEvidence> {
    return this.evidencesService.findById(id, user);
  }

  @Delete(':id')
  @Roles(Role.ADMIN)
  softDelete(
    @Param('id', ParseUUIDPipe) id: string,
    @CurrentUser() user: User,
  ): Promise<PaymentEvidence> {
    return this.evidencesService.softDelete(id, user);
  }

  /* OBTENER IMAGEN */
  @Get('images/:key')
  async getImage(
    @Param('key') key: string,
    @CurrentUser() user: User,
    @Res() res: Response,
  ) {
    const evidence = await this.evidencesService.findByImageKey(key, user.accountId)
    if (!evidence) throw new NotFoundException('Image not found')

    const filePath = join(UPLOADS_DIR, key)
    if (!existsSync(filePath)) throw new NotFoundException('File not found')

    const ext = key.split('.').pop()?.toLowerCase() ?? ''
    const contentType = EXT_TO_MIME_TYPE[ext] ?? 'application/octet-stream'

    res.setHeader('Content-Type', contentType)
    res.setHeader('Cache-Control', 'private, max-age=3600')

    createReadStream(filePath).pipe(res)
  }
}
