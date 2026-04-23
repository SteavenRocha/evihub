/*
  Warnings:

  - Changed the type of `currency` on the `payment_evidences` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "Currency" AS ENUM ('PEN', 'USD');

-- AlterTable
ALTER TABLE "payment_evidences" DROP COLUMN "currency",
ADD COLUMN     "currency" "Currency" NOT NULL;
