/*
  Warnings:

  - You are about to drop the column `erp_customer_id` on the `accounts` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[customer_id]` on the table `accounts` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `customer_id` to the `accounts` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "accounts_erp_customer_id_key";

-- AlterTable
ALTER TABLE "accounts" DROP COLUMN "erp_customer_id",
ADD COLUMN     "customer_id" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "accounts_customer_id_key" ON "accounts"("customer_id");
