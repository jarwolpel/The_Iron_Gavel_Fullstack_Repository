import { useState } from "react";
import type { Character } from "../../../data/characterList";
import { Search } from "../common/CharacterFavorite/search";
import { CharacterListDisplay } from "../common/CharacterFavorite/CharacterListDisplay";
import { characters as initialCharacters } from "../../../data/characterList";
import { MenuBox } from "../common/menu-box/menuBox";

export function Favorites() {
  const [searchValue, setSearchValue] = useState("");
  const [characters, setCharacters] = useState<Character[]>(initialCharacters);

  // Filter characters by search
  const filteredCharacters = characters.filter((c) =>
    c.name.toLowerCase().includes(searchValue.toLowerCase())
  );

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