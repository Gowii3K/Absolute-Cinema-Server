/*
  Warnings:

  - A unique constraint covering the columns `[date,time,screenId]` on the table `Show` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `time` to the `Show` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Show" ADD COLUMN     "time" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Show_date_time_screenId_key" ON "Show"("date", "time", "screenId");
