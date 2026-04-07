// import { Term } from "@prisma/client";
import { Characters } from "@prisma/client"
import { Battles } from "@prisma/client"


import { Credentials } from "@prisma/client";

export const characterSeedData: Omit<Characters, 'id'>[] = [
{
    name: 'Master Chief',
    health: '9000',
    damage: "500",
    armor: "7500",
    image: "./src/apis/characterImages/Master-Chief.jpeg",
    healthimg: "",
    shieldimg: "",
    swordimg: "",
    isFavourite: false,
},
{
    name: 'Nikola Tesla',
    health: '100',
    damage: "30",
    armor: "15",
    image: "./src/apis/characterImages/Nikola-Tesla.jpg",
    healthimg: "",
    shieldimg: "",
    swordimg: "",
    isFavourite: false,
},
{
    name: 'Thomas Edison',
    health: '100',
    damage: "65",
    armor: "50",
    image: "./src/apis/characterImages/Thomas_Edison.jpg",
    healthimg: "",
    shieldimg: "",
    swordimg: "",
    isFavourite: false,
},
{
    name: 'Genghis Khan',
    health: '100',
    damage: "75",
    armor: "30",
    image: "./src/apis/characterImages/Genghis_Khan.jpeg",
    healthimg: "",
    shieldimg: "",
    swordimg: "",
    isFavourite: false,
},
{
    name: 'Link Link',
    health: '150',
    damage: "65",
    armor: "50",
    image: "./src/apis/characterImages/link_the_legend_of_zelda.jpg",
    healthimg: "",
    shieldimg: "",
    swordimg: "",
    isFavourite: false,
},
{
    name: 'Abraham Lincoln',
    health: '75',
    damage: "50",
    armor: "20",
    image: "./src/apis/characterImages/Abraham_Lincoln.jpg",
    healthimg: "",
    shieldimg: "",
    swordimg: "",
    isFavourite: false,
},
{
    name: 'Jack Churchill',
    health: '200',
    damage: "85",
    armor: "40",
    image: "./src/apis/characterImages/Lt_Col_Jack_Churchill.tif.jpg",
    healthimg: "",
    shieldimg: "",
    swordimg: "",
    isFavourite: false,
},
{
    name: 'Doom Guy',
    health: '4000',
    damage: "1000",
    armor: "3000",
    image: "./src/apis/characterImages/Doomguy-Character-paint-by-number.jpg",
    healthimg: "",
    shieldimg: "",
    swordimg: "",
    isFavourite: false,
},
{
    name: 'Leonidas',
    health: '150',
    damage: "110",
    armor: "20",
    image: "./src/apis/characterImages/leonidas.jpg",
    healthimg: "",
    shieldimg: "",
    swordimg: "",
    isFavourite: false,
},
{
    name: 'Madame Curie',
    health: '50',
    damage: "200",
    armor: "10",
    image: "./src/apis/characterImages/marie-curie.png",
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