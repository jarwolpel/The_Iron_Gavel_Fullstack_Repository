// This is a placeholder for search hook
import { useState, useEffect } from "react";
import type { Character } from "../types/character";

export function useSearch(characters: Character[], searchValue: string) {
  const [filteredCharacters, setFilteredCharacters] = useState<Character[]>(characters);

  useEffect(() => {
    if (searchValue.trim() === "") {
      setFilteredCharacters(characters); // Reset to all characters if search is empty
    } else {
      const filtered = characters.filter((character) =>
        character.name.toLowerCase().includes(searchValue.toLowerCase())
      );
      setFilteredCharacters(filtered); // Update state with filtered characters
    }
  }, [searchValue, characters]); // Re-run when searchValue or characters change

  return filteredCharacters;
}