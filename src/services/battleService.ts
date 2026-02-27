//This module handles validation for battles
import { battleRepository } from "../repositories/battleRepository";
import type { Battle } from "../types/battle";
import type { Character } from "../types/character";

export const battleService = {
    getAll(): Battle[] {
        return battleRepository.getAll();
    },

    create(name: string, description: string, characters: Character[]): Battle {
        if (!name.trim()) throw new Error (`Battle name is required.`);
        if (!description.trim()) throw new Error (`Battle description is required.`);
        if (characters.length !== 2) throw new Error (`Select 2 characters.`);

        const newBattle: Battle = {
            id: Date.now().toString(),
            name,
            description,
            characters,
        };

        return battleRepository.save(newBattle);
    }
};