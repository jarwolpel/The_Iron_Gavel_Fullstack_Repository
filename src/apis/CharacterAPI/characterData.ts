import khan from "../characterImages/Genghis_Khan.jpeg";
import nikola from "../characterImages/Nikola-Tesla.jpg";
import thomas from "../characterImages/Thomas_Edison.jpg";
import chief from "../characterImages/Master-Chief.jpeg";
import healthIcon from "../../assets/icons/health.png";
import shieldIcon from "../../assets/icons/shield.png";
import swordIcon from "../../assets/icons/sword.png";
import type { Character } from "../../types/character";

export const characters: Character[] = [
    {   
        id: "Character-1",
        name: "Nikola Tesla",
        health: 100,
        damage: 30,
        armor: 15,
        image: nikola, 
        healthimg: healthIcon,
        shieldimg: shieldIcon,
        swordimg: swordIcon,
    },
    {   
        id: "Character-2",
        name: "Thomas Edison",
        health: 100,
        damage: 65,
        armor: 50,
        image: thomas,
        healthimg: healthIcon,
        shieldimg: shieldIcon,
        swordimg: swordIcon,
    },
    {   
        id: "Character-3",
        name: "Genghis Khan",
        health: 100,
        damage: 75,
        armor: 30,
        image: khan,
        healthimg: healthIcon,
        shieldimg: shieldIcon,
        swordimg: swordIcon,
    },
    {   
        id: "Character-4",
        name: "Master Chief",
        health: 9000,
        damage: 500,
        armor: 7500,
        image: chief,
        healthimg: healthIcon,
        shieldimg: shieldIcon,
        swordimg: swordIcon,
    }
];
