import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import "./Characterscreen.css";
import { useCharacterSelect } from "../../../hooks/useCharacterSelect";
import { characterService } from "../../../services/characterService";
import type { Character } from "../../../types/character";
import HealthIcon from "../../../assets/icons/health.png";
import SwordIcon from "../../../assets/icons/sword.png";
import ShieldIcon from "../../../assets/icons/shield.png";
import { MenuBox } from "../menu-box/menuBox";

export const CharacterSelect = (
) => {
    const navigate = useNavigate();
    const [search, setSearch] = useState<string>("");
    const [characters, setCharacters] = useState<Character[]>([]);
    const { selected, toggleSelect, canSelect } = useCharacterSelect();

    useEffect(() => {
        const fetchCharacters = async () => {
            try {
                const result = await characterService.search(search);
                setCharacters(result);
            } catch (error) {
                console.error("Error fetching characters:", error);
                setCharacters([]);
            }
        };

        fetchCharacters();
    }, [search]);

    return (
        <MenuBox>
            <div 
            className="character-select"
            >
                <h1>Select 2 Characters</h1>
                <div 
                className="search-form"
                >
                    <input
                        type="text"
                        placeholder="Search Character list..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>            
                <div 
                className="character-grid"
                >
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
                                    <img src={HealthIcon} alt="Health" className="stat-icon" />
                                    {character.health}
                                </li>
                                <li>
                                    <img src={SwordIcon} alt="Damage" className="stat-icon" />
                                    {character.damage}
                                </li>
                                <li>
                                    <img src={ShieldIcon} alt="Armor" className="stat-icon" />
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
        </MenuBox>
    );
};