//This module handles CharacterSelect validation
//import { characterRepository } from "../repositories/characterRepository";
import type { Character } from "../types/character";

export const characterService = {
    async getAll(): Promise<Character[]> {
        const response = await fetch(`/api/characters`);
        const json = await response.json();
        return json.data || [];
    },

    async search(query: string): Promise<Character[]> {
        if (!query.trim()) return []; // return empty array if query is blank

        const response = await fetch(`/api/characters/search?q=${query}`);
        const json = await response.json();
        return json.data || [];
    },

    async getByName(name: string): Promise<Character | null> {
        if (!name.trim()) return null;

        const response = await fetch(`/api/characters?name=${name}`);
        const json = await response.json();
        return json.data || null;
    }
};

