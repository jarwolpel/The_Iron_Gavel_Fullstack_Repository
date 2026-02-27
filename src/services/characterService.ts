//This module handles CharacterSelect validation
import { characterRepository } from "../repositories/characterRepository";
import type { Character } from "../types/character";

export const characterService = {
    getAll(): Character[] {
        return characterRepository.getAll();
    },

    search(query: string): Character[] {
        const lower = query.toLocaleLowerCase();
        return characterRepository.getAll().filter(c => 
            c.name.toLocaleLowerCase().includes(lower)
        );
    },

    getByName(name: string): Character {
        return characterRepository.findOrThrow(name);
    }
};

