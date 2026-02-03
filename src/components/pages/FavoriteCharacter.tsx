import { useState } from "react";
import type { Character } from "../../../data/characterList";
import { Search } from "../common/CharacterFavorite/search";
import { CharacterListDisplay } from "../common/CharacterFavorite/CharacterListDisplay";
import { characters as initialCharacters } from "../../../data/characterList";

export function Favorites() {
  const [searchValue, setSearchValue] = useState("");
  const [characters, setCharacters] = useState<Character[]>(initialCharacters);

  // Filter characters by search
  const filteredCharacters = characters.filter((c) =>
    c.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div
        style={{
            width: "100%",
            minHeight: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
            padding: "40px 0",}}>
                <div
                    style={{
                        width: "90%",
                        maxWidth: "1200px",
                        padding: "24px",
                        marginTop: "280px",
                        backgroundColor: "rgba(20, 20, 20, 0.9)",
                        border: "2px solid #ceb07a",
                        borderRadius: "12px",
                        boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
                        display: "flex",
                        flexDirection: "column",
                        gap: "20px",
                        color: "white",
                        pointerEvents: "auto",}}>
            <h2>Pick Your Favorite Characters</h2>
            <Search searchValue={searchValue} handleSearchChange={setSearchValue} />
            {searchValue.trim() !== "" && (
                <CharacterListDisplay
                characters={filteredCharacters}
                updateCharacters={setCharacters}/>
            )}
        </div>
    </div>
  );
}

export default Favorites;