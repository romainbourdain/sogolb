/*
  Warnings:

  - You are about to drop the column `date` on the `Event` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `Event` table. All the data in the column will be lost.
  - Added the required column `action` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `Event` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Event" DROP COLUMN "date",
DROP COLUMN "title",
ADD COLUMN     "action" TEXT NOT NULL,
ADD COLUMN     "type" TEXT NOT NULL;
