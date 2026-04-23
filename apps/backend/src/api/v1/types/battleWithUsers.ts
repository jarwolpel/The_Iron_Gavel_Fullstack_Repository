import { Prisma } from "@prisma/client";
// this creates a Type that extends the existing Term type by allowing
// the inclusion of UserTerms
// see https://www.prisma.io/docs/orm/prisma-client/type-safety/operating-against-partial-structures-of-model-types

const battleWithUsers = Prisma.validator<Prisma.UserDefaultArgs>()({
    include: { userBattles: true}
});

export type BattleWithUsers = Prisma.BattlesGetPayload<typeof battleWithUsers>;