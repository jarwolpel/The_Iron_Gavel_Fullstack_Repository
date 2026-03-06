// import { Term } from "@prisma/client";
import { Characters } from "@prisma/client"

export const characterSeedData: Omit<Characters, 'id'>[] = [
{
    name: 'Master Chief',
    health: '600',
    damage: "75",
    armor: "200",
    image: "",
    healthimg: "",
    shieldimg: "",
    swordimg: "",
    isFavourite: false,
},
{
    name: 'Nikola Tesla',
    health: '600',
    damage: "75",
    armor: "200",
    image: "",
    healthimg: "",
    shieldimg: "",
    swordimg: "",
    isFavourite: false,
},
{
    name: 'Thomas Edison',
    health: '600',
    damage: "75",
    armor: "200",
    image: "",
    healthimg: "",
    shieldimg: "",
    swordimg: "",
    isFavourite: false,
},
]