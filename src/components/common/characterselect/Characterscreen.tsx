import { useState } from "react";
import { fetchCharacters } from "../../../apis/CharacterAPI/characterAPI";
import type { Character } from "../../../types/character";
import "./Characterscreen.css";

export const CharacterSelect = (
) => {
    const [selected, setSelected] = useState<Character[]>([]);
    const [search, setSearch] = useState<string>("");

    const characters = fetchCharacters();

    const toggleSelect = (character: Character) => {
        setSelected((prev) => {
            const isSelected = prev.some(c => c.id === character.id);

                if (isSelected) {
                    return prev.filter(c => c.id !== character.id);
                }

                if (prev.length === 2) {
                    return prev;
                }

            return [...prev, character];
        });
       setSearch("");
    };

    const filteredCharacters = characters.filter((character: Character) =>
        character.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
    <div 
    className="character-select"
    >
        <h1>Select 2 Characters</h1>
            <div className="search-form">
                <input
                    type="text"
                    placeholder="Search Character list..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>            
        <div className="character-grid">
        {filteredCharacters.map((character: Character) => {
            const isSelected = selected.some(c => c.id === character.id);

            return (
                <button
                    key={character.id}
                    className={`character-card ${isSelected ? "selected" : ""}`}
                    onClick={() => toggleSelect(character)}
                    disabled={!isSelected && selected.length === 2}>
                    {/* Character image */}
                    <img
                    src={character.image} 
                    alt={character.name} 
                    className="character-image"/>
                <h3>{character.name}</h3>

                <ul className="character-stats">
                    <li>
                        <img src={character.healthimg} alt="Health" className="stat-icon" />
                        {character.health}
                    </li>
                    <li>
                        <img src={character.swordimg} alt="Damage" className="stat-icon" />
                        {character.damage}
                    </li>
                    <li>
                        <img src={character.shieldimg} alt="Armor" className="stat-icon" />
                        {character.armor}
                        </li>
                    </ul>
                    </button>
                );
            })}
        </div>

            <button
                className="start-battle"
                disabled={selected.length !== 2}
                onClick={() => console.log("Selected Characters:", selected)}>
                Start Battle
            </button>
        </div>
    );
};
