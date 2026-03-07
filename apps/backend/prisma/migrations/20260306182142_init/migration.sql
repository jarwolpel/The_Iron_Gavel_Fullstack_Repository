-- CreateTable
CREATE TABLE "Characters" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "health" TEXT NOT NULL,
    "damage" TEXT NOT NULL,
    "armor" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "healthimg" TEXT NOT NULL,
    "shieldimg" TEXT NOT NULL,
    "swordimg" TEXT NOT NULL,
    "isFavourite" BOOLEAN NOT NULL,

    CONSTRAINT "Characters_pkey" PRIMARY KEY ("id")
);
