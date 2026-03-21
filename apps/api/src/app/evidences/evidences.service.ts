import { Injectable, NotFoundException } from '@nestjs/common';
import { PaymentEvidence, PrismaService, type User } from '@evihub/db';
import { OcrService } from '../ocr/ocr.service';
import { CreateEvidenceDto } from './dto/create-evidence.dto';
import { OcrResult } from '../ocr/interfaces/ocr-result.interface';
import { readFileSync } from 'fs';

@Injectable()
export class EvidencesService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly ocrService: OcrService,
  ) { }

  async scan(file: Express.Multer.File): Promise<OcrResult & { imageUrl: string }> {
    const imageBuffer = readFileSync(file.path);
    const ocrResult = await this.ocrService.extractFromImage(imageBuffer);
    const imageUrl = `/uploads/${file.filename}`;
    return { ...ocrResult, imageUrl };
  }

  async create(dto: CreateEvidenceDto, user: User): Promise<PaymentEvidence> {
    return this.prismaService.paymentEvidence.create({
      data: {
        accountId: user.accountId,
        uploadedBy: user.id,
        amount: dto.amount,
        currency: dto.currency,
        paymentDate: new Date(dto.paymentDate),
        bank: dto.bank,
        reference: dto.reference,
        imageUrl: dto.imageUrl,
        ocrRaw: dto.ocrRaw,
      },
    });
  }

  async findAll(user: User): Promise<PaymentEvidence[]> {
    return this.prismaService.paymentEvidence.findMany({
      where: {
        accountId: user.accountId,
        deletedAt: null,
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  async findById(id: string, user: User): Promise<PaymentEvidence> {
    const evidence = await this.prismaService.paymentEvidence.findUnique({
      where: { id, accountId: user.accountId, deletedAt: null },
    });

    if (!evidence) {
      throw new NotFoundException(`Evidence ${id} not found`);
    }

    return evidence;
  }

  async softDelete(id: string, user: User): Promise<PaymentEvidence> {
    await this.findById(id, user);

    return this.prismaService.paymentEvidence.update({
      where: { id },
      data: { deletedAt: new Date() },
    });
  }
}