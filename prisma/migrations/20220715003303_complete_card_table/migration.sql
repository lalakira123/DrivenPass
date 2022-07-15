/*
  Warnings:

  - Added the required column `cardNumber` to the `cards` table without a default value. This is not possible if the table is not empty.
  - Added the required column `expirateDate` to the `cards` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isVirtual` to the `cards` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `cards` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `cards` table without a default value. This is not possible if the table is not empty.
  - Added the required column `securityCode` to the `cards` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `cards` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "cards" ADD COLUMN     "cardNumber" TEXT NOT NULL,
ADD COLUMN     "expirateDate" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "isVirtual" BOOLEAN NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "password" TEXT NOT NULL,
ADD COLUMN     "securityCode" TEXT NOT NULL,
ADD COLUMN     "type" TEXT NOT NULL;
