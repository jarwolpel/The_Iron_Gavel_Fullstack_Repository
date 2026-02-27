import type { Battle } from "../../types/battle";
import { characterRepository } from "../../repositories/characterRepository";

export const initialBattles: Battle[] = [
    {
        id: "1",
        name: "Battle of Gazumbo",
        description: "This was a doozy!",
        characters: [
            characterRepository.findOrThrow("Master Chief"), 
            characterRepository.findOrThrow("Thomas Edison")
        ]
    },
    {
        id: "2",
        name: "Azgard",
        description: "Holy smokes that wizard almost lived!",
        characters: [
            characterRepository.findOrThrow("Nikola Tesla"), 
            characterRepository.findOrThrow("Thomas Edison")
        ]
    },
    {
        id: "3",
        name: "Night City",
        description: "See you in the afterlife...",
        characters: [
            characterRepository.findOrThrow("Genghis Khan"), 
            characterRepository.findOrThrow("Master Chief")
        ]
    }
];