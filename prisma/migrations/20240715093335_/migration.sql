/*
  Warnings:

  - You are about to drop the `_BadgeToUser` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_BadgeToUser" DROP CONSTRAINT "_BadgeToUser_A_fkey";

-- DropForeignKey
ALTER TABLE "_BadgeToUser" DROP CONSTRAINT "_BadgeToUser_B_fkey";

-- DropIndex
DROP INDEX "Badge_name_key";

-- DropTable
DROP TABLE "_BadgeToUser";

-- CreateTable
CREATE TABLE "_UserBadges" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_UserBadges_AB_unique" ON "_UserBadges"("A", "B");

-- CreateIndex
CREATE INDEX "_UserBadges_B_index" ON "_UserBadges"("B");

-- AddForeignKey
ALTER TABLE "_UserBadges" ADD CONSTRAINT "_UserBadges_A_fkey" FOREIGN KEY ("A") REFERENCES "Badge"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UserBadges" ADD CONSTRAINT "_UserBadges_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
