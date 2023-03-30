/*
  Warnings:

  - You are about to drop the column `updatedAt` on the `employee` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_employee" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "departament" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "manager" BOOLEAN,
    "createdAt" DATETIME NOT NULL
);
INSERT INTO "new_employee" ("createdAt", "departament", "email", "id", "manager", "name", "password") SELECT "createdAt", "departament", "email", "id", "manager", "name", "password" FROM "employee";
DROP TABLE "employee";
ALTER TABLE "new_employee" RENAME TO "employee";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
