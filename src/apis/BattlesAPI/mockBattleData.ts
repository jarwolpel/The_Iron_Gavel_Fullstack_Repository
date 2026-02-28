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
            characterRepository.findOrThrow("Reinhardt"), 
            characterRepository.findOrThrow("Reinhardt")
        ]
    },
    {
        id: "6",
        name: "Numbani",
        description: "Dive vs Poke",
        characters: [
            characterRepository.findOrThrow("Sigma"), 
            characterRepository.findOrThrow("Winston")
        ]
    },
    {
        id: "7",
        name: "Route 66",
        description: "A Spaghetti Western",
        characters: [
            characterRepository.findOrThrow("Cole Cassidy"), 
            characterRepository.findOrThrow("Elizabeth Ashe")
        ]
    },
    {
        id: "8",
        name: "Ilios Well",
        description: "THE CAT HAS A JETPACK",
        characters: [
            characterRepository.findOrThrow("Jetpack Cat"), 
            characterRepository.findOrThrow("Roadhog")
        ]
    },
    {
        id: "9",
        name: "Lijiang Tower",
        description: "The Dragon meets The Blizzard",
        characters: [
            characterRepository.findOrThrow("Genji"), 
            characterRepository.findOrThrow("Mei")
        ]
    },
    {
        id: "10",
        name: "Mario's Galaxy",
        description: "yAHOOOOoooooo",
        characters: [
            characterRepository.findOrThrow("Mario"), 
            characterRepository.findOrThrow("Turtle")
        ]
    },
];