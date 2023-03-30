-- CreateTable
CREATE TABLE "employee" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "departament" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "manager" BOOLEAN,
    "createdAt" DATETIME NOT NULL,
    "updatedAt" DATETIME NOT NULL
);
