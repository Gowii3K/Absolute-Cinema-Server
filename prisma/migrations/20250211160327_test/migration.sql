/*
  Warnings:

  - A unique constraint covering the columns `[date,startingTime]` on the table `Booking` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `startingTime` to the `Booking` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Booking_date_slot_key";

-- AlterTable
ALTER TABLE "Booking" ADD COLUMN     "startingTime" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Booking_date_startingTime_key" ON "Booking"("date", "startingTime");
