/*
  Warnings:

  - Changed the type of `closingTime` on the `Screen` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `openingTime` on the `Screen` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Screen" DROP COLUMN "closingTime",
ADD COLUMN     "closingTime" INTEGER NOT NULL,
DROP COLUMN "openingTime",
ADD COLUMN     "openingTime" INTEGER NOT NULL;
