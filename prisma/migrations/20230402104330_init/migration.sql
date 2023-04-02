-- CreateTable
CREATE TABLE "User" (
    "id" VARCHAR(36) NOT NULL,
    "name" VARCHAR(36) NOT NULL DEFAULT '',
    "email" VARCHAR(36) NOT NULL DEFAULT '',
    "age" INTEGER NOT NULL DEFAULT 18,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);
