-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserBattle" (
    "userId" TEXT NOT NULL,
    "battleId" INTEGER NOT NULL,

    CONSTRAINT "UserBattle_pkey" PRIMARY KEY ("userId","battleId")
);

-- AddForeignKey
ALTER TABLE "UserBattle" ADD CONSTRAINT "UserBattle_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserBattle" ADD CONSTRAINT "UserBattle_battleId_fkey" FOREIGN KEY ("battleId") REFERENCES "Battles"("id") ON DELETE CASCADE ON UPDATE CASCADE;
