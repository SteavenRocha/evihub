import { Injectable, NotFoundException } from '@nestjs/common';
import { PaymentEvidence, Prisma, PrismaService, type User } from '@evihub/db';
import { OcrService } from '../ocr/ocr.service';
import { CreateEvidenceDto } from './dto/create-evidence.dto';
import { OcrResult } from '../ocr/interfaces/ocr-result.interface';
import { paginate } from '../common/helpers/paginator';
import { PaginatedResult } from '../common/interfaces/paginated.interface';
import { FilterEvidenceDto } from './dto/filter-evidence.dto';
import { type ValidMimeType } from '../common/constants/mime-types.constant';

@Injectable()
export class EvidencesService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly ocrService: OcrService,
  ) { }

  async scan(file: Express.Multer.File): Promise<OcrResult> {
    const ocrResult = await this.ocrService.extractFromImage(
      file.buffer,
      file.mimetype as ValidMimeType
    );
    return ocrResult;
  }

  async create(dto: CreateEvidenceDto, file: Express.Multer.File, user: User): Promise<PaymentEvidence> {
    const { paymentDate, paymentTime, ...rest } = dto;

    const fullDateTime = this.parseDate(paymentDate, paymentTime);
    const imageKey = file.filename

    return this.prismaService.paymentEvidence.create({
      data: {
        ...rest,
        paymentDate: fullDateTime,
        accountId: user.accountId,
        uploadedBy: user.id,
        imageKey,
      },
    });
  }

  async findAll(user: User, filterEvidenceDto: FilterEvidenceDto): Promise<PaginatedResult<PaymentEvidence>> {
    const {
      status, paymentMethod, currency,
      paymentDateFrom, paymentDateTo,
      createdDateFrom, createdDateTo
    } = filterEvidenceDto;

    const where: Prisma.PaymentEvidenceWhereInput = {
      accountId: user.accountId,
      deletedAt: null,
      ...(status && { status }),
      ...(currency && { currency }),
      ...(paymentMethod && { paymentMethod }),
      ...((paymentDateFrom || paymentDateTo) && {
        paymentDate: {
          ...(paymentDateFrom && { gte: new Date(paymentDateFrom) }),
          ...(paymentDateTo && {
            lte: new Date(new Date(paymentDateTo).setHours(23, 59, 59, 999))
          }),
        },
      }),
      ...((createdDateFrom || createdDateTo) && {
        createdAt: {
          ...(createdDateFrom && { gte: new Date(createdDateFrom) }),
          ...(createdDateTo && {
            lte: new Date(new Date(createdDateTo).setHours(23, 59, 59, 999))
          }),
        },
      }),
    }

    const result = await paginate<PaymentEvidence>(this.prismaService.paymentEvidence, filterEvidenceDto, {
      where,
      orderBy: { createdAt: 'desc' },
    });

    return result;
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

  /* OBTENER IMAGEN */
  async findByImageKey(imageKey: string, accountId: string) {
    return this.prismaService.paymentEvidence.findFirst({
      where: { imageKey, accountId, deletedAt: null },
      select: { id: true },
    })
  }

  private parseDate(dateStr: string, timeStr: string): Date {
    try {
      const [day, month, year] = dateStr.split('-').map(Number);

      const timeMatches = timeStr.match(/(\d+):(\d+)/);
      if (!timeMatches) return new Date(year, month - 1, day);

      let hours = parseInt(timeMatches[1]);
      const minutes = parseInt(timeMatches[2]);

      const isPM = timeStr.toLowerCase().includes('p');

      if (isPM && hours < 12) hours += 12;
      if (!isPM && hours === 12) hours = 0;

      return new Date(year, month - 1, day, hours, minutes, 0);
    } catch (error) {
      const parts = dateStr.split('-').map(Number);
      return new Date(parts[2], parts[1] - 1, parts[0]);
    }
  }
}