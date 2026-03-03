// This is a placeholder for search hook
import { useState } from "react";
import type { Character } from "../types/character";

export function useSearch(characters: Character[], searchValue: string) {
    const [filteredCharacters, setFilteredCharacters] = useState<Character[]>(characters);

    // Update filtered characters when search value changes
    const filterCharacters = () => {
        const filtered = characters.filter((character) =>
            character.name.toLowerCase().includes(searchValue.toLowerCase())
        );
        setFilteredCharacters(filtered);
    };

    // Trigger the filtering on search change
    if (searchValue.trim() === "") {
        setFilteredCharacters([]); // Clear results if searchValue is empty
    } else {
        filterCharacters();
    }
    return filteredCharacters;
}