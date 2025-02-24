-- DropForeignKey
ALTER TABLE "Screen" DROP CONSTRAINT "Screen_venueId_fkey";

-- DropForeignKey
ALTER TABLE "Show" DROP CONSTRAINT "Show_screenId_fkey";

-- AddForeignKey
ALTER TABLE "Screen" ADD CONSTRAINT "Screen_venueId_fkey" FOREIGN KEY ("venueId") REFERENCES "Venue"("venueId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Show" ADD CONSTRAINT "Show_screenId_fkey" FOREIGN KEY ("screenId") REFERENCES "Screen"("screenId") ON DELETE CASCADE ON UPDATE CASCADE;
