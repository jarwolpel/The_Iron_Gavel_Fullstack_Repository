// import { Term } from "@prisma/client";
import { Characters } from "@prisma/client"
import { Battles } from "@prisma/client"

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

export const BattleSeedData: Omit<Battles, 'id'>[] = [
{
    name: 'Da Best Battle',
    description: 'WOW THEY CRAZY',
    characters: ["Thomas Edison","Master Chief"],
},
{
    name: 'Da Best Battle 2',
    description: 'WOW THEY CRAZY AGAIN',
    characters: ["Thomas Edison","Nikola Tesla"],
},
{
    name: 'Da Best Battle 3',
    description: 'WOW THEY CRAZY STILL',
    characters: ["Genghis Kahn","Nikola Tesla"],
},

]