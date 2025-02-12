/*
  Warnings:

  - You are about to drop the column `date` on the `Booking` table. All the data in the column will be lost.
  - You are about to drop the column `screenId` on the `Booking` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[showId,seatNo]` on the table `Booking` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `showId` to the `Booking` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Booking" DROP CONSTRAINT "Booking_screenId_fkey";

-- DropIndex
DROP INDEX "Booking_date_seatNo_key";

-- AlterTable
ALTER TABLE "Booking" DROP COLUMN "date",
DROP COLUMN "screenId",
ADD COLUMN     "showId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "Show" (
    "showId" SERIAL NOT NULL,
    "screenId" INTEGER NOT NULL,
    "date" TEXT NOT NULL,

    CONSTRAINT "Show_pkey" PRIMARY KEY ("showId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Booking_showId_seatNo_key" ON "Booking"("showId", "seatNo");

-- AddForeignKey
ALTER TABLE "Show" ADD CONSTRAINT "Show_screenId_fkey" FOREIGN KEY ("screenId") REFERENCES "Screen"("screenId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_showId_fkey" FOREIGN KEY ("showId") REFERENCES "Show"("showId") ON DELETE RESTRICT ON UPDATE CASCADE;
