/*
  Warnings:

  - Changed the type of `date` on the `Booking` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Booking" DROP COLUMN "date",
ADD COLUMN     "date" INTEGER NOT NULL;
