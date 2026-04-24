-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'VIEWER');

-- CreateEnum
CREATE TYPE "PaymentMethod" AS ENUM ('BCP', 'YAPE', 'PLIN');

-- CreateEnum
CREATE TYPE "Currency" AS ENUM ('PEN', 'USD');

-- CreateEnum
CREATE TYPE "EvidenceStatus" AS ENUM ('AUTO_VERIFIED', 'MANUAL_REVIEW', 'REJECTED');

-- CreateTable
CREATE TABLE "accounts" (
    "id" TEXT NOT NULL,
    "customer_id" TEXT NOT NULL,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "accounts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "account_id" TEXT NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "refresh_token" TEXT,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "role" "Role" NOT NULL DEFAULT 'VIEWER',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "payment_evidences" (
    "id" TEXT NOT NULL,
    "account_id" TEXT NOT NULL,
    "uploaded_by" TEXT NOT NULL,
    "amount" DECIMAL(10,2) NOT NULL,
    "currency" "Currency" NOT NULL,
    "payment_date" TIMESTAMP(3) NOT NULL,
    "payment_method" "PaymentMethod" NOT NULL,
    "transaction_number" TEXT NOT NULL,
    "recipient" TEXT,
    "is_legible" BOOLEAN NOT NULL DEFAULT true,
    "image_key" TEXT,
    "ocr_raw" TEXT,
    "status" "EvidenceStatus" NOT NULL DEFAULT 'AUTO_VERIFIED',
    "description" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "payment_evidences_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "accounts_customer_id_key" ON "accounts"("customer_id");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_account_id_fkey" FOREIGN KEY ("account_id") REFERENCES "accounts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "payment_evidences" ADD CONSTRAINT "payment_evidences_account_id_fkey" FOREIGN KEY ("account_id") REFERENCES "accounts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "payment_evidences" ADD CONSTRAINT "payment_evidences_uploaded_by_fkey" FOREIGN KEY ("uploaded_by") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
