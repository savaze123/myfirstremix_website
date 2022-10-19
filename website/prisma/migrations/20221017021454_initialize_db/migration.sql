/*
  Warnings:

  - You are about to drop the column `updatedAt` on the `BookMark` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "User_username_key";

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_BookMark" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "url" TEXT NOT NULL DEFAULT '',
    "text" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    CONSTRAINT "BookMark_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_BookMark" ("createdAt", "id", "text", "url", "userId") SELECT "createdAt", "id", "text", "url", "userId" FROM "BookMark";
DROP TABLE "BookMark";
ALTER TABLE "new_BookMark" RENAME TO "BookMark";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
