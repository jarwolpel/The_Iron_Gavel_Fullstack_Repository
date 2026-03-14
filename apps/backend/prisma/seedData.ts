// import { Term } from "@prisma/client";
import { Characters } from "@prisma/client";

import { Credentials } from "@prisma/client";

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

export const userCredentialsSeedData: Omit<Credentials, 'id'>[]= [
    {
        username:"JohnnyAppleseed",
        password:"1234ABCD",
        email: "johnny@apples.com"
    },
    {
        username:"frank",
        password:"frankspassword",
        email:"frankiedabomd@gmail.com"
    },
    {
        username:"jared",
        password:"password",
        email:"jaredwpelletier@gmail.com"
    }
]