//This module handles CharacterSelect validation
//import { characterRepository } from "../repositories/characterRepository";
import type { Character } from "../types/character";

const BASE_URL = import.meta.env.VITE_API_BASE_URL + "/api/v1";

console.log("BASE_URL =", BASE_URL);

export const characterService = {

    async getAll(): Promise<Character[]> {
        const response = await fetch(`${BASE_URL}/characters`);
        const json = await response.json();
        return Array.isArray(json) ? json : json.data || [];
    },

    async search(query: string): Promise<Character[]> {
        if (!query.trim()) return this.getAll(); // fetch all if search is empty
        const response = await fetch(`${BASE_URL}/characters/search?q=${query}`);
        const json = await response.json();
        return Array.isArray(json) ? json : json.data || [];
    },

    async getByName(name: string): Promise<Character | null> {
        if (!name.trim()) return null;
        const response = await fetch(`${BASE_URL}/characters?name=${name}`);
        const json = await response.json();
        const characters = Array.isArray(json) ? json : json.data || [];
        return characters[0] || null;
    },

    async toggleFavorite(id: string, isFavourite: boolean, sessionToken: string | null): Promise<Character> {
        const response = await fetch(`${BASE_URL}/characters/${id}/favourite`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json", ...(sessionToken ? { Authorization: `Bearer ${sessionToken}` } : {}) },
            body: JSON.stringify({ isFavourite }),
        });
        const json = await response.json();
        return Array.isArray(json) ? json[0] : json.data || json;
    },
};
