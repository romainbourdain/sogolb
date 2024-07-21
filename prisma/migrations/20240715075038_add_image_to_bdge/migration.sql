/*
  Warnings:

  - Added the required column `image` to the `Badge` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Badge" ADD COLUMN     "image" TEXT NOT NULL;
