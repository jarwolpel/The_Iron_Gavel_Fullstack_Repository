import { useState } from "react";
import type { Character } from "../../types/character";
import { Search } from "../common/CharacterFavorite/search";
import { CharacterListDisplay } from "../common/CharacterFavorite/CharacterListDisplay";
import { fetchCharacters as initialCharacters } from "../../apis/CharacterAPI/characterAPI";
import { MenuBox } from "../common/menu-box/menuBox";
import { useSearch } from "../../hooks/useSearch";

export function Favorites() {
  const [searchValue, setSearchValue] = useState("");
  const [characters, setCharacters] = useState<Character[]>(initialCharacters);

  // Filter characters by search
  const filteredCharacters = useSearch(characters, searchValue);

  return (
    <MenuBox>
      <div>
        <div>
          <h2>Pick Your Favorite Characters</h2>
          <Search searchValue={searchValue} handleSearchChange={setSearchValue} />
            {searchValue.trim() !== "" && (
              <CharacterListDisplay
                characters={filteredCharacters}
                updateCharacters={setCharacters}/>
              )}
        </div>
      </div>
    </MenuBox>
  );
}

export default Favorites;