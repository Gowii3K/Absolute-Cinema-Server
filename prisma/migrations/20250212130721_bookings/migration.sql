/*
  Warnings:

  - You are about to drop the column `startingTime` on the `Booking` table. All the data in the column will be lost.
  - You are about to drop the column `closingTime` on the `Screen` table. All the data in the column will be lost.
  - You are about to drop the column `openingTime` on the `Screen` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[date,seatNo]` on the table `Booking` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `seatNo` to the `Booking` table without a default value. This is not possible if the table is not empty.
  - Added the required column `seats` to the `Screen` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Booking_date_startingTime_key";

-- AlterTable
ALTER TABLE "Booking" DROP COLUMN "startingTime",
ADD COLUMN     "seatNo" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Screen" DROP COLUMN "closingTime",
DROP COLUMN "openingTime",
ADD COLUMN     "seats" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Booking_date_seatNo_key" ON "Booking"("date", "seatNo");
