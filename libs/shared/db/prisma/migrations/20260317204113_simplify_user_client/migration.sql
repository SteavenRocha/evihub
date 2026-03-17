/*
  Warnings:

  - You are about to drop the `UserClient` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `clientId` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "UserClient" DROP CONSTRAINT "UserClient_clientId_fkey";

-- DropForeignKey
ALTER TABLE "UserClient" DROP CONSTRAINT "UserClient_userId_fkey";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "clientId" TEXT NOT NULL,
ADD COLUMN     "role" "Role" NOT NULL DEFAULT 'VIEWER';

-- DropTable
DROP TABLE "UserClient";

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
