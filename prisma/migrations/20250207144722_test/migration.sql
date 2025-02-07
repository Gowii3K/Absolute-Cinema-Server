/*
  Warnings:

  - A unique constraint covering the columns `[date,slot]` on the table `Booking` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Booking_date_slot_key" ON "Booking"("date", "slot");
