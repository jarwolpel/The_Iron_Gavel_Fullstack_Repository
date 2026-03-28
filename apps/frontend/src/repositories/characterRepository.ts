// This module send requests to the database to get character data
import { characters } from "../apis/CharacterAPI/characterData";
import type { Character } from "../types/character";

export const characterRepository = {
    getAll(): Character[] {
        return characters;
    },

    findByName(name: string): Character | undefined {
        return characters.find(c => c.name === name);
    },

    findById(id: string): Character | undefined {
        return characters.find(c => c.id === id);
    },

    findOrThrow(name: string): Character {
        const character = this.findByName(name)
        if (!character) throw new Error(`Character ${name} not found.`)
        return character;
    }
};