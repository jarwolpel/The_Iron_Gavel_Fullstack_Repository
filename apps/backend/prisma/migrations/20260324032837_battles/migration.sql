-- CreateTable
CREATE TABLE "Battles" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "characters" TEXT[],

    CONSTRAINT "Battles_pkey" PRIMARY KEY ("id")
);
