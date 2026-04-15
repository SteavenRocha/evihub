-- AlterTable
ALTER TABLE "payment_evidences" ADD COLUMN     "is_legible" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "recipient" TEXT;
