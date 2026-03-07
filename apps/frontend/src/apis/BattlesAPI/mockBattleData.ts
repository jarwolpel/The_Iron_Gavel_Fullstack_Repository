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
    },
    {
        id: "4",
        name: "Battle of the Oasis",
        description: "Read Player 1",
        characters: [
            characterRepository.findOrThrow("Genghis Khan"), 
            characterRepository.findOrThrow("Master Chief")
        ]
    },
    {
        id: "5",
        name: "Kings Row",
        description: "A classic Rienhardt mirror match",
        characters: [
            characterRepository.findOrThrow("Genghis Khan"), 
            characterRepository.findOrThrow("Master Chief"), 
        ]
    },
    {
        id: "6",
        name: "Numbani",
        description: "Dive vs Poke",
        characters: [
            characterRepository.findOrThrow("Genghis Khan"), 
            characterRepository.findOrThrow("Master Chief")
        ]
    },
    {
        id: "7",
        name: "Route 66",
        description: "A Spaghetti Western",
        characters: [
            characterRepository.findOrThrow("Genghis Khan"), 
            characterRepository.findOrThrow("Master Chief")
        ]
    },
    {
        id: "8",
        name: "Ilios Well",
        description: "THE CAT HAS A JETPACK",
        characters: [
            characterRepository.findOrThrow("Genghis Khan"), 
            characterRepository.findOrThrow("Master Chief")
        ]
    },
    {
        id: "9",
        name: "Lijiang Tower",
        description: "The Dragon meets The Blizzard",
        characters: [
            characterRepository.findOrThrow("Genghis Khan"), 
            characterRepository.findOrThrow("Master Chief")
        ]
    },
    {
        id: "10",
        name: "Mario's Galaxy",
        description: "yAHOOOOoooooo",
        characters: [
            characterRepository.findOrThrow("Genghis Khan"), 
            characterRepository.findOrThrow("Master Chief")
        ]
    },
];