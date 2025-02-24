-- DropForeignKey
ALTER TABLE "Booking" DROP CONSTRAINT "Booking_showId_fkey";

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_showId_fkey" FOREIGN KEY ("showId") REFERENCES "Show"("showId") ON DELETE CASCADE ON UPDATE CASCADE;
