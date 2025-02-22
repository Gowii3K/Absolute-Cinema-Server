/*
  Warnings:

  - You are about to drop the column `name` on the `Venue` table. All the data in the column will be lost.
  - Added the required column `username` to the `Venue` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Venue" DROP COLUMN "name",
ADD COLUMN     "username" TEXT NOT NULL;
