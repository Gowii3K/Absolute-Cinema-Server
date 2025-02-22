/*
  Warnings:

  - You are about to drop the column `name` on the `Venue` table. All the data in the column will be lost.
  - Added the required column `lat` to the `Venue` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lng` to the `Venue` table without a default value. This is not possible if the table is not empty.
  - Added the required column `location` to the `Venue` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Venue" DROP COLUMN "name",
ADD COLUMN     "lat" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "lng" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "location" TEXT NOT NULL;
