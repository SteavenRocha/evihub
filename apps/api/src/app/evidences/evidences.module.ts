import { Module } from '@nestjs/common';
import { EvidencesService } from './evidences.service';
import { EvidencesController } from './evidences.controller';
import { OcrModule } from '../ocr/ocr.module';

@Module({
  controllers: [EvidencesController],
  providers: [EvidencesService],
  imports: [OcrModule],
})
export class EvidencesModule { }
