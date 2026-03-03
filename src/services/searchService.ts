// This is be a service for search stuff
import { characterRepository } from "../repositories/characterRepository";
import type { Character } from "../types/character";

export const searchService = {
    search(searchValue: string): Character[] {
        const characters = characterRepository.getAll(); // Fetch all characters from the repository

        if (!searchValue.trim()) {
        return characters; // Return all characters if search value is empty
    }

        // Filter characters by name (case insensitive)
        return characters.filter(character =>
            character.name.toLowerCase().includes(searchValue.toLowerCase())
        );
    }
};