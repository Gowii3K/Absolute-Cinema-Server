/*
  Warnings:

  - Added the required column `closingTime` to the `Screen` table without a default value. This is not possible if the table is not empty.
  - Added the required column `openingTime` to the `Screen` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Screen" ADD COLUMN     "closingTime" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "openingTime" TIMESTAMP(3) NOT NULL;

-- CreateTable
CREATE TABLE "Booking" (
    "bookingId" SERIAL NOT NULL,
    "screenId" INTEGER NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "slot" INTEGER NOT NULL,

    CONSTRAINT "Booking_pkey" PRIMARY KEY ("bookingId")
);

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_screenId_fkey" FOREIGN KEY ("screenId") REFERENCES "Screen"("screenId") ON DELETE RESTRICT ON UPDATE CASCADE;
