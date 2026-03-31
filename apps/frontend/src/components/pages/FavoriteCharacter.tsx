import { useState, useEffect } from "react";
import type { Character } from "../../types/character";
import { Search } from "../common/CharacterFavorite/search";
import { CharacterListDisplay } from "../common/CharacterFavorite/CharacterListDisplay";
import { characterService } from "../../services/characterService";
import { MenuBox } from "../common/menu-box/menuBox";
import { useSearch } from "../../hooks/useSearch";

export function Favorites() {
  const [searchValue, setSearchValue] = useState("");
  const [characters, setCharacters] = useState<Character[]>([]);

  // Fetch all characters from backend on mount
  useEffect(() => {
    const fetchAllCharacters = async () => {
      try {
        const allChars = await characterService.getAll();
        setCharacters(allChars);
      } catch (err) {
        console.error("Failed to fetch characters:", err);
      }
    };

    fetchAllCharacters();
  }, []);

  // Filter characters based on search
  const filteredCharacters = useSearch(characters, searchValue);

  return (
    <MenuBox>
      <div>
        <h2>Pick Your Favorite Characters</h2>
        <Search searchValue={searchValue} handleSearchChange={setSearchValue} />
        {/* Always render the list, filter it dynamically */}
        <CharacterListDisplay
          characters={filteredCharacters}
          updateCharacters={setCharacters}
        />
      </div>
    </MenuBox>
  );
}

export default Favorites;