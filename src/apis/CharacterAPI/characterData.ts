import khan from "../characterImages/Genghis_Khan.jpeg";
import nikola from "../characterImages/Nikola-Tesla.jpg";
import thomas from "../characterImages/Thomas_Edison.jpg";
import chief from "../characterImages/Master-Chief.jpeg";
import link from "../characterImages/link_the_legend_of_zelda.jpg"
import abe from "../characterImages/Abraham_Lincoln.jpg"
import jack from "../characterImages/Lt_Col_Jack_Churchill.tif.jpg"
import doom from "../characterImages/Doomguy-Character-paint-by-number.jpg"
import leo from "../characterImages/leonidas.jpg"
import curie from "../characterImages/marie-curie.png"
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
    },
    {   
        id: "Character-5",
        name: "Link Link",
        health: 150,
        damage: 65,
        armor: 50,
        image: link,
        healthimg: healthIcon,
        shieldimg: shieldIcon,
        swordimg: swordIcon,
    },
    {   
        id: "Character-6",
        name: "Abraham Lincoln",
        health: 75,
        damage: 50,
        armor: 20,
        image: abe,
        healthimg: healthIcon,
        shieldimg: shieldIcon,
        swordimg: swordIcon,
    },
    {   
        id: "Character-7",
        name: "Jack Churchill",
        health: 200,
        damage: 85,
        armor: 40,
        image: jack,
        healthimg: healthIcon,
        shieldimg: shieldIcon,
        swordimg: swordIcon,
    },
    {   
        id: "Character-8",
        name: "Doom Guy",
        health: 4000,
        damage: 1000,
        armor: 3000,
        image: doom,
        healthimg: healthIcon,
        shieldimg: shieldIcon,
        swordimg: swordIcon,
    },
    {   
        id: "Character-9",
        name: "Leonidas",
        health: 150,
        damage: 110,
        armor: 20,
        image: leo,
        healthimg: healthIcon,
        shieldimg: shieldIcon,
        swordimg: swordIcon,
    },
    {   
        id: "Character-10",
        name: "Madame Curie",
        health: 50,
        damage: 200,
        armor: 10,
        image: curie,
        healthimg: healthIcon,
        shieldimg: shieldIcon,
        swordimg: swordIcon,
    },
    
];
