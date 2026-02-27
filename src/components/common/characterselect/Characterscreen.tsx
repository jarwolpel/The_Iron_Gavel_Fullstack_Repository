import { useState } from "react";
import { useNavigate } from "react-router";
import "./Characterscreen.css";
import { useCharacterSelect } from "../../../hooks/useCharacterSelect";
import { characterService } from "../../../services/characterService";

export const CharacterSelect = (
) => {
    const navigate = useNavigate();
    const [search, setSearch] = useState<string>("");
    const { selected, toggleSelect, canSelect } = useCharacterSelect();

    const characters = characterService.search(search)

    return (
    <div className="character-select">
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
            {characters.map(character => (                
                <button
                    key={character.id}
                    className={`character-card ${selected.some(c => c.id === character.id) ? "selected" : ""}`}
                    onClick={() => toggleSelect(character)}
                    disabled={!canSelect(character)}>
                    {/* Character image */}
                    <img
                    src={character.image} 
                    alt={character.name} 
                    className="character-image"
                    />
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
                
            ))}
        </div>
            <button
                className="start-battle"
                disabled={selected.length !== 2}
                onClick={() => {
                    navigate("/create-battle", {
                        state: { selectedCharacters: selected }
                    })
                }}
                >
                Continue
            </button>
        </div>
    );
};